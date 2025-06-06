# 佛祖展示项目

这是一个使用 React + TypeScript + Vite 构建的图片展示项目。

## 项目启动说明

### 环境要求
- Node.js 16.0 或更高版本
- npm 7.0 或更高版本

### 安装步骤

1. 克隆项目后，首先安装依赖：
```bash
npm install
```

2. 安装必要的类型定义：
```bash
npm install @types/react @types/react-dom
```

3. 启动开发服务器：
```bash
npm run dev
```

4. 构建生产版本：
```bash
npm run build
```

### 项目结构
```
src/
  ├── component/
  │   ├── BuddhaPage.tsx    # 展示组件
  │   └── BuddhaPage.css    # 组件样式
  ├── images/               # 图片资源目录
  │   ├── 1.png
  │   ├── 2.png
  │   ├── 3.png
  │   ├── 4.png
  │   └── 5.png
  └── App.tsx              # 主应用组件
```

### 功能说明
- 佛祖图片展示
- 点击图片查看大图
- 响应式布局
- 动画效果

### 注意事项
1. 确保 `public/images` 目录下存在所需的图片文件
2. 图片命名需要与代码中的文件名对应
3. 建议使用 PNG 格式的图片以获得最佳显示效果

## 技术栈
- React 18
- TypeScript
- Vite
- CSS3

