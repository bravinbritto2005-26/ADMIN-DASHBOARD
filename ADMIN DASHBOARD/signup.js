function toggleForms() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    if(loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
    } else {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    }
}

function signupUser() {
    const username = document.getElementById('signup-username').value.trim();
    const password = document.getElementById('signup-password').value.trim();

    if(!username || !password) {
        alert("Please fill all fields");
        return;
    }

    let users = JSON.parse(localStorage.getItem('users') || '[]');

    if(users.find(u => u.username === username)) {
        alert("User already exists");
        return;
    }

    users.push({username, password});
    localStorage.setItem('users', JSON.stringify(users));

    alert("Signup successful! Please login.");
    toggleForms();
}

function loginUser() {
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value.trim();

    let users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.username === username && u.password === password);

    if(user) {
        localStorage.setItem('loggedInUser', username);
        window.location.href = 'admin.html';
    } else alert("Invalid credentials");
}