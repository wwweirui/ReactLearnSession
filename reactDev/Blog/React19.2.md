# React 19.2
react blog 19.2 更新涉及内容

19.2版本发布时间：2025/10/1 by The React Team

给出新特性总览并标注出一些值得注意的改变

- React 新特性
    - <Activity />
    - useEffectEvent
    - cacheSignal
    - Performance Tracks

- React Dom 新特性
    - Partial Pre-rendering 部分预渲染

- Notable Changes 值得注意的改变
    - Batching Suspense Boundaries for SSR  / SSR 批处理Suspense边界
    - SSR: Web Streams support for Node 18+ / Node 18+支持Web Streams
    - eslint-plugin-react-hooks v6 
    - Update the default useId prefix / 更新默认useId前缀


# React 19.2 新特性
## Activity

<Activity> lets you break your app into “activities” that can be controlled and prioritized.
<Activity> 让你可以将app分解成“activities”状态去控制和优先考虑

You can use Activity as an alternative to conditionally rendering parts of your app:
你可以使用Activity作为条件渲染app的替代方案：

```jsx

// before 之前
{ isVisible && <MyComponent /> }

// after 之后
<Activity mode={ isVisible ? 'visible' : 'hidden'}>
  <MyComponent />
</Activity>

```

在react19.2 的版本中，Activity 提供两种模式： hidden 和 visible
- hidden 隐藏模式： 隐藏子元素，卸载副作用，**并将所有更新延迟到 React 没有其他工作可做为止**。
- visible 可见模式： 渲染子元素，执行副作用，**允许更新正常处理**。

这意味着你可以预渲染并持续渲染应用程序的隐藏部分，而不会影响屏幕上任何可见内容的性能。

**隐藏部分的渲染不会阻塞可见部分的渲染**

你可以使用Activity来呈现应用中用户接下来可能会导航到的隐藏部分，或者保存用户离开的部分的状态。

这通过在后台加载数据、CSS和图像来加快导航速度，并允许后退导航保持状态例如：输入字段等状态。

未来计划添加更多的模式，应对不同的案例

如何使用查看： [Activity](https://react.dev/reference/react/Activity) 


## useEffectEvent






