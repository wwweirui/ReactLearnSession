# React2-4 组件与 props

## 官网概念定义

### 组件

什么是组件？

React lets you combine your markup, CSS, and JavaScript into custom “components”, reusable UI elements for your app.

react 将css js 组合成为自定义组件，在应用内可以重复使用

构建组件步骤：

Step 1: Export the component

导出组件

Step 2: Define the function

定义函数

> React 组件是普通的 JavaScript 函数，但它们的名称必须以大写字母开头，否则将无法工作！

Step 3: Add markup

添加标记

使用组件： 自定义组件在导出后，父组件导入子组件路径，嵌入使用

## props

解决什么问题：当父子组件需要通信，共同处理数据、传递函数，需要使用props

The information you pass down like this is called **props**

使用jsx 大括号传递数据

```jsx
export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}
```

```jsx
function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}
```

# 总结

组件是js函数，组件名称首字母大写

组件之间通过props传递数据和函数
