# Use the official Nginx image based on Alpine Linux
FROM nginx:alpine

# Copy custom Nginx configuration file
COPY ./default.conf /etc/nginx/conf.d/

COPY ./cert/* /etc/nginx/certificates/

# Copy the build directory from the current directory to /var/www inside the container
COPY ./dist /var/www/html

# Expose port 80 to allow outside access to Nginx
EXPOSE 80

# Command to start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]