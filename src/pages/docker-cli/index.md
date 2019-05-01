---
title: Docker CLI Recap 
date: '2019-04-16'
spoiler: Useful Docker CLI commands
author: 'Nadun Indunil'
---

In this article, I am going to present a few valuable docker CLI commands that we use every day. I assume that you have the basic knowledge about what docker is.
## 1. docker ps
Lists running containers.
```
docker ps
```
flag `-a` / `-all` for all containers
```
docker ps -a
docker ps --all
```
flag `--quiet` /`-q` to list just ids
```
docker ps -q
docker ps --quiet
```
## 2. docker build
Use to build a docker image using Dockerfile in the current directory. ( means current directory)
use `-t` to tag with a name.
```
docker build -t <image_name> .
```

## 3. docker run
Command to run Docker container.
```
docker run -d -it -p 80:8080 --name=<container_name> <image_name>
```
`docker run` can have different flags few of them are:
- `--detach`, `-d` runs the container in the background so you cannot see the output of the container in the terminal.
- `--env`, `-e` set an environment variable using like variable=value or you can use an env file--env-file.
- `--ip` to give an IP address `--ip=172.0.0.10`
- `--name` assign a name to the container, `--name container_name`
- `--rm` clean up the container when it exit.
- `-i` (interactive) flag to keep stdin open and `-t` to allocate a terminal.
- `--volume`, `-v` mount a new volume `-v /new_volume`
- `--workdir` , `-w` tell the working directory in the container

## 4. docker pull
Use to pull docker images from Dockerhub.
```
docker pull <image_name>
```

## 5. docker volume ls
This will list all the volumes.
```
docker volume ls
```

## 6. ls
```
docker container ls 
// list containers, similar to docker ps
docker image ls 
// list images, similar to docker images
docker volume ls // list volumes
docker network ls // list networks
```

## 7. docker logs
This will show the logs from container.
```
docker logs --follow <container_name>
```
see logs from the container

## 8. docker rm
Remove a container.
```
docker rm <container_name>
```
## 9. docker rmi
Remove an image.
```
docker rmi <image_name>
```

## 10. docker stop
Stop a container.
```
docker stop <container_name>
docker stop $(docker ps -q) // stop all the containers
```

## 11. docker kill
When you don't want to stop (shutdown).
```
docker kill <container_name>
```

## 12. clean
Use these commands to clean all the containers and images
```
docker kill $(docker ps -q)
docker rm $(docker ps -a -q)
docker rmi $(docker images -q)
```

## 12. docker prune
If you want to delete unused resources
```
docker container prune // remove all stopped containers
docker volume prune // remove all unused volumes
docker image prune // remove unused images
```
or
```
docker system prune -a -f --volumes
```

## 13. push
These commands will push your image into Dockerhub.
```
docker login --username username --password password
docker tag <my-image> <username/my-repo>
docker push <username/my-repo>
```

## 14. Enter the terminal (after docker run)
```
docker exec -i -t <container_name> /bin/sh
```

Give a 👏 if you think this helped you. Comment if you wish to add more.