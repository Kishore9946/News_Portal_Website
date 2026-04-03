// DOM Elements
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const categoryBtns = document.querySelectorAll('.category-btn');
const newsGrid = document.getElementById('newsGrid');
const loader = document.getElementById('loader');
const currentCategoryTitle = document.getElementById('currentCategoryTitle');
const currentCategoryDesc = document.getElementById('currentCategoryDesc');
const heroSection = document.getElementById('heroSection');
const mainContent = document.getElementById('mainContent');

// Mobile Menu Toggle
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Base Mock Database
const defaultNewsDatabase = [
    // --- TECHNOLOGY ---
    { id: 101, category: 'technology', title: 'T-Hub Hyderabad Launches Phase 3 to Support Global AI Startups', excerpt: 'The world\'s largest innovation campus in Hyderabad announces its aggressive new AI incubation strategy.', image: 'images/tech_thub.png', author: 'K. Rao', date: '2 hours ago', featured: true },
    { id: 102, category: 'technology', title: 'IIT Madras Develops Revolutionary Graphene Microchip', excerpt: 'Researchers at IIT Madras have successfully fabricated a silicon-alternative chip operating at unprecedented speeds.', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/69/IIT_Madras_Logo.svg/330px-IIT_Madras_Logo.svg.png', author: 'Venkatesh S.', date: '1 hour ago' },
    { id: 103, category: 'technology', title: 'Mumbai Financial Tech Sector Integrates Quantum Encryption', excerpt: 'Top banking institutions in Nariman Point are upgrading database security to be quantum-resistant.', image: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Mumbai_skyline.jpg', author: 'Aarti Desai', date: '3 hours ago' },
    { id: 104, category: 'technology', title: 'Amaravati Smart City Framework Nominated for Global Tech Award', excerpt: 'Andhra Pradesh\'s capital region praised for its AI-driven traffic and utility management systems.', image: 'https://upload.wikimedia.org/wikipedia/commons/d/db/Highcourt_of_AP.jpg', author: 'Ravi Teja', date: '4 hours ago' },

    // --- SPORTS ---
    { id: 201, category: 'sports', title: 'IPL 2026 Top Contenders: Squad Strength Analysis', excerpt: 'A deep dive into the formidable lineups for IPL 2026. Who holds the best balance to lift the trophy this year?', image: 'images/ipl_2026_stadium.png', author: 'Harsha B.', date: '1 hour ago', featured: true },
    { id: 202, category: 'sports', title: 'The Final Four: Predicting the IPL 2026 Playoffs', excerpt: 'Based on squad depth on paper and performance in clutch moments, we predict Mumbai Indians, Chennai Super Kings, Sunrisers Hyderabad, and Kolkata Knight Riders to dominate the tournament.', image: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/M.A.Chidambaram_Stadium_before_IND_vs_AUS_3rd_ODI_2023.jpg', author: 'Ravi S.', date: '3 hours ago' },
    { id: 203, category: 'sports', title: 'Clutch Players: Who Will Deliver Under Pressure in 2026?', excerpt: 'While team balance wins group stages, individual brilliance and ice-cold execution in clutch moments determine the ultimate IPL champions.', image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Uppal_stadium_Rajiv_Gandhi_International_Cricket_Stadium.jpg', author: 'S. Gavaskar', date: '5 hours ago' },
    { id: 204, category: 'sports', title: 'Indian Men\'s Hockey Team Secures Thrilling Victory Over Australia', excerpt: 'A stellar performance in the final quarter ensures a 3-2 win for India in the FIH Pro League.', image: 'https://loremflickr.com/600/400/indian,hockey', author: 'S. Singh', date: '8 hours ago' },
    { id: 205, category: 'sports', title: 'Neeraj Chopra Claims Gold at Diamond League', excerpt: 'India\'s star javelin thrower continues his dominant run on the world stage with an 88.5m throw.', image: 'https://loremflickr.com/600/400/javelin,athlete', author: 'A. Kumar', date: '12 hours ago' },
    { id: 206, category: 'sports', title: 'Champions League: Real Madrid Pulls Off Another Dramatic Comeback', excerpt: 'Late goals secure a spot in the semi-finals, reminding the world of their European pedigree.', image: 'https://loremflickr.com/600/400/real-madrid,football', author: 'Carlos V.', date: '1 day ago' },
    { id: 207, category: 'sports', title: 'ISL 2026: Mohun Bagan vs Mumbai City FC Promises Fireworks', excerpt: 'The two heavyweights clash in a top-of-the-table thriller in Kolkata this weekend.', image: 'https://loremflickr.com/600/400/isl,football', author: 'R. Banerjee', date: '1 day ago' },
    { id: 208, category: 'sports', title: 'Wimbledon: Alcaraz Defends Title in Grueling 5-Set Final', excerpt: 'The young Spaniard cements his legacy on grass after a marathon match against Djokovic.', image: 'https://loremflickr.com/600/400/tennis,player', author: 'J. Smith', date: '2 days ago' },

    // --- WORLD ---
    { id: 301, category: 'world', title: 'Andhra Pradesh Signs Historic Twin-State Pact with California', excerpt: 'The AP government aligns with US tech giants to establish a new renewable energy corridor in Visakhapatnam.', image: 'images/world_ap_pact.png', author: 'N. Naidu', date: '1 day ago', featured: true },
    { id: 302, category: 'world', title: 'Global Investors Summit in Mumbai Secures $50 Billion FDI', excerpt: 'International delegates converge at the Jio World Centre to invest heavily in western India infrastructure.', image: 'https://loremflickr.com/600/400/mumbai,building/all', author: 'Rajesh Shah', date: '3 hours ago' },
    { id: 303, category: 'world', title: 'Chennai Port Ranks Top 5 Most Efficient Hubs in Asia', excerpt: 'International shipping bodies praise the rapid modernization and turnaround times at Chennai.', image: 'https://loremflickr.com/600/400/chennai,port', author: 'K. Balaji', date: '5 hours ago' },

    // --- BUSINESS ---
    { id: 401, category: 'business', title: 'BSE Sensex Hits Historic 90,000 Mark as Local Startups Boom', excerpt: 'Dalal Street erupted in cheers as the index shattered records driven by strong fundamental growth.', image: 'images/business_bse.png', author: 'Neha Gupta', date: '4 hours ago', featured: true },
    { id: 402, category: 'business', title: 'Hyderabad Overtakes Bangalore in Quarterly IT Office Space Absorption', excerpt: 'HITEC City and Gachibowli see massive influx as mega-corporations preference Hyderabad\'s infrastructure.', image: 'https://loremflickr.com/600/400/hyderabad,city', author: 'L. Srinivas', date: '12 hours ago' },
    { id: 403, category: 'business', title: 'Kia Motors Expands Anantapur Plant in Andhra Pradesh', excerpt: 'The automobile giant commits an additional ₹3000 crore to scale EV production specifically in AP.', image: 'https://loremflickr.com/600/400/kia,factory/all', author: 'T. Prasad', date: '1 day ago' },

    // --- ENTERTAINMENT ---
    { id: 501, category: 'entertainment', title: 'Tollywood Epic Breaks ₹1000 Crore Box Office Worldwide', excerpt: 'A massive visual spectacle from Hyderabad\'s Ramoji Film City proves global audiences crave Indian cinema.', image: 'images/ent_tollywood.png', author: 'M. Krishna', date: '1 day ago', featured: true },
    { id: 502, category: 'entertainment', title: 'Bollywood and Kollywood Combine for Upcoming Action Thriller', excerpt: 'Mumbai and Chennai studios merge to create a high-octane franchise featuring the biggest stars from both industries.', image: 'https://loremflickr.com/600/400/bollywood/all', author: 'Anil Kapoor', date: '6 hours ago' },
    { id: 503, category: 'entertainment', title: 'Live Carnatic Music Festival Lights Up Chennai After Monsoon', excerpt: 'The Margazhi season spirit arrived early this year as thousands gathered at the Music Academy.', image: 'https://loremflickr.com/600/400/carnatic,music', author: 'S. Raman', date: '2 days ago' },

    // --- HEALTH ---
    { id: 601, category: 'health', title: 'Apollo Hospitals Chennai Performs Asia\'s First Remote Robotic Surgery', excerpt: 'Surgeons successfully operated on a patient hundreds of miles away over a 5G specialized medical network.', image: 'https://loremflickr.com/600/400/operating,room', author: 'Dr. Prathap R.', date: '8 hours ago', featured: true },
    { id: 602, category: 'health', title: 'Tata Memorial Mumbai Expands Free Cancer Care Program', excerpt: 'The prestigious hospital announces a new wing specifically dedicated to pediatric oncology treatments.', image: 'https://loremflickr.com/600/400/hospital,mumbai/all', author: 'Meera Patil', date: '12 hours ago' },

    // --- SCIENCE ---
    { id: 651, category: 'science', title: 'ISRO Unveils Next-Gen Reusable Launch Vehicle', excerpt: 'India\'s space agency marks a historic milestone in bringing down the cost of orbital payload delivery.', image: 'images/science_isro.png', author: 'S. Somnath', date: '1 hour ago', featured: true },
    { id: 652, category: 'science', title: 'CCMB Hyderabad Scientists Identify New Rare Disease Biomarker', excerpt: 'The Centre for Cellular and Molecular Biology breakthrough could save thousands of Indian lives through early testing.', image: 'images/health_ccmb.png', author: 'Dr. V. Rao', date: '3 hours ago' },

    // --- PSYCHOLOGY ---
    { id: 701, category: 'psychology', title: 'Managing Mumbai\'s "Hustle Culture" Burnout', excerpt: 'Psychologists note a 40% rise in corporate workers seeking therapy for extreme fatigue in the financial capital.', image: 'images/psych_burnout.png', author: 'Dr. Sunita V.', date: '7 hours ago', featured: true },
    { id: 702, category: 'psychology', title: 'Hyderabad Based Institute Explores Tech-Addiction in Youth', excerpt: 'NIMHANS partnered psychologists present new findings on smartphone dependency among Telugu students.', image: 'https://loremflickr.com/600/400/mental,health', author: 'Dr. Hari K.', date: '14 hours ago' },
    { id: 703, category: 'psychology', title: 'The Mental Health Benefits of Chennai\'s Beach Therapy', excerpt: 'Local clinics are prescribing early morning walks along Marina Beach to effectively handle clinical depression.', image: 'https://loremflickr.com/600/400/chennai,beach', author: 'G. Swaminathan', date: '1 day ago' },

    // --- IDEAS / INVENTIONS ---
    { id: 801, category: 'ideas', title: 'Mumbai Coastal Road: A Triumph of Marine Engineering', excerpt: 'How engineers conquered extreme tidal challenges to build the futuristic multi-lane highway bridging South Mumbai.', image: 'images/ideas_coastal.png', author: 'A. Kadam', date: '2 days ago', featured: true },
    { id: 802, category: 'ideas', title: 'Visakhapatnam Startup Deploys Automated Beach Cleaners', excerpt: 'RK Beach is looking cleaner than ever thanks to AI-driven solar-powered sand sweeper bots.', image: 'https://loremflickr.com/600/400/beach,visakhapatnam/all', author: 'P. Varma', date: '5 hours ago' },
    { id: 803, category: 'ideas', title: 'Hyderabad Innovators Create Affordable Water Purifier from Agri-Waste', excerpt: 'Using locally sourced agricultural husks to provide clean drinking water to remote tribal villages in AP and Telangana.', image: 'https://loremflickr.com/600/400/water,purifier', author: 'S. Reddy', date: '10 hours ago' },

    // --- HUMAN INNOVATION ---
    { id: 901, category: 'human', title: 'The Dharavi Paradox: Raw Innovation Without Silicon', excerpt: 'How Mumbai\'s sprawling informal economy demonstrates stunning human resilience, recycling innovation, and sheer grit that algorithms could never map.', image: 'images/human_dharavi.png', author: 'Rahul M.', date: '5 hours ago', featured: true },
    { id: 902, category: 'human', title: 'Preserving Kondapalli Toys: A Battle of Hand vs Machine', excerpt: 'The artisans of Andhra Pradesh rely on emotion, generational storytelling, and hand-carved perfection that 3D printers simply cannot replicate.', image: 'https://loremflickr.com/600/400/wooden,toy/all', author: 'K. Sastry', date: '10 hours ago' },
    { id: 903, category: 'human', title: 'The Empathy of Hyderabad\'s Nizam Era Food Philanthropists', excerpt: 'The timeless tradition of mass free-feeding (Annadanam) during Ramadan—an exercise in raw empathy, completely unbounded by modern AI logistics.', image: 'https://loremflickr.com/600/400/charminar', author: 'Syed Ali', date: '1 day ago' }
];

const NEWS_DATABASE_VERSION = 1;
let newsDatabase = JSON.parse(localStorage.getItem('newsDatabase'));
let storedNewsDatabaseVersion = parseInt(localStorage.getItem('newsDatabaseVersion'), 10);

if (!newsDatabase || storedNewsDatabaseVersion !== NEWS_DATABASE_VERSION) {
    newsDatabase = defaultNewsDatabase;
    localStorage.setItem('newsDatabase', JSON.stringify(newsDatabase));
    localStorage.setItem('newsDatabaseVersion', NEWS_DATABASE_VERSION);
}

// Content Meta info
const categoryMeta = {
    'trending': { title: 'Top Trending Stories', desc: 'The most read news across all topics right now.' },
    'sports': { title: 'Sports Action', desc: 'Athleticism, scores, and global competitions.' },
    'world': { title: 'World News', desc: 'Global events, geopolitics, and international relations.' },
    'technology': { title: 'Technology Frontiers', desc: 'The bleeding edge of AI, quantum, and hardware.' },
    'business': { title: 'Business & Finance', desc: 'Markets, startups, and economic trends.' },
    'entertainment': { title: 'Entertainment Focus', desc: 'Movies, music, culture, and arts.' },
    'health': { title: 'Health', desc: 'Medical breakthroughs and discoveries.' },
    'science': { title: 'Science', desc: 'Space, physics, and natural sciences.' },
    'psychology': { title: 'Psychology Insights', desc: 'Understanding the complexities of the human mind.' },
    'ideas': { title: 'Inventions & Ideas', desc: 'Concepts shaping the world of tomorrow.' },
    'human': { title: 'Human Innovation ✨', desc: 'The profound works of art, empathy, and chaotic genius that machines cannot replicate.' }
};

// --- AI Smart Features Logic ---
let isHappyNewsOnly = false;

function analyzeSentiment(text) {
    const t = text.toLowerCase();
    const negativeWords = ['crash', 'burnout', 'disease', 'fail', 'death', 'tragedy', 'crisis', 'war', 'attack', 'threat'];
    const positiveWords = ['launch', 'success', 'breakthrough', 'win', 'gold', 'triumph', 'boom', 'cure', 'empathy', 'innovation', 'revolutionary', 'deal'];
    
    let score = 0;
    negativeWords.forEach(w => { if(t.includes(w)) score--; });
    positiveWords.forEach(w => { if(t.includes(w)) score++; });
    
    if (score > 0) return 'positive';
    if (score < 0) return 'negative';
    return 'neutral';
}

function generateSummary() {
    return '<ul><li><strong>Key Insight:</strong> Shows major advancements in the field.</li><li><strong>Impact:</strong> Could change how humans interact with technology.</li><li><strong>Conclusion:</strong> Further developments expected shortly.</li></ul>';
}

window.readAloud = function(title, excerpt) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const msg = new SpeechSynthesisUtterance(title + ". " + excerpt);
        window.speechSynthesis.speak(msg);
    } else {
        alert("Text-to-Speech is not supported in your browser.");
    }
};

window.toggleSummary = function(btn) {
    const summaryBox = btn.closest('.card-content').querySelector('.ai-summary-box');
    if(summaryBox.style.display === 'block') {
        summaryBox.style.display = 'none';
        btn.innerHTML = '✨ Summarize';
    } else {
        btn.innerHTML = '⏳ Thinking...';
        setTimeout(() => {
            summaryBox.style.display = 'block';
            btn.innerHTML = '✨ Hide Summary';
        }, 600);
    }
};

// Render function
function renderCards(articles) {
    newsGrid.innerHTML = '';
    
    const displayArticles = isHappyNewsOnly 
        ? articles.filter(a => analyzeSentiment(a.title + " " + (a.excerpt||'')) !== 'negative')
        : articles;
    
    if (displayArticles.length === 0) {
        newsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary); padding: 40px 0;">New stories are being written. Check back soon.</p>';
        return;
    }
    
    displayArticles.forEach((article, index) => {
        const isFeatured = index === 0 && article.featured ? 'featured' : '';
        const articleUrl = article.url || `https://www.google.com/search?q=${encodeURIComponent(article.title + ' news')}`;
        const target = '_blank';
        const sentiment = analyzeSentiment(article.title + " " + (article.excerpt||''));
        
        const card = document.createElement('article');
        card.className = `news-card ${isFeatured}`;
        
        // Escape quotes to prevent breaking the onclick handlers
        const safeTitle = (article.title || '').replace(/'/g, "\\'").replace(/"/g, "&quot;");
        const safeExcerpt = (article.excerpt || '').replace(/'/g, "\\'").replace(/"/g, "&quot;");

        card.innerHTML = `
            <a href="${articleUrl}" target="${target}" rel="noopener noreferrer" style="text-decoration: none; color: inherit; display: block; height: 100%;">
                <div class="card-img-wrapper" style="overflow: hidden; border-radius: var(--radius-lg) var(--radius-lg) 0 0;">
                    <img src="${article.image || 'images/news_flash_placeholder.png'}" alt="${article.title}" class="card-img" loading="lazy" onerror="this.src='images/news_flash_placeholder.png'">
                    <span class="sentiment-badge sentiment-${sentiment}">${sentiment}</span>
                </div>
                <div class="card-content" style="display: flex; flex-direction: column; height: calc(100% - 200px);">
                    <div class="card-meta">
                        <span class="card-category" style="color: ${article.category === 'human' ? 'var(--gold)' : 'var(--accent-blue)'}">${article.category.toUpperCase()}</span>
                        <span class="card-date">${article.date}</span>
                    </div>
                    <h3 class="card-title">${article.title}</h3>
                    <p class="card-excerpt" style="flex-grow: 1;">${article.excerpt || ''}</p>
                    
                    <div class="ai-btn-group">
                        <button class="ai-btn" onclick="event.preventDefault(); window.toggleSummary(this)">✨ Summarize</button>
                        <button class="ai-btn" onclick="event.preventDefault(); window.readAloud('${safeTitle}', '${safeExcerpt}')">🔊 Listen</button>
                    </div>
                    
                    <div class="ai-summary-box">
                        ${generateSummary()}
                    </div>
                    
                    <div class="card-footer" style="display: flex; justify-content: space-between; align-items: center; margin-top: auto; padding-top: 15px;">
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <img src="https://ui-avatars.com/api/?name=${(article.author||'').replace(/[^a-zA-Z\s]/g, '').replace(/\s+/g, '+') || 'News'}&background=random" alt="Author" class="author-avatar" onerror="this.style.display='none'">
                            <div class="author-info">
                                <div class="author-name" style="max-width: 120px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${article.author || 'News Source'}</div>
                            </div>
                        </div>
                        <span class="read-more" style="color: var(--accent-blue); font-size: 0.85rem; font-weight: 500;">Read Full Story &rarr;</span>
                    </div>
                </div>
            </a>
        `;
        newsGrid.appendChild(card);

        const cardImg = card.querySelector('img.card-img');
        if (cardImg) {
            cardImg.onerror = function() {
                this.onerror = null;
                this.src = getFallbackImageUrl(article, article.category);
            };
        }
    });
}

function isValidImageUrl(url) {
    if (!url || typeof url !== 'string') return false;
    const lower = url.toLowerCase();
    return !(/\.svg$|favicon|logo|placeholder|empty_state|google|twitter|facebook|youtube|pinterest/.test(lower));
}

function getImageQuery(text, category) {
    const normalized = (text || '').toLowerCase();
    const keywordMap = [
        { terms: ['holi'], query: 'holi festival colors' },
        { terms: ['music', 'concert', 'carnatic', 'melody', 'song', 'album'], query: 'music concert' },
        { terms: ['neeraj chopra', 'javelin', 'athlete', 'track and field'], query: 'javelin thrower' },
        { terms: ['cricket', 'ipl', 'wicket', 'batter', 'bowler', 'stadium'], query: 'cricket match' },
        { terms: ['football', 'soccer', 'champions league', 'goal', 'stadium'], query: 'football match' },
        { terms: ['hockey'], query: 'hockey match' },
        { terms: ['tennis', 'wimbledon'], query: 'tennis court' },
        { terms: ['stock', 'sensex', 'market', 'finance', 'investment'], query: 'stock market' },
        { terms: ['hospital', 'surgery', 'medical', 'healthcare', 'clinic'], query: 'hospital' },
        { terms: ['rocket', 'isro', 'launch', 'space'], query: 'space launch' },
        { terms: ['startup', 'innovation', 'technology', 'robot', 'ai'], query: 'technology startup' },
        { terms: ['beach', 'coast', 'port', 'marine'], query: 'beach' },
        { terms: ['toy', 'artisan', 'handmade', 'kondapalli'], query: 'handicraft toy' },
        { terms: ['charminar', 'heritage', 'historic'], query: 'charminar' },
        { terms: ['film', 'bollywood', 'tollywood', 'movie', 'cinema', 'shoot'], query: 'film set' }
    ];

    for (const mapping of keywordMap) {
        if (mapping.terms.some(term => normalized.includes(term))) {
            return mapping.query;
        }
    }

    const categoryQueries = {
        technology: 'technology innovation',
        sports: 'sports action',
        world: 'world news',
        business: 'finance',
        entertainment: 'entertainment',
        health: 'medical care',
        science: 'science discovery',
        psychology: 'mental health',
        ideas: 'innovation',
        human: 'human story'
    };

    return categoryQueries[category] || 'news';
}

function getFallbackImageUrl(article, category) {
    const searchQuery = getImageQuery(`${article.title || ''} ${article.excerpt || ''}`, category);
    return `https://loremflickr.com/800/450/${encodeURIComponent(searchQuery)}/all`;
}

function resolveArticleImage(article, category) {
    if (isValidImageUrl(article.urlToImage)) {
        return article.urlToImage;
    }
    return getFallbackImageUrl(article, category);
}

// Format API Data
function formatApiData(articles, categoryName) {
    if(!articles || !articles.length) return [];
    
    // Filter out articles missing title
    const valid = articles.filter(a => a.title);
    
    return valid.map((a, index) => {
        return {
            id: index + Math.random(),
            category: categoryName,
            title: a.title,
            excerpt: a.description || a.title, // Fallback excerpt to title if description missing
            image: resolveArticleImage(a, categoryName),
            author: a.author || (a.source ? a.source.name : "Unknown"),
            date: new Date(a.publishedAt).toLocaleDateString() + " " + new Date(a.publishedAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
            url: a.url,
            featured: index === 0
        };
    });
}

// API Directory Map
const apiMap = {
    'technology': 'technology/in',
    'world': 'general/us', // Treat US as World
    'business': 'business/in',
    'entertainment': 'entertainment/in',
    'sports': 'sports/in',
    'health': 'health/in',
    'science': 'science/in'
};

// Global State for Auto-Update
let currentQueryType = 'category';
let currentQueryValue = 'trending';

// Main Fetch Logic mapped to Serverless Backend
async function fetchNewsData(queryType, queryValue, isSilentRefresh = false) {
    currentQueryType = queryType;
    currentQueryValue = queryValue;

    // UI Skeleton state
    const emptyState = document.getElementById('emptyState');
    if (!isSilentRefresh) {
        newsGrid.innerHTML = '';
        newsGrid.style.display = 'none';
        if(emptyState) emptyState.style.display = 'none';
        loader.style.display = 'block';
    }

    try {
        let finalData = [];
        
        // Search
        if (queryType === 'search') {
            const res = await fetch(`/.netlify/functions/news?search=${encodeURIComponent(queryValue)}`);
            if(!res.ok) throw new Error("Search API call failed");
            const data = await res.json();
            finalData = formatApiData(data.articles, 'Search Results');
        } else {
            // Category Action
            const category = queryValue;
            
            if (!apiMap[category] && category !== 'trending') {
                finalData = newsDatabase.filter(item => item.category === category);
            } else if (category === 'trending') {
                const res = await fetch(`/.netlify/functions/news?category=general/in`);
                if(!res.ok) throw new Error("API call failed");
                const data = await res.json();
                const apiData = formatApiData(data.articles, 'trending');
                
                const mockFeatured = newsDatabase.filter(item => item.featured);
                finalData = [...mockFeatured.slice(0, 3), ...apiData];
            } else {
                const res = await fetch(`/.netlify/functions/news?category=${apiMap[category]}`);
                if(!res.ok) throw new Error("API call failed");
                const data = await res.json();
                finalData = formatApiData(data.articles, category);
            }
        }

        if (!isSilentRefresh) loader.style.display = 'none';
        
        if (finalData.length === 0) {
            if(emptyState) emptyState.style.display = 'flex';
        } else {
            newsGrid.style.display = 'grid';
            renderCards(finalData);
        }

    } catch(err) {
        console.error("Live fetch blocked or failed. Attempting offline fallback:", err);
        if (!isSilentRefresh) loader.style.display = 'none';
        
        let fallbackData;
        if(queryType === 'search') {
            const term = queryValue.toLowerCase();
            fallbackData = newsDatabase.filter(item => 
                item.title.toLowerCase().includes(term) || 
                item.excerpt.toLowerCase().includes(term)
            );
        } else {
            const category = queryValue;
            fallbackData = category === 'trending' ? newsDatabase : newsDatabase.filter(item => item.category === category);
            if (fallbackData.length === 0) fallbackData = newsDatabase;
        }

        if (fallbackData.length === 0) {
            if(emptyState) emptyState.style.display = 'flex';
        } else {
            newsGrid.style.display = 'grid';
            renderCards(fallbackData);
        }
    }
    setTimeout(() => { newsGrid.style.opacity = '1'; }, 50);
}

// Filter Function
function filterCategory(category) {
    newsGrid.style.opacity = '0';
    
    // Update Meta
    const meta = categoryMeta[category];
    if(meta) {
        currentCategoryTitle.textContent = meta.title;
        currentCategoryDesc.textContent = meta.desc;
    }
    
    mainContent.setAttribute('data-theme', category);
    
    if(category === 'trending') {
        heroSection.style.display = 'flex';
    } else {
        heroSection.style.display = 'none';
    }
    
    fetchNewsData('category', category);
}

// Event Listeners for Nav
categoryBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Remove active class
        categoryBtns.forEach(b => b.classList.remove('active'));
        
        // Add active class
        e.target.classList.add('active');
        
        // Close mobile menu if open
        if(window.innerWidth <= 768) {
            navLinks.classList.remove('show');
        }
        
        const category = e.target.getAttribute('data-category');
        filterCategory(category);
    });
});

// Search Bar Input Handling
const topSearchInput = document.getElementById('searchInput');
if (topSearchInput) {
    topSearchInput.addEventListener('keypress', (e) => {
        if(e.key === 'Enter') {
            const query = e.target.value.trim();
            if(query) {
                const normalizedQuery = query.toLowerCase();
                let matchedCategory = null;
                const availableCats = Object.keys(categoryMeta);
                
                // 1. Exact match
                if (categoryMeta[normalizedQuery]) {
                    matchedCategory = normalizedQuery;
                } 
                // 2. Prefix match (at least 3 characters, e.g., 'psy' -> 'psychology')
                else if (normalizedQuery.length >= 3) {
                    matchedCategory = availableCats.find(cat => cat.startsWith(normalizedQuery));
                    
                    // 3. Common abbreviations & user edge cases
                    if (!matchedCategory) {
                        if (['psc', 'psyc', 'psch'].includes(normalizedQuery)) matchedCategory = 'psychology';
                        else if (['tech', 'it'].includes(normalizedQuery)) matchedCategory = 'technology';
                        else if (['biz', 'fin', 'finance'].includes(normalizedQuery)) matchedCategory = 'business';
                        else if (['ent', 'movies'].includes(normalizedQuery)) matchedCategory = 'entertainment';
                        else if (['med', 'doc'].includes(normalizedQuery)) matchedCategory = 'health';
                        else if (['sci'].includes(normalizedQuery)) matchedCategory = 'science';
                    }
                }

                if (matchedCategory) {
                    // Activate category view
                    document.querySelectorAll('.category-btn').forEach(b => {
                        b.classList.remove('active');
                        if (b.getAttribute('data-category') === matchedCategory) {
                            b.classList.add('active');
                        }
                    });
                    
                    // Automatically click into the matched feed
                    filterCategory(matchedCategory);
                } else {
                    // Regular text search fallback
                    document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
                    heroSection.style.display = 'none';
                    currentCategoryTitle.textContent = `Results for "${query}"`;
                    currentCategoryDesc.textContent = `Found articles matching your search query.`;
                    mainContent.removeAttribute('data-theme');
                    fetchNewsData('search', query);
                }
            }
        }
    });
}

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
    filterCategory('trending');
    
    // Happy News Toggle Setup
    const happyCheckbox = document.getElementById('happyNewsCheckbox');
    if(happyCheckbox) {
        happyCheckbox.addEventListener('change', (e) => {
            isHappyNewsOnly = e.target.checked;
            const btn = document.getElementById('userProfile').previousElementSibling; // happy toggle label
            if(isHappyNewsOnly) btn.classList.add('active');
            else btn.classList.remove('active');
            
            // Re-fetch with new state
            fetchNewsData(currentQueryType, currentQueryValue, true);
        });
    }
});

// Auto-refresh news every hour (3600000 ms) automatically without user refresh
function updateNews() {
    console.log(`Auto-refreshing news for: ${currentQueryType} - ${currentQueryValue}`);
    fetchNewsData(currentQueryType, currentQueryValue, true); // true for silent refresh
}

setInterval(updateNews, 3600000);

/* --- Chatbot Logic --- */
const chatToggle = document.getElementById('chatToggle');
const chatWindow = document.getElementById('chatWindow');
const closeChat = document.getElementById('closeChat');
const sendChat = document.getElementById('sendChat');
const chatInput = document.getElementById('chatInput');
const chatMessages = document.getElementById('chatMessages');

let isChatOpen = false;

// Toggle Chat
chatToggle.addEventListener('click', () => {
    isChatOpen = !isChatOpen;
    if(isChatOpen) {
        chatWindow.classList.add('show');
        chatToggle.style.display = 'none';
        chatInput.focus();
    }
});

// Close Chat
closeChat.addEventListener('click', () => {
    isChatOpen = false;
    chatWindow.classList.remove('show');
    chatToggle.style.display = 'flex';
});

// Send Message Flow
function handleUserMessage() {
    const text = chatInput.value.trim();
    if(!text) return;
    
    // Add user message
    appendMessage(text, 'user-msg');
    chatInput.value = '';
    
    // Simulate thinking delay
    setTimeout(() => {
        analyzeAndRespond(text);
    }, 600);
}

sendChat.addEventListener('click', handleUserMessage);
chatInput.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') handleUserMessage();
});

function appendMessage(text, className) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `msg ${className}`;
    msgDiv.innerHTML = text; // Allow HTML for links and formatting
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Auto scroll down
}

// NLP Local Match Engine
function analyzeAndRespond(text) {
    const query = text.toLowerCase();
    
    // Catch common greetings
    if (query.match(/\b(hi|hello|hey|yo)\b/i)) {
        appendMessage("Hi there! Feel free to ask me for a summary of sports, tech, or specific news like 'IPL 2026' or 'T-Hub'!", 'bot-msg');
        return;
    }
    
    const tokens = query.split(/\s+/).filter(t => t.length > 2); // Ignore small articles/stop-words
    
    if(tokens.length === 0) {
         appendMessage("Could you be a bit more specific? You can ask me about Business, Technology, or Human Innovation.", 'bot-msg');
         return;
    }
    
    // Score articles in our local memory
    let bestMatch = null;
    let maxScore = 0;
    
    newsDatabase.forEach(article => {
        let score = 0;
        const searchableText = `${article.title} ${article.excerpt} ${article.category}`.toLowerCase();
        
        tokens.forEach(token => {
            if (searchableText.includes(token)) {
                if(article.title.toLowerCase().includes(token)) score += 3; // Heavily weight direct title matches
                else score += 1;
            }
        });
        
        if (score > maxScore) {
            maxScore = score;
            bestMatch = article;
        }
    });
    
    if (bestMatch && maxScore > 0) {
        const articleUrl = bestMatch.url || `https://www.google.com/search?q=${encodeURIComponent(bestMatch.title + ' news')}`;
        appendMessage(`I found an interesting article for you:<br><br><strong>${bestMatch.title}</strong><br>${bestMatch.excerpt}<br><br><a href="${articleUrl}" target="_blank">Read the full story &rarr;</a>`, 'bot-msg');
    } else {
        appendMessage("I couldn't find a specific article matching that right now. Maybe try checking out our Trending or World tabs for the latest global headlines!", 'bot-msg');
    }
}
