# jenkins+git自动化部署前端项目

## 安装篇
```
1.  安装jenkins
    初始化管理员密码：68c8858ec3784652a35064c03a0cf439
    路径：D:\Jenkins\secrets\initialAdminPassword
    用户名：admin 密码：root

2.  安装nginx
```

## 基础命令篇
```
1.  定位到Jenkins根目录下

2.  更改默认端口号：找到jenkins.xml文件，将8080改为5211

3.  启动jenkins服务：net start jenkins

4.  停止jenkins服务：net stop jenkins
```


## 构建部署
```
1.  安装默认插件，全局指定NodeJs版本
    构建环境：NodeJs Plugin
    构建后操作：Post build task


2.  

```

## 注意


### 学习资料
See [https://yeasy.gitbook.io/docker_practice/](https://yeasy.gitbook.io/docker_practice/).
