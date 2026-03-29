# Final Project Break
## Alesandro Quirós

URL API: https://alesandro-tienda.onrender.com

## Instalación
Primero es importante tener [Node.js](https://nodejs.org/en) instalado en local, ya que el proyecto funciona con Node.js. Una vez instalado, abrir una terminal e ir al directorio donde está el proyecto.

A partir de aquí, tenemos que empezar instalando las dependencias con el siguiente comando:
```bash
npm install
```
Esto puede que tarde un poco. Una vez tengamos las dependencias instaladas, podemos empezar el servidor con este comando:
```bash
npm start
```
Si todo va bien, el servidor estará en funcionamiento.

## Técnologias usadas
Las técnologias usadas son las siguientes:
- Node.js
- Express
- MongoDB y Mongoose
- Cors
- Dotenv

## Rutas y uso
Las rutas de la api son las siguientes:
- POST /products/create: Crea un producto
- GET /products: Obtiene todos los productos
- GET /products/:id: Obtiene un producto por su id
- PUT /products/update/:id: Actualiza un producto por su id
- DELETE /products/delete/:id/:user: Elimina un producto por su id (user para verificación)
- POST /admin/create: Crea un usuario admin
- POST /admin/login: Verifica el login de un usuario
- PUT /admin/update/:id: Cambia la contraseña de un usuario admin

# Crear usuario admin
Para crear un usuario admin, hay que hacerlo con una aplicación como [Postman](https://www.postman.com). Una vez descargada y lista para usar, con la api en funcionamiento ponemos la siguiente url: http://localhost:3000/admin/create

Y en el body, este contenido:
```js
{
    "username": "admin",
    "password": "1234"
}
```
Reemplazar el usuario y contraseña con los usuarios y contraseñas correspondientes y enviar la solicitud.

https://github.com/AlesandroQG/backend-tienda-finalprojectbreak