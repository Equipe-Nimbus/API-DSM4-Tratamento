# Imagem base
FROM node:18-alpine

# Diretório de trabalho
WORKDIR /app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante do código-fonte
COPY . .

# Porta que a aplicação vai expor
EXPOSE 8002

# Comando para iniciar a aplicação
CMD ["npm", "run", "dev"]
