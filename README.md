# skeleton-demo

# 技术栈

> Vue+Vue-Router+Less+Vue-Skeleton-Webpack-Plugin 

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 说明
浏览器网络环境切换到Slow 3G模式可看到骨架屏加载效果




### docker命令说明
`
>   安装docker

>   获取指定镜像 docker pull nginx

>   查看镜像列表 docker images

>   删除指定镜像 docker images rm nginx

>   创建镜像 docker build -t xxx .
    xxx：是刚刚创建的镜像名称

>   启动容器 docker run -d --name xx -p 8080:80 xxx
    -d：代表后台启动
    --name xx：这是创建的容器名称
    -p 8080:80: 是将nginx的80映射到你服务器的8080端口(注意你服务器的端口是否开放8080，其他端口也可以)
    xxx：是刚刚创建的镜像名称
    -![#f03c15]注意：文件夹路径定位到项目的根目录下

>   浏览器运行http://localhost:8080成功打开部署的项目

>   查看容器列表 docker ps

>   查看指定容器中的文件/文件夹 docker exec -it containerID /bin/bash
    containerID： 容器id

>   ls 打开指定文件夹 exit 退出ls模式

`