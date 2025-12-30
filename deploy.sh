#!/bin/bash

# 部署脚本 - 将项目推送到 GitHub

echo "🚀 喵BTI 项目部署脚本"
echo "===================="
echo ""

# 检查是否已配置远程仓库
if git remote get-url origin &>/dev/null; then
    echo "✅ 远程仓库已配置: $(git remote get-url origin)"
    echo ""
    read -p "是否要推送代码到 GitHub? (y/n) " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        git branch -M main
        git push -u origin main
        echo ""
        echo "✅ 代码已推送到 GitHub!"
        echo ""
        echo "📝 下一步："
        echo "1. 访问你的 GitHub 仓库"
        echo "2. 进入 Settings > Pages"
        echo "3. 选择 main 分支和 / (root) 文件夹"
        echo "4. 保存后等待几分钟，即可通过 GitHub Pages 访问"
    fi
else
    echo "⚠️  尚未配置远程仓库"
    echo ""
    read -p "请输入你的 GitHub 用户名: " GITHUB_USER
    read -p "请输入仓库名称 (默认: meow-bti): " REPO_NAME
    REPO_NAME=${REPO_NAME:-meow-bti}
    
    echo ""
    echo "📝 请先在 GitHub 上创建仓库: https://github.com/new"
    echo "   仓库名称: $REPO_NAME"
    echo "   不要勾选 'Initialize this repository with a README'"
    echo ""
    read -p "创建完成后按回车继续..." 
    
    REMOTE_URL="https://github.com/$GITHUB_USER/$REPO_NAME.git"
    git remote add origin "$REMOTE_URL"
    git branch -M main
    
    echo ""
    read -p "是否现在推送代码? (y/n) " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        git push -u origin main
        echo ""
        echo "✅ 代码已推送到 GitHub!"
        echo ""
        echo "🌐 GitHub Pages 设置："
        echo "   仓库地址: $REMOTE_URL"
        echo "   访问地址: https://$GITHUB_USER.github.io/$REPO_NAME/"
    fi
fi

