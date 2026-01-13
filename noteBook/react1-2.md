# React 1-2 状态与事件

代码链接：[section1-2](https://github.com/liuyueyi/ReactLearnSession/tree/main/section/section1-2)

## Responding to events 事件处理

可以通过在组件内部声明事件处理函数来响应事件：

Notice how onClick={handleClick} has no parentheses at the end! 

```js
function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}
```

## Updating the screen 屏幕更新
React 会根据状态的变化来更新 UI。可以使用 useState Hook 来管理组件的状态：


import useState from React:


使用useState 会得到两个返回值：当前状态（ count ），以及允许你更新它的函数（ setCount ）。你可以给它们任意命名，但惯例是写成 [something, setSomething]


调用 setSomething 函数可以更新状态，React 会重新渲染组件并显示更新后的状态。

```js
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>
        Click me
      </button>
    </>
  );
}
```

## Displaying data 展示数据
可以通过在 JSX 中嵌入 JavaScript 表达式来展示数据：

JSX lets you put markup into JavaScript. Curly braces let you “escape back” into JavaScript so that you can embed some variable from your code and display it to the user. For example, this will display user.name:


JSX 让你能够在 JavaScript 中放入标记。大括号让你能够“逃逸回 JavaScript”，以便你可以嵌入代码中的某个变量并将其显示给用户

```js
return (
  <h1>
    {user.name}
  </h1>
);

```

## 总结
React 状态与事件绑定实现数据同步
- React 事件绑定方法，onChange 对事件进行处理
- React 状态更新方法，useState 实现状态更新
- React 展示数据方法，在 JSX 中嵌入 JavaScript 表达式

## tips 建议
- 优先查看英文文档，因为英文文档是最新的，也是最完善的，有时中文网站的无法正确辨别，甚至会出现滞后的错误信息
- 多参考官网文档，官网文档是最权威的，官网链接：https://react.dev/