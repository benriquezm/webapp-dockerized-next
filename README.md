# webapp-dockerized-next
Build a container docker for application based in nextjs.

#   command for create image
docker build --no-cache -t webapp-dockerized-img .

#   command for run container
docker run --env-file=.env --name webapp-next -d -p 3000:3000 -v <directorio_donde_se_clono_el_repo>:/var/www/html webapp-dockerized-img