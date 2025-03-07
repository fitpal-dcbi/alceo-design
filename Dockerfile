FROM asia-southeast2-docker.pkg.dev/sirka-production/tools/nginx:xxx-alpine
WORKDIR /app

COPY . .

COPY ./nginx.conf /etc/nginx/nginx.conf
