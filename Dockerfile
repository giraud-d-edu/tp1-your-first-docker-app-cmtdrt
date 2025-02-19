# Utilisation de l'image Nginx officielle
FROM nginx:latest

# Suppression du fichier de configuration par défaut de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copie des fichiers du site vers le répertoire de Nginx
COPY . /usr/share/nginx/html

# Copie du fichier de configuration personnalisé
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposition du port 80
EXPOSE 80

# Lancement de Nginx
CMD ["nginx", "-g", "daemon off;"]