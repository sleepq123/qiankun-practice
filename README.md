## qiankun-practice
采用qiankun微前端框架，以vue前端框架为基座,子应用为react、vue框架搭建的项目

### 运行
- git clone https://github.com/sleepq123/qiankun-practice.git
- cd qiankun-practice
- npm run app:install
- npm run app:run

### 打包
- npm run app:build

### 部署nginx (本地localhost)

> nginx 目录
  
<img src="https://user-gold-cdn.xitu.io/2020/6/16/172bb329811a0e60?w=264&h=709&f=png&s=21383"/>

> nginx config配置
```
#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    sendfile        on;

    keepalive_timeout  65;

    # 主应用
    server {  
        listen       8080;
        server_name  localhost;


        location / {
            add_header Access-Control-Allow-Origin *;
            add_header Access-Control-Allow-Methods 'GET, POST, OPTIONS';
            add_header Access-Control-Allow-Headers 'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization';

            # 主应用目录
            root   html/main;
            index  index.html index.htm;

            try_files $uri $uri/ /index.html;
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }

    # react子应用
    server {
        listen       8081;
        server_name  localhost;
        # react子应用目录
        root   html/react;

        location / {
            add_header Access-Control-Allow-Origin *;
            add_header Access-Control-Allow-Methods 'GET, POST, OPTIONS';
            add_header Access-Control-Allow-Headers 'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization';

            try_files $uri $uri/ /index.html;
        }
    }

    # vue子应用
    server {
        listen       8082;
        server_name  localhost;
        # vue子应用目录
        root   html/vue;

        location / {
            add_header Access-Control-Allow-Origin *;
            add_header Access-Control-Allow-Methods 'GET, POST, OPTIONS';
            add_header Access-Control-Allow-Headers 'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization';

            try_files $uri $uri/ /index.html;
        }
    }
}
```
