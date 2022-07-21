FROM public.ecr.aws/y2g0l9x0/nginx:alpine
WORKDIR /app

COPY . .

COPY ./nginx.conf /etc/nginx/nginx.conf
