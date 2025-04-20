# 1. Usar la imagen de Node.js con Alpine (ligera)
FROM node:18-alpine

# 2. Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# 3. Copiar los archivos de dependencias
COPY package*.json tsconfig.json ./

# 4. Instalar las dependencias
RUN npm install

# 5. Copiar el resto del código de la aplicación
COPY . .

# 6. Compilar TypeScript
RUN npm run build

# 7. Exponer el puerto en el que corre la aplicación
EXPOSE 3000

# 8. Ejecutar la aplicación desde dist/
CMD ["node", "dist/src/app.js"]
