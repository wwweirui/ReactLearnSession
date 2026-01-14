# React 1.4 动态校验

代码链接：[section1-4](https://github.com/wwweirui/ReactLearnSession/tree/main/section/section1-4)

## 概念

### Adding styles   添加样式
In React, you specify a CSS class with className. It works the same way as the HTML class attribute:

在 React 中，你使用 className 指定 CSS 类。它和 HTML 的 class 属性工作方式相同：

```js
const element = <div className="my-class"></div>;
```

### derived State 派生状态

该概念是指，一个组件的状态可以根据其他状态或 props 计算得出。


直接当作普通的js变量，在使用中，因为值是基于state状态变量得到的，将其绑定在需要的地方


这节中实现了动态的样式校验



## 需求

1. 当用户密码输出长度小于限制，使边框变红

```js
const inputClass = inputText.length <= 2 && inputText.length > 0 ? 'input-error' : '';
const passwordClass = password.length <= 2 && password.length > 0 ? 'input-error' : '';

```

2. 结合表单提交的校验逻辑

```js
    function handleSubmit(event) {
        // 阻止表单默认提交行为
        event.preventDefault();
        if (inputText.length <= 2 || password.length <= 2) {
            alert('用户名或密码长度不能小于3');
            return;
        }

        alert(`用户名：${inputText}，密码：${password}`);
        // 清空输入框
        setInputText('');
        setPassword('');
    }

```