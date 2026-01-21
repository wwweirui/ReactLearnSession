# React 2-11 自定义hook

hook 意义：将逻辑和view分离，复用重复逻辑

将逻辑处理完全抽离出，并可支持反复使用

[代码链接](https://github.com/wwweirui/ReactLearnSession/blob/main/reactCode/src2.11/useTime.js)

## 官网概念：
React 自带了多个内置的 Hook，如 useState 、 useContext 和 useEffect 。有时，你可能会希望有一个用于特定目的的 Hook：例如，用于获取数据、跟踪用户是否在线或连接到聊天室。你或许在 React 中找不到这些 Hook，但你可以为应用程序的需求创建自己的 Hook。

hook每次调用都是单独独立的重新调用

必须遵守的命名规范：

1. React 组件名称必须以大写字母开头，例如 StatusBar 和 SaveButton 。React 组件还需要返回 React 知道如何显示的内容，比如一段 JSX。

2. Hook 名称必须以 use 开头，后跟一个大写字母，例如 useState （内置）或 useOnlineStatus （自定义，如本页前面所述）。Hooks 可以返回任意值。
