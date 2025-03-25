# 1️⃣ Usar una imagen base oficial de Node.js
FROM node:18-alpine 

# 2️⃣ Definir el directorio de trabajo dentro del contenedor
WORKDIR /app

# 3️⃣ Copiar los archivos esenciales (evitamos copiar node_modules para optimizar)
COPY package.json package-lock.json ./

# 4️⃣ Instalar dependencias
RUN npm install

# 5️⃣ Copiar todo el código del proyecto
COPY . .

# 6️⃣ Generar los archivos de Prisma (si usas Prisma)
RUN npx prisma generate

# 7️⃣ Exponer el puerto de la aplicación
EXPOSE 3000

