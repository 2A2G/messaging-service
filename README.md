# messaging-service

## 📌 Descripción

**messaging-service** es un microservicio desarrollado en **Node.js** encargado de gestionar toda la mensajería del sistema, proporcionando una solución eficaz y escalable para el envío de notificaciones y alertas mediante correo electrónico.

## 🚀 Tecnologías utilizadas

- **Node.js** - Entorno de ejecución para JavaScript en el servidor.
- **Express.js** - Framework minimalista para la construcción de APIs REST.
- **Nodemailer** - Biblioteca para el envío de correos electrónicos.

## ⚙️ Requisitos previos

Antes de ejecutar el servicio, asegúrate de tener instalado:

- **Node.js** (v14+ recomendado)
- **npm** (Administrador de paquetes de Node.js)

## 📦 Instalación y ejecución

Clona el repositorio:

```sh
git clone https://github.com/2A2G/messaging-service.git
cd messaging-service
```

Instala las dependencias:

```sh
npm install
```

Configura las variables de entorno en un archivo `.env`:

```
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=messaging_db
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_USER=tu_email@example.com
EMAIL_PASSWORD=tu_contraseña
```

Ejecuta el servicio:

```sh
npm start
```

Para desarrollo con autorecarga:

```sh
npm run dev
```
## 📜 Licencia

Este proyecto está bajo la **Licencia MIT**.

© 2025 [2A2G](https://github.com/2A2G) & [Dev-Drian](https://github.com/Dev-Drian)

Se permite el uso, modificación y distribución de este software de forma gratuita, siempre que se conserve este aviso de licencia.

