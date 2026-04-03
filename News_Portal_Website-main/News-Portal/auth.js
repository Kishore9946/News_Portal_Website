// Auth Javascript - simulated local authentication
document.addEventListener('DOMContentLoaded', () => {
    // Auto-redirect if already logged in
    const currentUser = localStorage.getItem('currentUser');
    const currentRole = localStorage.getItem('userRole');

    if (currentUser) {
        if(currentRole === 'admin') {
            window.location.href = 'admin.html';
        } else {
            window.location.href = 'feed.html';
        }
        return;
    }


    

    const authForm = document.getElementById('authForm');
    const roleToggleUser = document.getElementById('roleUser');
    const roleToggleAdmin = document.getElementById('roleAdmin');
    const authTitle = document.getElementById('authTitle');
    const authSubtitle = document.getElementById('authSubtitle');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMsg = document.getElementById('errorMsg');
    let selectedRole = 'user';

    roleToggleUser.addEventListener('click', () => {
        selectedRole = 'user';
        roleToggleUser.classList.add('active');
        roleToggleAdmin.classList.remove('active');
        authTitle.innerText = "Welcome Back";
        authSubtitle.innerText = "Sign in to access personalized global news.";
    });

    roleToggleAdmin.addEventListener('click', () => {
        selectedRole = 'admin';
        roleToggleAdmin.classList.add('active');
        roleToggleUser.classList.remove('active');
        authTitle.innerText = "Admin Portal";
        authSubtitle.innerText = "Authenticate to edit and manage the news platform.";
    });

    authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const user = usernameInput.value.trim();
        const pass = passwordInput.value.trim();

        if(!user || !pass) {
            errorMsg.innerText = "Please fill in all fields.";
            return;
        }

        // --- Mock Authentication Simulation --- //
        // In a real app, this would be a POST to /api/login, verifying a hashed password.
        // For this frontend-only app, any credentials grant access to simulate the flow.
        localStorage.setItem('currentUser', user);
        localStorage.setItem('userRole', selectedRole);

        // Redirect based on role
        if(selectedRole === 'admin') {
            window.location.href = 'admin.html';
        } else {
            window.location.href = 'feed.html';
        }
    });
});
