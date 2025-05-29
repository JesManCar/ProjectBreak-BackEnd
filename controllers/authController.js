function authForm(query) {
    let html = `<h1 style="color:gray">Login</h1>`;
    if (query.error == "missing_credentials") {
        html += `<p style="color:red">Please provide both username and password.</p>`;
    }
    else if (query.error == "wrong_credentials") {
        html += `<p style="color:red">Incorrect username or password.</p>`;
    }
    html += `<form action="/login/auth" method="POST">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required>
                <button type="submit">Login</button>
            </form>
    `;
    return html;
}

module.exports = authForm;