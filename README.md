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




# docker命令说明

## 镜像篇
```
1.  获取指定镜像：docker pull nginx

2.  查看镜像列表：docker images 

3.  删除指定镜像：docker images rm xxx
    xxx：镜像名称

4.  创建镜像：docker build -t xxx .
    xxx：镜像名称
    注意：文件夹路径定位到项目的根目录下
```

## 容器篇
```
1.  新建&&启动容器：docker run -d --name xx -p 8080:80 xxx
    -d：代表后台启动
    --name xx：这是创建的容器名称
    -p 8080:80: 是将nginx的80映射到你服务器的8080端口(注意你服务器的端口是否开放8080，其他端口也可以)
    xxx：是刚刚创建的镜像名称

2.  浏览器运行http://localhost:8080或http://本地ip地址:8080成功打开部署的项目

3.  终止启动中的容器：docker container stop xxx
    xxx: 容器名

4.  删除指定容器：docker container rm xxx
    xxx: 容器名

5.  查看容器列表：docker ps -a

6.  查看指定容器并打开bash终端：docker exec -it containerID /bin/bash
    containerID： 容器id

7.  打开指定文件夹：ls
    退出终端：exit或者Ctrl+d
```
