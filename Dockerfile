# Dockerfile
FROM nginx:alpine

# Usuń domyślną zawartość nginx (opcjonalnie)
RUN rm -rf /usr/share/nginx/html/*

# Skopiuj zawartość katalogu build context (czyli gh-pages/)
COPY . /usr/share/nginx/html