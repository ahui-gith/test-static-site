# static-site 🚀

一个用于练习 **GitHub Pages 部署**的简单静态前端项目，只包含 HTML / CSS / JS，无需任何构建工具。

## 本地预览

直接用浏览器打开 `index.html`，或者起一个本地服务：

```bash
# 方式一：Python
python -m http.server 8000

# 方式二：Node（需先 npm i -g serve）
npx serve .
```

然后访问 http://localhost:8000

## 部署到 GitHub Pages

### 1. 初始化 Git 仓库并推送

```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/<你的用户名>/<仓库名>.git
git push -u origin main
```

### 2. 开启 Pages

1. 打开仓库页面 → **Settings** → 左侧 **Pages**
2. **Source** 选择 `Deploy from a branch`
3. **Branch** 选择 `main`，目录选 `/ (root)`，点 **Save**
4. 等 1~2 分钟，访问 `https://<你的用户名>.github.io/<仓库名>/`

### 3. 之后每次更新

```bash
git add .
git commit -m "update"
git push
```

推送后 Pages 会自动重新部署，刷新网页即可看到变化。

## 文件说明

| 文件 | 作用 |
| --- | --- |
| `index.html` | 页面结构 |
| `style.css` | 样式（含暗色主题变量） |
| `script.js` | 计数器 + 主题切换交互 |
| `.nojekyll` | 告诉 GitHub Pages 跳过 Jekyll 处理，原样输出文件 |

## 练习建议

- 改一改 `index.html` 里的标题文字，推送后看线上变化
- 给计数器加一个「重置」按钮
- 试试自定义域名（Pages 设置里填 CNAME）
