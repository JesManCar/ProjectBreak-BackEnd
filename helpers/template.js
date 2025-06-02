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
            .product-list {
                display: flex;
                flex-wrap: wrap;
                flex-direction: row;
                justify-content: center;
                padding: 20px;
            }   
            .product {
                display: flex;
                flex-direction: column;
                align-items: center;
                background-color: rgb(219, 219, 219);
                border: 1px solid black;
                margin: 20px;
                padding: 10px;
                border-radius: 5px;
                width: 20%;
            }
            .product-actions{
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                width: 100%;
                margin-top: 10px;
            }
            .product-actions a {
                text-decoration: none;
                color: white;
                padding: 5px 10px;
                border: 1px solid #333;
                background-color:rgb(146, 146, 146);
                border-radius: 5px;
            }
            .product-actions a:hover {
                background-color: #333;
            }
            form{
                display: flex;
                flex-direction: column;
                align-items: center;
                background-color: rgb(219, 219, 219);
                border: 1px solid black;
                margin: 20px auto;
                padding: 20px;
                border-radius: 5px;
                width: 50%;
                gap: 10px;
            }
            form button[type="submit"] {
                background-color: #333;
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 5px;
                cursor: pointer;
            }
            form button[type="submit"]:hover {
                background-color: #555;
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
            <li><a href="/admin/new">Nuevo Producto</a></li>
            <li><a href="/login/out" style="color:red">LogOut</a></li>
            <li><h3 style="color:red">ADMIN</h3></li>
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