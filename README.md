# messaging-service

## Descripción
**Messaging Service** es un microservicio desarrollado en **Node.js**, diseñado para gestionar la mensajería dentro del ecosistema de microservicios de la plataforma. Este servicio permite el envío eficiente y escalable de mensajes electrónicos, asegurando una comunicación confiable y de alto rendimiento.

Soporta diversos protocolos de mensajería, incluyendo **SMTP**, **APIs de terceros** (como SendGrid o Mailgun) y sistemas de mensajería en cola (**RabbitMQ, Kafka**), lo que permite una integración flexible con otros servicios.

El servicio está preparado para ejecutarse en entornos **Dockerizados**, facilitando su despliegue y escalabilidad.

---

## Tecnologías utilizadas

- **Node.js** - Entorno de ejecución para JavaScript en el backend.
- **Express.js** - Framework para la gestión de endpoints REST.
- **Nodemailer** - Para el envío de correos electrónicos vía SMTP.
- **SendGrid/Mailgun** - APIs para el envío de correos transaccionales.
- **RabbitMQ / Kafka** - Para procesamiento asíncrono de mensajes en cola.
- **Docker** - Para la contenedorización y despliegue del servicio.
- **PostgreSQL / MongoDB** *(según configuración)* - Para almacenamiento de logs y configuraciones.

---

## Requisitos previos
Antes de ejecutar el servicio, asegúrate de tener instalado:

- **Node.js** 16+
- **npm** o **yarn**
- **Docker y Docker Compose** *(opcional, para despliegue con contenedores)*
- **RabbitMQ / Kafka** *(si se usa mensajería en cola)*

---

## Configuración
Crea un archivo `.env` en la raíz del proyecto con la configuración necesaria:

```env
# Configuración del servicio
PORT=3000
NODE_ENV=production

# Configuración de SMTP (Ejemplo con Gmail)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=tuemail@gmail.com
SMTP_PASS=tucontraseña

# Configuración de SendGrid
SENDGRID_API_KEY=tu-api-key

# Configuración de RabbitMQ (Opcional)
RABBITMQ_URL=amqp://localhost
QUEUE_NAME=emailQueue
```

---

## Instalación y ejecución
### 1️⃣ Clona el repositorio:
```bash
git clone https://github.com/2A2G/messaging-service.git
cd messaging-service
```

### 2️⃣ Instala las dependencias:
```bash
npm install
# o
yarn install
```

### 3️⃣ Ejecuta el servicio localmente:
```bash
npm start
```

## Licencia
Todos los derechos reservados © [2A2G](https://github.com/2A2G). Este repositorio es de uso privado y no se permite su distribución sin autorización.

