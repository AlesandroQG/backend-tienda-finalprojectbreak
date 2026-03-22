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
- POST /create: Crea un producto
- GET /: Obtiene todos los productos
- GET /:id: Obtiene un producto por su id
- PUT /update/:id: Actualiza un producto por su id
- DELETE /delete/:id: Elimina un producto por su id

https://github.com/AlesandroQG/backend-tienda-finalprojectbreak