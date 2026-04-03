// Admin Dashboard Logic
document.addEventListener('DOMContentLoaded', () => {
    // Navigation setup
    document.getElementById('liveSiteBtn').addEventListener('click', () => window.location.href = 'feed.html');
    document.getElementById('logoutBtn').addEventListener('click', () => {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('userRole');
        window.location.href = 'index.html';
    });

    const addNewsForm = document.getElementById('addNewsForm');
    const newsTableBody = document.getElementById('newsTableBody');

    // Load DB
    let newsDatabase = JSON.parse(localStorage.getItem('newsDatabase')) || [];

    function renderTable() {
        newsTableBody.innerHTML = '';
        if(newsDatabase.length === 0) {
            newsTableBody.innerHTML = '<tr><td colspan="5" style="text-align:center; padding: 20px;">No articles found.</td></tr>';
            return;
        }

        // Render in reverse to show newest first
        [...newsDatabase].reverse().forEach((article) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>#${article.id}</td>
                <td><span style="color:var(--accent-blue); text-transform:uppercase; font-size:0.8rem;">${article.category}</span></td>
                <td style="max-width:300px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${article.title}</td>
                <td>${article.author}</td>
                <td><button class="del-btn" data-id="${article.id}">Delete</button></td>
            `;
            newsTableBody.appendChild(tr);
        });

        // Attach delete event listeners
        document.querySelectorAll('.del-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const idToDelete = parseInt(e.target.getAttribute('data-id'));
                if(confirm(`Are you sure you want to delete article #${idToDelete}?`)) {
                    newsDatabase = newsDatabase.filter(a => a.id !== idToDelete);
                    localStorage.setItem('newsDatabase', JSON.stringify(newsDatabase));
                    renderTable();
                }
            });
        });
    }

    addNewsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const newArticle = {
            id: Math.floor(Math.random() * 90000) + 10000, // Generate random 5-digit ID
            category: document.getElementById('newsCategory').value,
            title: document.getElementById('newsTitle').value.trim(),
            author: document.getElementById('newsAuthor').value.trim(),
            image: document.getElementById('newsImage').value.trim(),
            excerpt: document.getElementById('newsExcerpt').value.trim(),
            date: 'Just now', // Mock date
            featured: false // Newly added articles are standard
        };

        // Add to db and save
        newsDatabase.push(newArticle);
        localStorage.setItem('newsDatabase', JSON.stringify(newsDatabase));
        
        renderTable();
        addNewsForm.reset();
        alert('Article successfully published to Live feed!');
    });

    // Initial render
    renderTable();
});
