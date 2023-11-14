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


FROM nginx:1.16.0-alpine

# Здесь в папку nginx копируются результаты сборки проекта, полученные на предыдущем шаге.
COPY --from=builder /app/build /usr/share/nginx/html

# Затем открываем порт 480
EXPOSE 480

# Последняя строка файла используется для запуска NGINX.
CMD ["nginx", "-g", "daemon off;"]