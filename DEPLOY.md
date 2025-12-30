# 部署到 GitHub Pages 指南

## 方法一：使用 GitHub Pages（推荐，可直接访问）

### 1. 在 GitHub 上创建新仓库

1. 访问 https://github.com/new
2. 仓库名称填写：`meow-bti` 或你喜欢的名称
3. **不要**勾选 "Initialize this repository with a README"
4. 选择 Public（公开）或 Private（私有）
5. 点击 "Create repository"

### 2. 推送代码到 GitHub

创建仓库后，GitHub 会显示推送命令。执行以下命令：

```bash
# 添加远程仓库（将 YOUR_USERNAME 替换为你的 GitHub 用户名）
git remote add origin https://github.com/YOUR_USERNAME/meow-bti.git

# 推送代码
git branch -M main
git push -u origin main
```

### 3. 启用 GitHub Pages

1. 在 GitHub 仓库页面，点击 **Settings**（设置）
2. 在左侧菜单找到 **Pages**
3. 在 "Source" 部分，选择 **Deploy from a branch**
4. 选择分支：**main**
5. 选择文件夹：**/ (root)**
6. 点击 **Save**

等待几分钟后，你的网站就可以通过以下地址访问：
```
https://YOUR_USERNAME.github.io/meow-bti/
```

## 方法二：直接分享仓库链接

如果不想使用 GitHub Pages，可以直接分享仓库链接，朋友们可以：
1. 克隆仓库：`git clone https://github.com/YOUR_USERNAME/meow-bti.git`
2. 用浏览器打开 `index.html` 文件

---

## 快速部署命令

如果你已经创建了 GitHub 仓库，执行以下命令即可：

```bash
# 替换 YOUR_USERNAME 和 REPO_NAME 为你的实际值
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

