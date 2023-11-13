# Используем официальный образ Node.js в качестве базового
FROM node:14-alpine

# Устанавливаем рабочую директорию в контейнере
WORKDIR /app

# Копируем package.json и package-lock.json в рабочую директорию
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все приложение в рабочую директорию
COPY . .

# Собираем приложение React
RUN npm run build

# Открываем порт 80
EXPOSE 80

# Запускаем приложение
CMD ["npm", "start"]