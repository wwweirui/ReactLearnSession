# React 2.7 请求数据

代码链接：[React2.7](https://github.com/wwweirui/ReactLearnSession/blob/main/reactCode/src2.7/App.jsx)

## 需求
- 使用fetch请求数据
- 使用useState保存数据
- 创建isLoading状态，控制按钮点击请求
- 使用useEffect 页面首页加载请求数据

免费的api请求url： https://api.adviceslip.com/


## useEffect 概念

useEffect 是一个 React 钩子，它允许你将组件与外部系统同步。

```jsx
useEffect(setup, dependencies?)
```

**setup**:  

When your component commits, React will run your setup function.

该函数是一个匿名函数，不能返回任何promise,return 返回的也是一个函数，会在组件卸载时执行，清理副作用。

**dependencies**:

是一个数组，当数组中的值发生变化时，会重新执行setup函数。

```jsx
useEffect(() => {
  // ...
}, [a, b]); // Runs again if a or b are different
```

如果是空数组，只会在组件挂载时执行一次。它将仅在初始提交后运行。

```jsx
useEffect(() => {
  // ...
}, []); // Does not run again (except once in development)
```


如果你完全不传递依赖数组，你的 Effect 在组件的每次提交后都会运行。
```jsx
useEffect(() => {
  // ...
}); // Always runs again
```


