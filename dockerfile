# Espesifica versao de sistema operativo base
FROM node:20-alpine

#Difine a pasta onde o codigo vai ser executado
WORKDIR /app

# Copia os arquivos package.json e package-lock.json para a pasta /app
COPY package*.json ./

# Instala as dependencias
RUN npm install

# Copia o codigo-fonte para a pasta /app
COPY . .

# Informar a porta que a aplicação vai usar
EXPOSE 3000

# Comando para executar a aplicação em modo de desenvolvimento
CMD ["npm", "run", "dev"]