// Memory cache to prevent hitting NewsAPI rate limits
const cache = new Map();
const CACHE_TTL = 1000 * 60 * 60; // 1 Hour

exports.handler = async function(event, context) {
    const { category, search } = event.queryStringParameters || {};
    
    // Default to trailing/general if nothing provided
    const isSearch = !!search;
    const queryTerm = isSearch ? search : (category || 'general/in');
    const endpoint = isSearch ? 'everything' : 'top-headlines';
    
    const params = isSearch 
        ? `q=${encodeURIComponent(queryTerm)}&sortBy=publishedAt` 
        : `category=${queryTerm.split('/')[0]}&country=${queryTerm.split('/')[1] || 'in'}`;

    // Cache Key Strategy
    const cacheKey = `${endpoint}-${params}`;
    
    // Check Cache
    if (cache.has(cacheKey)) {
        const cachedEntry = cache.get(cacheKey);
        if (Date.now() - cachedEntry.timestamp < CACHE_TTL) {
            return {
                statusCode: 200,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(cachedEntry.data),
            };
        }
    }

    const API_KEY = process.env.NEWS_API_KEY;
    let url = '';

    if (API_KEY) {
        url = `https://newsapi.org/v2/${endpoint}?${params}&pageSize=20&apiKey=${API_KEY}`;
    } else {
        // Intelligent Fallback to Public Proxy if no key exists yet (so the portal doesn't break)
        if (isSearch) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: "Search queries require a configured NEWS_API_KEY in your Netlify Environment." })
            };
        } else {
            const cat = queryTerm.split('/')[0];
            const country = queryTerm.split('/')[1] || 'in';
            // Custom public proxy for categories
            url = `https://saurav.tech/NewsAPI/top-headlines/category/${cat}/${country}.json`;
        }
    }

    try {
        // Dynamic fetch 
        const response = await fetch(url);
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.message || 'Error fetching from API');
        }

        // Save to cache
        cache.set(cacheKey, {
            data: data,
            timestamp: Date.now()
        });

        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        };

    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed fetching news." })
        };
    }
};
