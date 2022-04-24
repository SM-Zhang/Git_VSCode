# git_vue01

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# ESlint
### ESlint报错
> 去除ESlint的代码格式报错（波浪红线）
package.json文件中添加以下配置
```
requireConfigFile: false
```
```
parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
    // arsing error: No Babel config file detected for D:\own\project\git_project\git_vue01\vue.config.js. Either disable config file checking with requireConfigFile: false, or configure Babel so that it can find the config files.eslint
  },
```

### 去除ESlint的文件重名

**官方网站**：https://eslint.vuejs.org/rules/multi-word-component-names.html

```
Component name "index" should always be multi-word.
```

> 在package.json文件中添加以下规则
```
"rules": {
      "vue/multi-word-component-names": [
        "error",
        {
          "ignores": [
            "index"
          ]
        }
      ]
    }
```

# 一、初识Git

## 1. 简介

GitHub 是一个用于版本控制和协作的代码托管平台； 它允许您和其他人随时随地协同处理项目。
Git命令速查：https://www.cnblogs.com/thaimj1314520/p/14787076.html

### 1.1 主要操作

1. 存储库；
2. 分支；
3. 提交请求；
4. 拉取请求；

### 1.2 文件标识

| 序号 |             类型             |      注释      |
| :--: | :--------------------------: | :------------: |
|  1   | <font color=#ff6700>A</font> |    新增文件    |
|  2   | <font color=#ff6700>C</font> |   新拷贝文件   |
|  3   | <font color=#ff6700>D</font> |   已删除文件   |
|  4   | <font color=#ff6700>M</font> |  文件内容修改  |
|  5   | <font color=#ff6700>R</font> |   文件名修改   |
|  6   | <font color=#ff6700>T</font> |  文件类型修改  |
|  7   | <font color=#ff6700>U</font> |  文件未被合并  |
|  8   | <font color=#ff6700>X</font> | 未知状态(出错) |



# 二、Github初始化

## 2.1 创建仓库

进入Github官网创建自己的仓库；

1. 在任何页面的右上角，使用$+$下拉菜单选择 **New repository（新建仓库）**；
2. 在 **Repository name（存储库名称）**框中，输入 `仓库名称`；
3. 在 **Description（说明）**框中，编写简短说明；
4. 选择 **Add a README file（添加 README 文件）**【可选】；
5. 选择您的存储库是**公有**还是**私有**；
6. 单击 **Create repository（创建仓库）**；

## 2.2 修改分支

> * Git软件提供的主要分支是`master`，尽管Github中开始默认`main`分支为主要分支；
>
> * 所以需要修改当前分支，才可以保证主要操作的顺利进行；

1、进入该仓库的`settings`导航栏处，选择`branches`，点击主分支的切换按钮

<img src="https://raw.githubusercontent.com/SM-Zhang/md-image-files/master/imgs/202204241721256.png?token=APLYE7YFJ5DLUXKCTRDZOEDCMULNA" alt="switch_branch" style="zoom:80%;" />

2、选择相对应的分支作为主分支（或者可以更改主分支的名称），最后`Update`即可更新主分支

<img src="https://raw.githubusercontent.com/SM-Zhang/md-image-files/master/imgs/202204241721763.png?token=APLYE7YRL5WYGI7QJIDC6SLCMULNY" alt="switch_branch_up" style="zoom:80%;" />



# 三、Git软件安装（Windows）

## 3.1 Git下载

**Git下载地址：**<font color=#148a92>`https://git-scm.com/`</font>

## 3.2 Git安装

默认安装即可



# 四、Git<->Github准备

> 若多人从事当前项目的开发，需要同本地与仓库链接起来

## 4.1 Git本地初始化

### 4.1.1 中文字符编码

如果文件中含有中文，则需要特殊命令来让git接受中文

```shell
$ git config --global core.quotepath false
```

### 4.1.2 换行符CRLF

#### 1、原因

Windows中的换行符为`CRLF` ， 而在Linux下的换行符为` LF` ，所以在执行`git add . `时会出现以下警告提示；

```shell
warning: LF will be replaced by CRLF in src/App.vue.
The file will have its original line endings in your working directory
```

#### 2、解决办法

键入以下命令即可

```shell
$ git config core.autocrlf false
```

## 4.2 用户初始化

### 4.2.1 用户名

```shell
# username
$ git config --global user.name "SM-Zhang"
```

### 4.2.2 邮箱账户

```shell
# email
$ git config --global user.email "1097646307@qq.com"
```

## 4.3 SSH同步仓库

通过RSA密钥建立本地与远程仓库的连接

### 4.3.1 Git密钥生成

点击`Git Bash Here`进入命令行控制窗口；根据自己的仓库注册邮箱生成rsa密钥；

```shell
$ ssh-keygen -t rsa -C "1097646307@qq.com"
```

#### 4.3.1.1 结果如下

```shell
Generating public/private rsa key pair.
Enter file in which to save the key (/c/Users/ZSM/.ssh/id_rsa):
Created directory '/c/Users/ZSM/.ssh'.
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /c/Users/ZSM/.ssh/id_rsa
Your public key has been saved in /c/Users/ZSM/.ssh/id_rsa.pub
The key fingerprint is:
SHA256:1h3e4+sTozjqlHgCbrs/1sRiPCMHhLtVXTOZ/AQTcjQ 1097646307@qq.com
The key's randomart image is:
+---[RSA 3072]----+
|   .   ..+E=     |
|  . . . .o+=.    |
|   o .     o.    |
|  . o    . o.o   |
|   o.o .S . o o  |
|  ....Boo.   .o. |
|    o+o*+  . ..o |
|   . .o+. o . .. |
|    o+.oo. . .o. |
+----[SHA256]-----+
```

#### 4.3.1.2 密钥位置

```shell
# $ ''/c/Users/<local_username>/.ssh'
$ ''/c/Users/ZSM/.ssh'
```

> 生成了两个文件（文件名）：
>
> 1. id_rsa
> 2. <font color=#d71345>id_rsa.pub（记事本打开id_rsa.pub并复制）</font>

> 可选：将私钥 `id_rsa` 交给 ssh-agent 管理；**（未测试）**
>
> ```shell
> $ ssh-agent ~/.ssh/id_rsa
> ```

### 4.3.2 Github密钥写入

1. 打开settings -> 选择SSH and GPG keys -> 选择New SSH key

   ![Github_SSH](https://raw.githubusercontent.com/SM-Zhang/md-image-files/master/imgs/202204241758365.png?token=APLYE74YQGZVGCKCBBWEVS3CMUPZS)

2. 将`id_rsa.pub`中的密钥粘贴在`Key`中，点击`Add SSH key`即可（自定义SSH的Title）;

   ![Github_Add_SSH](https://raw.githubusercontent.com/SM-Zhang/md-image-files/master/imgs/202204241800182.png?token=APLYE74K35CF7YQNUIUNATLCMUQAS)

3. 最后进行Github账户密码校验，输入当前账户的密码即可;

4. 校验完成之后会收到Github的密钥邮件提醒;

   ```shell
   The following SSH key was added to your account:
   
   ZSM_PC_SSH
   SHA256:1h3e4+sTozjqlHgCbrs/1sRiPCMHhLtVXTOZ/AQTcjQ
   
   If you believe this key was added in error, you can remove the key and disable
   access at the following location:
   
   https://github.com/settings/keys
   ```

### 4.3.3 配置成功测试

1. 点击`Git Bash Here`进入命令行控制窗口

   ```shell
   $ ssh -T git@github.com
   ```

2. 配置成功后的文本显示

   - ```shell
     The authenticity of host 'github.com (20.205.243.166)' can't be established.
     ED25519 key fingerprint is SHA256:+DiY3wvvV6TuJJhbpZisF/zLDA0zPMSvHdkr4UvCOqU.
     This key is not known by any other names
     Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
     ```

   - ```shell
     Warning: Permanently added 'github.com' (ED25519) to the list of known hosts.
     Hi SM-Zhang! You've successfully authenticated, but GitHub does not provide shell access.
     ```

## 4.4 HTTPS同步仓库

1、都是在`Git`中进行初始化操作，`HTTPS`中无需密钥生成，即可使用；

2、所以HTTPS同步仓库时进行`URL`的切换即可；

###  4.4.1 SSH 切换成 HTTPS

1、列出现有远程仓库以获取要更改的远程仓库的名称

```shell
$ git remote -v
> origin  git@github.com:SM-Zhang/Git_VSCode.git (fetch)
> origin  git@github.com:SM-Zhang/Git_VSCode.git (push)
```

2、使用 `git remote set-url` 命令将远程的 URL 从 SSH 更改为 HTTPS

```shell
$ git remote set-url origin https://github.com/SM-Zhang/Git_VSCode.git
```

## 4.5 SSH与HTTPS切换

1、列出现有远程仓库以获取要更改的远程仓库的名称

```shell
$ git remote -v
> origin  https://github.com/SM-Zhang/Git_VSCode.git (fetch)
> origin  https://github.com/SM-Zhang/Git_VSCode.git (push)
```

2、使用 `git remote set-url` 命令将远程的 URL 从HTTPS 更改为 SSH

```shell
$ git remote set-url origin git@github.com:SM-Zhang/Git_VSCode.git
```



# 五、仓库同步

## 5.1 本地仓库初始化

> 此处是对一个空的文件夹进行初始化，不是从github上`clone`项目进行构建初始化；
查看所有文件的状态信息

```shell
$ git status
```

### 5.1.1 初始化命令

**使用该命令**：

1. 可以把这个文件夹变成Git可以管理的仓库，这个时候会在当前的文件夹下出现一个`.git`文件夹；
2. 它是Git用来跟踪和管理版本库的。

```shell
$ git init
```

## 5.2 工作区到暂存区

> 1. 将内容从工作目录添加到暂存区（将本地修改过的文件且已经追踪的文件添加到本地的暂存区）;
> 2. 可以添加多个，例如`file1 file2`；
> 3. 参数`-u`：表示将已跟踪文件中的修改和删除的文件添加到暂存区，不包括新增加的文件（被删除的文件被加入到暂存区再被提交并推送到仓库之后这个文件就会在git系统中消失）；

```shell
$ git add "File_name_1 <File_name_2> | Path | * | . | source |source/*"
```

### 5.2.1 `git add .`

1. 添加所有文件、文件夹和子文件夹，包括`.gitignore`和以点开头的任何其他内容；
2. 等同于`git add –all`，添加所有的文件；

### 5.2.2 `git add *`

1. 将添加除以点开头的文件、文件夹和子文件夹以外的任何文件、文件夹和子文件夹；
2. 递归添加，如果文件在子目录中，``git add *``仍然会添加以点开头的文件；

### 5.2.3 `git add source`

添加指定的文件夹

### 5.2.4 `git add source/*`

添加指定目录下的所有文件

## 5.3 暂存区到本地仓库

`git commit`是把暂存区的所有内容提交到当前分支、只负责把暂存区的修改提交；

> `git commit`将暂存区的代码提交到本地仓库；
>
> -m == [message] 可以是一些备注信息；

```shell
$ git commit -m "本次提交描述"
```

### 5.3.1 参数`-am`

将add与commit合并了；

> 还可以使用连接符号`&&`联合多条命令使用；

```shell
$ git add .
$ git commit -m "本次提交描述"

== $ git commit -am "本次提交描述"
```

## 5.4 从分支到远程仓库

> 可选参数`-u`
>
> - 带上`-u` 参数其实就相当于记录了push到远端分支的默认值，这样当下次我们还想要继续push的这个远端分支的时候推送命令就可以简写成`git push`；

```shell
$ git push origin master
```

## 5.5 版本查看

每次提交后都会生成一个版本，会生成特定的版本号

### 5.5.1 历史版本查看

版本历史记录（之前的版本）；

```shell
$ git log
```

### 5.5.2 回滚版本查看

版本历史记录（之前的版本+已经回滚的版本）；

```shell
$ git reflog
```

### 5.5.3 版本回滚

查看相应的版本后进行回滚到需要的版本

```shell
$ git reset --hard <Version_>
```

## 5.6 删除文件

> 删除文件后要推送到远程仓库，才可以同步删除；否则只是删除了本地的文件；

### 5.6.1 预览

预览将要删除的文件

```shell
$ git rm -r -n --cached 文件/文件夹名称
```

### 5.6.2 删除

1. 递归删除文件，包括文件夹；

   ```shell
   $ git rm -r --cached 文件/文件夹名称
   ```

2. 非递归删除文件；

   ```shell
   $ git rm  --cached 文件/文件夹名称
   ```

3.  提交到本地分支并推送到远程仓库

   ```shell
   $ git commit -m "本次提交描述"
   $ git push origin master
   ```

   

# 六、分支

## 6.1 创建分支

- 创建分支

  ```shell
  $ git branch <branch_name>
  ```

- 切换分支

  ```shell
  $ git checkout <branch_name>
  ```

- 创建并切换分支

  > `-b` == `branch`

  ```shell
  $ git checkout -b <branch_name>
  ```

## 6.2 查看分支

### 6.2.1 本地分支

> `-a`为可选参数，都可以查看所有的分支

```shell
$ git branch <-a>
```

### 6.2.2 本地分支&远程分支

查看远程库的分支和本地分支的对应关系

```shell
$ git remote show origin
```

```shell
* remote origin
  Fetch URL: git@github.com:SM-Zhang/Git_VSCode.git
  Push  URL: git@github.com:SM-Zhang/Git_VSCode.git
  HEAD branch: master
  Remote branches:
    master   tracked
    zhangsan tracked
  Local branches configured for 'git pull':
    master   merges with remote master
    zhangsan merges with remote zhangsan
  Local refs configured for 'git push':
    master   pushes to master   (up to date)
    zhangsan pushes to zhangsan (up to date)
```

## 6.3 删除分支

- 删除分支仅仅指的是删除本地的分支，需要同步后才能删除远程仓库的分支；

```shell
$ git branch -d <branch_name>
```

- 推送到远到远程仓库，即删除`github`仓库里面的分支；

```shell
$ git push origin -d <branch_name>
```

- 删除分支后可以查看远程库的分支和本地分支的对应关系：`git remote show origin`；

## 6.4 分支合并

### 6.4.1 子分支合并至主分支

1. 创建分支

   ```shell
   $ git barnch <branch_name>
   ```

2. 切换分支

   ```shell
   $ git checkout <branch_name> 
   ```

3. 合并分支，只有当前在主分支的情况下才能合并子分支（例如：master主分支）

   ```shell
   $ git merge <branch_name>
   ```

4. 合并后将本地master分支推送到远程库

   ```shell
   $ git push origin master
   ```

### 6.4.2 多个子分支合并至主分支

1. 切换分支：

   ```shell
   $ git checkout master<主分支>
   ```

2. 合并子分支

   ```shell
   $ git merge <branch_1> <branch_2>
   ```

3. 将内容从工作目录添加到暂存区

   ```shell
   $ git add "File"
   ```

4. 将暂存区的代码提交到本地仓库

   ```shell
   $ git commit -m "本次提交描述"
   ```

5. 合并后将本地master分支推送到远程库

   ```shell
   $ git push origin master
   ```

### 6.4.3 主分支合并至子分支

1. 创建分支

   ```shell
   $ git barnch <branch_name>
   ```

2. 切换分支

   ```shell
   $ git checkout <branch_name> 
   ```

3. 在子分支上运行git merge master就会将主分支的代码同步到子分支上

   ```shell
   $ git merge master
   ```

4. 合并后将本地子分支（zhangsan）推送到远程库

   ```shell
   $ git push origin zhangsan<branch_name>
   ```

### 6.4.5 分支冲突

合并分支时会出现冲突：

1. 在相应位置修改合并

   ![多分支合并产生冲突](https://raw.githubusercontent.com/SM-Zhang/md-image-files/master/imgs/202204241950977.png?token=APLYE7ZXMVEVE74ULFCX32DCMU42Y)

2. 再次查看冲突的位置

   ```shell
   $ git merge --abort
   ```

   

# 七、拉取仓库文件

1. 克隆当前项目SSH地址或者HTTPS地址

   ```shell
   $ git clone <*_URL>
   ```

2. 安装插件

   ```shell
   $ npm install
   ```

3. 运行项目



