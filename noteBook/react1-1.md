# React 1-1
熟悉vscodes中使用

## 创建 React 项目
1. 打开vscode，打开终端（terminal）
2. 新建html文件，命名为index.html
3. 新建js文件，命名为main.js

index.html 负责常规的页面,head模块需要引入react相关的cdn模块

```js
// 引入生产环境的react和react-dom
<script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>

    // 引入babel standalone use jsx in the browser 
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

```

index.html的body部分创建 div id 为root的元素，用于挂载react应用
，最后引入main.js文件，type为text/babel，用于jsx语法的解析

```js
<body>
    <div id="root"></div>
    <script type="text/babel" src="./main.js">
    </script>
</body>

```

main.js 负责react代码编写，
1. 引入react和react-dom(cdn 引入已完成)
2. 挂载节点 （react-dom.createRoot）
3. 渲染应用 (root.render)

```js
const root = ReactDOM.createRoot(document.getElementById('root'));
// 渲染应用
root.render(<App />);
```

创建App组件

App组件是一个函数组件，通过自定义函数定义，返回一个jsx元素

```js
function App() {
    return (
        <div>
            <h1>Hello React</h1>
        </div>
    );
}
```

## 总结
通过以上步骤，完成了在vscode中创建react项目的基本流程
1. 创建html文件，引入react相关cdn模块
2. 创建js文件，编写react代码
3. 创建根节点，渲染react应用
4. 创建函数组件，返回jsx元素

