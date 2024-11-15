## git
1. 版本管理工具
2. 记录文件的修改（修改时间、修改人、修改哪一行）
3. 多人协作（分支管理）
4. 连接远程仓库

### 配置用户信息
```Shell
git config --global user.name "你的名字"
git config --global user.email "你的邮箱"
git config -l // 查看配置
```
### 常用命令
1. `git init` 初始化 git 仓库
- 初始化完成之后会在当前目录自动生成 .git 隐藏文件夹
- .git 文件夹储存当前目录所有的修改记录
- 删除 .git 此目录不再被 git 管理
2. `git status` 当前目录的状态
3. `git add <文件/文件夹路径>` 把修改存到暂存区
4. `git commit -m"本次提交内容的描述"` 把暂存区的内容添加到本地仓库
- `git commit -am"修改描述"` 对于已经添加到仓库的文件，可以合并 git add 和 git commit
- 如果是新创建的文件必须 先运行 git add 在运行 git commit -m
5. `git log` 查看修改日志
6. `git diff` 查看当前工作区的具体修改内容
7. `git reset --hard 版本号` 回退哪一个版本 ***谨慎使用***
8. `git reflog` 查看操作记录
9. `git revert 要撤销的版本号` 撤销某一个版本 ***面试常问***
10. `git restore --staged <文件>` 或者 `git reset HEAD` 从暂存区撤销到工作区
11. `git restore <文件>` 或者 `git checkout -- 文件` 放弃工作区的修改 ***谨慎使用***

### 远程仓库
1. 连接仓库前的准备
- 创建ssh key `ssh-keygen -t rsa -C "你的邮箱"`
- 自动生成 .ssh 文件夹
- windows系统存在 C盘 => 用户 => .ssh
- mac系统存在 ～/.ssh，
2. cat ~/.ssh/id_rsa.pub 查看公钥文件
- 把 id_rsa.pub 文件内容添加远程网站的 ssh 设置中
### 先有本地仓库，后创建远程仓库
1. 创建远程仓库
2. 本地仓库和远程仓库建立链接 `git remote add origin 仓库地址`
3. 把本地仓库推送到远程仓库 `git push -u origin master`
4. 查看远程仓库信息 `git remote -v`
5. 删除和远程仓库的关联 `git remote rm origin`
6. `git push -f` 强制推送本地代码到远程仓库 ***谨慎使用***
#### 从远程仓库拉代码到本地
1. `git clone 仓库地址`

#### 常用命令
1. `git push` 把本地代码推送到远程仓库
2. `git pull` 获取远程仓库的更新到本地
- git pull 如果远程有提交和你当前修改的是同一个文件的同一行代码时会发生冲突
- 需要手动处理冲突，处理冲突时最好使用 git status 查看所有冲突的文件
- 修改完所有冲突文件之后，运行 git add、git commit
- git commit 后切换英文输入法，:wq 保存并退出
- 注意：处理冲突时的 git commit 不要 -m ，git 会自动生成合并日志
- 注意：使用 git pull 自动合并代码时使用哪种合并方式
  - `git config pull.rebase false` 使用 merge 的方式
  - `git config pull.rebase true` 使用 rebase 的方式



### 分支管理（多人协作）
1. 创建分支（注意查看创建分支时本地的状态，是否需要提交）`git checkout -b 分支名`
2. 查看本地分支 `git branch`
3. 切换分支 `git checkout 分支名`
4. 删除已经合并过的分支 `git branch -d 分支名`
5. 删除未被合并过的的分支 `git branch -D 分支名`
6. 把本地分支推送到远程分支并且建立连接 `git push -u origin 分支名`
7. 合并分支 `git merge 要合并的分支`
- 没有冲突，会自动和进行合并和commit

- 有冲突，手动合并有冲突的文件，
- 合并完之后 `git add 冲突的文件`
- 直接运行 `git commit` 不需要 -m，会自动生成合并的描述
8. 本地切换到远程的分支，如果本地之前没有此分支需要两步  **面试常问**
- `git fetch` 获取远程仓库的更新
- `git checkout 分支名`
9. `git pull` 是运行了 `git fetch` + `git merge`

#### 配置命令别名
1. `git config --global alias.st status`
2. `git config --global alias.co checkout`
2. `git config --global alias.br branch`


#### 配置 git 忽略文件
1. 创建 .gitignore