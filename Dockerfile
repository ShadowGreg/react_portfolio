# Используем официальный образ Node.js в качестве базового
FROM node:14-alpine as builder

# Устанавливаем рабочую директорию в контейнере
WORKDIR /app

# Копируем package.json и package-lock.json в рабочую директорию
COPY package.json ./app/package.json

# Устанавливаем зависимости
RUN npm install --only=prod

# Копируем все приложение в рабочую директорию
COPY . .

# Собираем приложение React
RUN npm run build

# Второй этап сборки для Nginx
FROM nginx:1.16.0-alpine

# Копируем результаты сборки из первого этапа в рабочую директорию nginx
COPY --from=builder /app/build /usr/share/nginx/html

# Открываем порт 80
EXPOSE 80

# Последняя строка файла используется для запуска NGINX.
CMD ["nginx", "-g", "daemon off;"]