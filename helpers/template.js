//template.js

const head = `<!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>

        <style>
            *{
                margin: 0;
                padding: 0;
            }
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                background-color:rgb(185, 185, 185);
            }
            h1 {
                text-align: center;
                color: #333;
            }
            .product {
                border: 1px solid red;
                margin: 20px;
                border-radius: 5px;
                width: 20%;
            }
            nav ul{
                background-color: #333;
                color: white;
                padding: 10px;
                display: flex;
                justify-content: center;
                margin-bottom: 20px;
                flex-direction: row;
            }
            nav ul li {
                list-style: none;
                color: white;
                margin: 0 15px;
            }
            nav ul li a {
                color: white;
                text-decoration: none;
            }
            nav ul li a:hover {
                text-decoration: underline;
            }
        </style>
    </head>
`

const header = `
<body>
    <header>
    <nav>
        <ul>
            <li><a href="/products">Home</a></li>
            <li><a href="/products/Camisetas">Camisetas</a></li>
            <li><a href="/products/Pantalones">Pantalones</a></li>
            <li><a href="/products/Zapatos">Zapatos</a></li>
            <li><a href="/products/Accesorios">Accesorios</a></li>
            <li><a href="/login">Login</a></li>
        </nav>
        </header>
`
const adminHeader = `<body>
    <header>
    <nav>
        <ul>
            <li><a href="/admin/products">Home</a></li>
            <li><a href="/admin/products/Camisetas">Camisetas</a></li>
            <li><a href="/admin/products/Pantalones">Pantalones</a></li>
            <li><a href="/admin/products/Zapatos">Zapatos</a></li>
            <li><a href="/admin/products/Accesorios">Accesorios</a></li>
            <li><h3 style="color:red">ADMINISTRADOR</h3></li>
            <li><a href="/login/out">LogOut</a></li>
        </nav>
        </header>
`
const footer = `
    </body>
    </html>
`
function template (mainPage, isAdmin = false) {
    const header_ = isAdmin ? adminHeader : header;
    let template = head;
    template += header_;
    template += mainPage;
    template += footer;
    return template;
}

module.exports = { template };