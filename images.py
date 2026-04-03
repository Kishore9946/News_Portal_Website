[1mdiff --git a/.vscode/launch.json b/.vscode/launch.json[m
[1mdeleted file mode 100644[m
[1mindex 2ba986f..0000000[m
[1m--- a/.vscode/launch.json[m
[1m+++ /dev/null[m
[36m@@ -1,15 +0,0 @@[m
[31m-{[m
[31m-    // Use IntelliSense to learn about possible attributes.[m
[31m-    // Hover to view descriptions of existing attributes.[m
[31m-    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387[m
[31m-    "version": "0.2.0",[m
[31m-    "configurations": [[m
[31m-        {[m
[31m-            "type": "chrome",[m
[31m-            "request": "launch",[m
[31m-            "name": "Launch Chrome against localhost",[m
[31m-            "url": "http://localhost:8080",[m
[31m-            "webRoot": "${workspaceFolder}"[m
[31m-        }[m
[31m-    ][m
[31m-}[m
\ No newline at end of file[m
[1mdiff --git a/News_Portal_Website-main/News-Portal/News-Portal/README.md b/News_Portal_Website-main/News-Portal/News-Portal/README.md[m
[1mdeleted file mode 100644[m
[1mindex 35e2be5..0000000[m
[1m--- a/News_Portal_Website-main/News-Portal/News-Portal/README.md[m
[1m+++ /dev/null[m
[36m@@ -1,2 +0,0 @@[m
[31m-# News-Portal[m
[31m-basically, its a news portal website that displays the news by categorys and have differents UI's for users &amp; administrators.[m
[1mdiff --git a/News_Portal_Website-main/News-Portal/admin.html b/News_Portal_Website-main/News-Portal/admin.html[m
[1mdeleted file mode 100644[m
[1mindex de2ba4c..0000000[m
[1m--- a/News_Portal_Website-main/News-Portal/admin.html[m
[1m+++ /dev/null[m
[36m@@ -1,126 +0,0 @@[m
[31m-<!DOCTYPE html>[m
[31m-<html lang="en">[m
[31m-<head>[m
[31m-    <meta charset="UTF-8">[m
[31m-    <meta name="viewport" content="width=device-width, initial-scale=1.0">[m
[31m-    <title>Admin Dashboard | NewsPortal</title>[m
[31m-    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;800&family=Inter:wght@400;500;700&display=swap" rel="stylesheet">[m
[31m-    <link rel="stylesheet" href="style.css">[m
[31m-    <script>[m
[31m-        // Strict Admin Route Guard[m
[31m-        if (localStorage.getItem('userRole') !== 'admin') {[m
[31m-            window.location.href = 'index.html';[m
[31m-        }[m
[31m-    </script>[m
[31m-    <style>[m
[31m-        body { background: #0a0a0c; min-height: 100vh; overflow-x: hidden; }[m
[31m-        .admin-header {[m
[31m-            background: rgba(18, 18, 22, 0.9);[m
[31m-            border-bottom: 1px solid var(--border-color);[m
[31m-            padding: 20px;[m
[31m-            display: flex;[m
[31m-            justify-content: space-between;[m
[31m-            align-items: center;[m
[31m-        }[m
[31m-        .admin-header h1 { font-family: 'Outfit'; font-size: 1.5rem; }[m
[31m-        .admin-header h1 span { color: #ef4444; }[m
[31m-        .btn-group { display: flex; gap: 10px; }[m
[31m-        .btn {[m
[31m-            padding: 8px 16px; border-radius: 6px; border: none; font-family: 'Inter'; font-weight: 600; cursor: pointer; color: white;[m
[31m-        }[m
[31m-        .btn-blue { background: var(--accent-blue); }[m
[31m-        .btn-red { background: rgba(239, 68, 68, 0.2); border: 1px solid rgba(239, 68, 68, 0.5); color: #ef4444; }[m
[31m-        [m
[31m-        .dashboard { padding: 40px 20px; max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 350px 1fr; gap: 30px; }[m
[31m-        @media (max-width: 768px) { .dashboard { grid-template-columns: 1fr; } }[m
[31m-        [m
[31m-        .card-panel { background: rgba(18,18,22,0.5); border: 1px solid var(--border-color); border-radius: 12px; padding: 25px; }[m
[31m-        .card-panel h2 { margin-bottom: 20px; font-family: 'Outfit'; border-bottom: 1px solid var(--border-color); padding-bottom: 10px; }[m
[31m-        [m
[31m-        .form-group { margin-bottom: 15px; }[m
[31m-        .form-group label { display: block; margin-bottom: 5px; color: var(--text-secondary); font-size: 0.9rem; }[m
[31m-        .form-group input, .form-group select, .form-group textarea {[m
[31m-            width: 100%; padding: 10px; border-radius: 6px; background: rgba(255,255,255,0.05); border: 1px solid var(--border-color); color: white; font-family: 'Inter'; outline: none;[m
[31m-        }[m
[31m-        .form-group input:focus, .form-group textarea:focus { border-color: var(--accent-blue); }[m
[31m-        [m
[31m-        .news-table { width: 100%; border-collapse: collapse; margin-top: 10px; }[m
[31m-        .news-table th, .news-table td { padding: 12px; text-align: left; border-bottom: 1px solid var(--border-color); }[m
[31m-        .news-table th { color: var(--text-secondary); font-weight: 500; font-size: 0.9rem; }[m
[31m-        .news-table tr:hover { background: rgba(255,255,255,0.02); }[m
[31m-        .del-btn { background: #ef4444; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; }[m
[31m-    </style>[m
[31m-</head>[m
[31m-<body>[m
[31m-    <header class="admin-header">[m
[31m-        <h1>NewsPortal <span>Admin</span></h1>[m
[31m-        <div class="btn-group">[m
[31m-            <button class="btn btn-blue" id="liveSiteBtn">View Live Site</button>[m
[31m-            <button class="btn btn-red" id="logoutBtn">Logout</button>[m
[31m-            [m
[31m-        </div>[m
[31m-    </header>[m
[31m-[m
[31m-    <div class="dashboard">[m
[31m-        <!-- Add News Form -->[m
[31m-        <div class="card-panel">[m
[31m-            <h2>Add New Article</h2>[m
[31m-            <form id="addNewsForm">[m
[31m-                <div class="form-group">[m
[31m-                    <label>Title</label>[m
[31m-                    <input type="text" id="newsTitle" required>[m
[31m-                </div>[m
[31m-                <div class="form-group">[m
[31m-                    <label>Category</label>[m
[31m-                    <select id="newsCategory" required>[m
[31m-                        <option value="world">World</option>[m
[31m-                        <option value="technology">Technology</option>[m
[31m-                        <option value="business">Business</option>[m
[31m-                        <option value="sports">Sports</option>[m
[31m-                        <option value="science">Science</option>[m
[31m-                        <option value="health">Health</option>[m
[31m-                        <option value="entertainment">Entertainment</option>[m
[31m-                        <option value="human">Human Innovation ✨</option>[m
[31m-                    </select>[m
[31m-                </div>[m
[31m-                <div class="form-group">[m
[31m-                    <label>Author</label>[m
[31m-                    <input type="text" id="newsAuthor" required>[m
[31m-                </div>[m
[31m-                <div class="form-group">[m
[31m-                    <label>Image URL</label>[m
[31m-                    <input type="url" id="newsImage" placeholder="https://..." required>[m
[31m-                </div>[m
[31m-                <div class="form-group">[m
[31m-                    <label>Excerpt</label>[m
[31m-                    <textarea id="newsExcerpt" rows="4" required></textarea>[m
[31m-                </div>[m
[31m-                <button type="submit" class="btn btn-blue" style="width: 100%; margin-top: 10px;">Publish Article</button>[m
[31m-            </form>[m
[31m-        </div>[m
[31m-[m
[31m-        <!-- Manage News Table -->[m
[31m-        <div class="card-panel">[m
[31m-            <h2>Manage Live Articles</h2>[m
[31m-            <div style="overflow-x: auto;">[m
[31m-                <table class="news-table" id="newsTable">[m
[31m-                    <thead>[m
[31m-                        <tr>[m
[31m-                            <th>ID</th>[m
[31m-                            <th>Category</th>[m
[31m-                            <th>Title</th>[m
[31m-                            <th>Author</th>[m
[31m-                            <th>Action</th>[m
[31m-                        </tr>[m
[31m-                    </thead>[m
[31m-                    <tbody id="newsTableBody">[m
[31m-                        <!-- Populated by JS -->[m
[31m-                    </tbody>[m
[31m-                </table>[m
[31m-            </div>[m
[31m-        </div>[m
[31m-    </div>[m
[31m-[m
[31m-    <script src="admin.js"></script>[m
[31m-</body>[m
[31m-</html>[m
[1mdiff --git a/News_Portal_Website-main/News-Portal/admin.js b/News_Portal_Website-main/News-Portal/admin.js[m
[1mdeleted file mode 100644[m
[1mindex 117c74f..0000000[m
[1m--- a/News_Portal_Website-main/News-Portal/admin.js[m
[1m+++ /dev/null[m
[36m@@ -1,75 +0,0 @@[m
[31m-// Admin Dashboard Logic[m
[31m-document.addEventListener('DOMContentLoaded', () => {[m
[31m-    // Navigation setup[m
[31m-    document.getElementById('liveSiteBtn').addEventListener('click', () => window.location.href = 'feed.html');[m
[31m-    document.getElementById('logoutBtn').addEventListener('click', () => {[m
[31m-        localStorage.removeItem('currentUser');[m
[31m-        localStorage.removeItem('userRole');[m
[31m-        window.location.href = 'index.html';[m
[31m-    });[m
[31m-[m
[31m-    const addNewsForm = document.getElementById('addNewsForm');[m
[31m-    const newsTableBody = document.getElementById('newsTableBody');[m
[31m-[m
[31m-    // Load DB[m
[31m-    let newsDatabase = JSON.parse(localStorage.getItem('newsDatabase')) || [];[m
[31m-[m
[31m-    function renderTable() {[m
[31m-        newsTableBody.innerHTML = '';[m
[31m-        if(newsDatabase.length === 0) {[m
[31m-            newsTableBody.innerHTML = '<tr><td colspan="5" style="text-align:center; padding: 20px;">No articles found.</td></tr>';[m
[31m-            return;[m
[31m-        }[m
[31m-[m
[31m-        // Render in reverse to show newest first[m
[31m-        [...newsDatabase].reverse().forEach((article) => {[m
[31m-            const tr = document.createElement('tr');[m
[31m-            tr.innerHTML = `[m
[31m-                <td>#${article.id}</td>[m
[31m-                <td><span style="color:var(--accent-blue); text-transform:uppercase; font-size:0.8rem;">${article.category}</span></td>[m
[31m-                <td style="max-width:300px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${article.title}</td>[m
[31m-                <td>${article.author}</td>[m
[31m-                <td><button class="del-btn" data-id="${article.id}">Delete</button></td>[m
[31m-            `;[m
[31m-            newsTableBody.appendChild(tr);[m
[31m-        });[m
[31m-[m
[31m-        // Attach delete event listeners[m
[31m-        document.querySelectorAll('.del-btn').forEach(btn => {[m
[31m-            btn.addEventListener('click', (e) => {[m
[31m-                const idToDelete = parseInt(e.target.getAttribute('data-id'));[m
[31m-                if(confirm(`Are you sure you want to delete article #${idToDelete}?`)) {[m
[31m-                    newsDatabase = newsDatabase.filter(a => a.id !== idToDelete);[m
[31m-                    localStorage.setItem('newsDatabase', JSON.stringify(newsDatabase));[m
[31m-                    renderTable();[m
[31m-                }[m
[31m-            });[m
[31m-        });[m
[31m-    }[m
[31m-[m
[31m-    addNewsForm.addEventListener('submit', (e) => {[m
[31m-        e.preventDefault();[m
[31m-        [m
[31m-        const newArticle = {[m
[31m-            id: Math.floor(Math.random() * 90000) + 10000, // Generate random 5-digit ID[m
[31m-            category: document.getElementById('newsCategory').value,[m
[31m-            title: document.getElementById('newsTitle').value.trim(),[m
[31m-            author: document.getElementById('newsAuthor').value.trim(),[m
[31m-            image: document.getElementById('newsImage').value.trim(),[m
[31m-            excerpt: document.getElementById('newsExcerpt').value.trim(),[m
[31m-            date: 'Just now', // Mock date[m
[31m-            featured: false // Newly added articles are standard[m
[31m-        };[m
[31m-[m
[31m-        // Add to db and save[m
[31m-        newsDatabase.push(newArticle);[m
[31m-        localStorage.setItem('newsDatabase', JSON.stringify(newsDatabase));[m
[31m-        [m
[31m-        renderTable();[m
[31m-        addNewsForm.reset();[m
[31m-        alert('Article successfully published to Live feed!');[m
[31m-    });[m
[31m-[m
[31m-    // Initial render[m
[31m-    renderTable();[m
[31m-});[m
[1mdiff --git a/News_Portal_Website-main/News-Portal/app.js b/News_Portal_Website-main/News-Portal/app.js[m
[1mdeleted file mode 100644[m
[1mindex f4c5055..0000000[m
[1m--- a/News_Portal_Website-main/News-Portal/app.js[m
[1m+++ /dev/null[m
[36m@@ -1,617 +0,0 @@[m
[31m-// DOM Elements[m
[31m-const menuToggle = document.getElementById('menuToggle');[m
[31m-const navLinks = document.getElementById('navLinks');[m
[31m-const categoryBtns = document.querySelectorAll('.category-btn');[m
[31m-const newsGrid = document.getElementById('newsGrid');[m
[31m-const loader = document.getElementById('loader');[m
[31m-const currentCategoryTitle = document.getElementById('currentCategoryTitle');[m
[31m-const currentCategoryDesc = document.getElementById('currentCategoryDesc');[m
[31m-const heroSection = document.getElementById('heroSection');[m
[31m-const mainContent = document.getElementById('mainContent');[m
[31m-[m
[31m-// Mobile Menu Toggle[m
[31m-menuToggle.addEventListener('click', () => {[m
[31m-    navLinks.classList.toggle('show');[m
[31m-});[m
[31m-[m
[31m-// Base Mock Database[m
[31m-const defaultNewsDatabase = [[m
[31m-    // --- TECHNOLOGY ---[m
[31m-    { id: 101, category: 'technology', title: 'T-Hub Hyderabad Launches Phase 3 to Support Global AI Startups', excerpt: 'The world\'s largest innovation campus in Hyderabad announces its aggressive new AI incubation strategy.', image: 'images/tech_thub.png', author: 'K. Rao', date: '2 hours ago', featured: true },[m
[31m-    { id: 102, category: 'technology', title: 'IIT Madras Develops Revolutionary Graphene Microchip', excerpt: 'Researchers at IIT Madras have successfully fabricated a silicon-alternative chip operating at unprecedented speeds.', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/69/IIT_Madras_Logo.svg/330px-IIT_Madras_Logo.svg.png', author: 'Venkatesh S.', date: '1 hour ago' },[m
[31m-    { id: 103, category: 'technology', title: 'Mumbai Financial Tech Sector Integrates Quantum Encryption', excerpt: 'Top banking institutions in Nariman Point are upgrading database security to be quantum-resistant.', image: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Mumbai_skyline.jpg', author: 'Aarti Desai', date: '3 hours ago' },[m
[31m-    { id: 104, category: 'technology', title: 'Amaravati Smart City Framework Nominated for Global Tech Award', excerpt: 'Andhra Pradesh\'s capital region praised for its AI-driven traffic and utility management systems.', image: 'https://upload.wikimedia.org/wikipedia/commons/d/db/Highcourt_of_AP.jpg', author: 'Ravi Teja', date: '4 hours ago' },[m
[31m-[m
[31m-    // --- SPORTS ---[m
[31m-    { id: 201, category: 'sports', title: 'IPL 2026 Top Contenders: Squad Strength Analysis', excerpt: 'A deep dive into the formidable lineups for IPL 2026. Who holds the best balance to lift the trophy this year?', image: 'images/ipl_2026_stadium.png', author: 'Harsha B.', date: '1 hour ago', featured: true },[m
[31m-    { id: 202, category: 'sports', title: 'The Final Four: Predicting the IPL 2026 Playoffs', excerpt: 'Based on squad depth on paper and performance in clutch moments, we predict Mumbai Indians, Chennai Super Kings, Sunrisers Hyderabad, and Kolkata Knight Riders to dominate the tournament.', image: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/M.A.Chidambaram_Stadium_before_IND_vs_AUS_3rd_ODI_2023.jpg', author: 'Ravi S.', date: '3 hours ago' },[m
[31m-    { id: 203, category: 'sports', title: 'Clutch Players: Who Will Deliver Under Pressure in 2026?', excerpt: 'While team balance wins group stages, individual brilliance and ice-cold execution in clutch moments determine the ultimate IPL champions.', image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Uppal_stadium_Rajiv_Gandhi_International_Cricket_Stadium.jpg', author: 'S. Gavaskar', date: '5 hours ago' },[m
[31m-    { id: 204, category: 'sports', title: 'Indian Men\'s Hockey Team Secures Thrilling Victory Over Australia', excerpt: 'A stellar performance in the final quarter ensures a 3-2 win for India in the FIH Pro League.', image: 'https://loremflickr.com/600/400/indian,hockey', author: 'S. Singh', date: '8 hours ago' },[m
[31m-    { id: 205, category: 'sports', title: 'Neeraj Chopra Claims Gold at Diamond League', excerpt: 'India\'s star javelin thrower continues his dominant run on the world stage with an 88.5m throw.', image: 'https://loremflickr.com/600/400/javelin,athlete', author: 'A. Kumar', date: '12 hours ago' },[m
[31m-    { id: 206, category: 'sports', title: 'Champions League: Real Madrid Pulls Off Another Dramatic Comeback', excerpt: 'Late goals secure a spot in the semi-finals, reminding the world of their European pedigree.', image: 'https://loremflickr.com/600/400/real-madrid,football', author: 'Carlos V.', date: '1 day ago' },[m
[31m-    { id: 207, category: 'sports', title: 'ISL 2026: Mohun Bagan vs Mumbai City FC Promises Fireworks', excerpt: 'The two heavyweights clash in a top-of-the-table thriller in Kolkata this weekend.', image: 'https://loremflickr.com/600/400/isl,football', author: 'R. Banerjee', date: '1 day ago' },[m
[31m-    { id: 208, category: 'sports', title: 'Wimbledon: Alcaraz Defends Title in Grueling 5-Set Final', excerpt: 'The young Spaniard cements his legacy on grass after a marathon match against Djokovic.', image: 'https://loremflickr.com/600/400/tennis,player', author: 'J. Smith', date: '2 days ago' },[m
[31m-[m
[31m-    // --- WORLD ---[m
[31m-    { id: 301, category: 'world', title: 'Andhra Pradesh Signs Historic Twin-State Pact with California', excerpt: 'The AP government aligns with US tech giants to establish a new renewable energy corridor in Visakhapatnam.', image: 'images/world_ap_pact.png', author: 'N. Naidu', date: '1 day ago', featured: true },[m
[31m-    { id: 302, category: 'world', title: 'Global Investors Summit in Mumbai Secures $50 Billion FDI', excerpt: 'International delegates converge at the Jio World Centre to invest heavily in western India infrastructure.', image: 'https://loremflickr.com/600/400/mumbai,building/all', author: 'Rajesh Shah', date: '3 hours ago' },[m
[31m-    { id: 303, category: 'world', title: 'Chennai Port Ranks Top 5 Most Efficient Hubs in Asia', excerpt: 'International shipping bodies praise the rapid modernization and turnaround times at Chennai.', image: 'https://loremflickr.com/600/400/chennai,port', author: 'K. Balaji', date: '5 hours ago' },[m
[31m-[m
[31m-    // --- BUSINESS ---[m
[31m-    { id: 401, category: 'business', title: 'BSE Sensex Hits Historic 90,000 Mark as Local Startups Boom', excerpt: 'Dalal Street erupted in cheers as the index shattered records driven by strong fundamental growth.', image: 'images/business_bse.png', author: 'Neha Gupta', date: '4 hours ago', featured: true },[m
[31m-    { id: 402, category: 'business', title: 'Hyderabad Overtakes Bangalore in Quarterly IT Office Space Absorption', excerpt: 'HITEC City and Gachibowli see massive influx as mega-corporations preference Hyderabad\'s infrastructure.', image: 'https://loremflickr.com/600/400/hyderabad,city', author: 'L. Srinivas', date: '12 hours ago' },[m
[31m-    { id: 403, category: 'business', title: 'Kia Motors Expands Anantapur Plant in Andhra Pradesh', excerpt: 'The automobile giant commits an additional ₹3000 crore to scale EV production specifically in AP.', image: 'https://loremflickr.com/600/400/kia,factory/all', author: 'T. Prasad', date: '1 day ago' },[m
[31m-[m
[31m-    // --- ENTERTAINMENT ---[m
[31m-    { id: 501, category: 'entertainment', title: 'Tollywood Epic Breaks ₹1000 Crore Box Office Worldwide', excerpt: 'A massive visual spectacle from Hyderabad\'s Ramoji Film City proves global audiences crave Indian cinema.', image: 'images/ent_tollywood.png', author: 'M. Krishna', date: '1 day ago', featured: true },[m
[31m-    { id: 502, category: 'entertainment', title: 'Bollywood and Kollywood Combine for Upcoming Action Thriller', excerpt: 'Mumbai and Chennai studios merge to create a high-octane franchise featuring the biggest stars from both industries.', image: 'https://loremflickr.com/600/400/bollywood/all', author: 'Anil Kapoor', date: '6 hours ago' },[m
[31m-    { id: 503, category: 'entertainment', title: 'Live Carnatic Music Festival Lights Up Chennai After Monsoon', excerpt: 'The Margazhi season spirit arrived early this year as thousands gathered at the Music Academy.', image: 'https://loremflickr.com/600/400/carnatic,music', author: 'S. Raman', date: '2 days ago' },[m
[31m-[m
[31m-    // --- HEALTH ---[m
[31m-    { id: 601, category: 'health', title: 'Apollo Hospitals Chennai Performs Asia\'s First Remote Robotic Surgery', excerpt: 'Surgeons successfully operated on a patient hundreds of miles away over a 5G specialized medical network.', image: 'https://loremflickr.com/600/400/operating,room', author: 'Dr. Prathap R.', date: '8 hours ago', featured: true },[m
[31m-    { id: 602, category: 'health', title: 'Tata Memorial Mumbai Expands Free Cancer Care Program', excerpt: 'The prestigious hospital announces a new wing specifically dedicated to pediatric oncology treatments.', image: 'https://loremflickr.com/600/400/hospital,mumbai/all', author: 'Meera Patil', date: '12 hours ago' },[m
[31m-[m
[31m-    // --- SCIENCE ---[m
[31m-    { id: 651, category: 'science', title: 'ISRO Unveils Next-Gen Reusable Launch Vehicle', excerpt: 'India\'s space agency marks a historic milestone in bringing down the cost of orbital payload delivery.', image: 'images/science_isro.png', author: 'S. Somnath', date: '1 hour ago', featured: true },[m
[31m-    { id: 652, category: 'science', title: 'CCMB Hyderabad Scientists Identify New Rare Disease Biomarker', excerpt: 'The Centre for Cellular and Molecular Biology breakthrough could save thousands of Indian lives through early testing.', image: 'images/health_ccmb.png', author: 'Dr. V. Rao', date: '3 hours ago' },[m
[31m-[m
[31m-    // --- PSYCHOLOGY ---[m
[31m-    { id: 701, category: 'psychology', title: 'Managing Mumbai\'s "Hustle Culture" Burnout', excerpt: 'Psychologists note a 40% rise in corporate workers seeking therapy for extreme fatigue in the financial capital.', image: 'images/psych_burnout.png', author: 'Dr. Sunita V.', date: '7 hours ago', featured: true },[m
[31m-    { id: 702, category: 'psychology', title: 'Hyderabad Based Institute Explores Tech-Addiction in Youth', excerpt: 'NIMHANS partnered psychologists present new findings on smartphone dependency among Telugu students.', image: 'https://loremflickr.com/600/400/mental,health', author: 'Dr. Hari K.', date: '14 hours ago' },[m
[31m-    { id: 703, category: 'psychology', title: 'The Mental Health Benefits of Chennai\'s Beach Therapy', excerpt: 'Local clinics are prescribing early morning walks along Marina Beach to effectively handle clinical depression.', image: 'https://loremflickr.com/600/400/chennai,beach', author: 'G. Swaminathan', date: '1 day ago' },[m
[31m-[m
[31m-    // --- IDEAS / INVENTIONS ---[m
[31m-    { id: 801, category: 'ideas', title: 'Mumbai Coastal Road: A Triumph of Marine Engineering', excerpt: 'How engineers conquered extreme tidal challenges to build the futuristic multi-lane highway bridging South Mumbai.', image: 'images/ideas_coastal.png', author: 'A. Kadam', date: '2 days ago', featured: true },[m
[31m-    { id: 802, category: 'ideas', title: 'Visakhapatnam Startup Deploys Automated Beach Cleaners', excerpt: 'RK Beach is looking cleaner than ever thanks to AI-driven solar-powered sand sweeper bots.', image: 'https://loremflickr.com/600/400/beach,visakhapatnam/all', author: 'P. Varma', date: '5 hours ago' },[m
[31m-    