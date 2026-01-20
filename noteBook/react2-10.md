# React 2.10 cleanup

## 回到useEffect
useEffect 在react 功能上可以起到生命周期的效果


### 应用场景

将你的组件连接到某个外部系统，在组件的最顶层调用 useEffect 

```jsx
import { useState, useEffect } from 'react';
import { createConnection } from './chat.js';

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useEffect(() => {
  	const connection = createConnection(serverUrl, roomId);
    connection.connect();
  	return () => {
      connection.disconnect();
  	};
  }, [serverUrl, roomId]);
  // ...
}

```

You need to pass two arguments to useEffect:
传入两个参数

- 一个是 setup code 用户链接外部系统，同时返回一个清理函数，用于断开系统链接
- A list of dependencies  另一个是依赖函数 


**React 会根据需要调用你的设置和清理函数，这可能发生多次：**

1. setup code 会在 mounts 挂载的时候加载
2. 每次组件提交中如果 dependencies 内容发生变化
- cleanup code  函数 使用旧的 props 和 state 运行
- 然后 setup code 函数使用新的props 和 state 运行
（代表每次依赖变化前，旧值都会调用清理函数 cleanup code）
3. 当组件从页面上移除（卸载）后，您的清理代码会运行最后一次。