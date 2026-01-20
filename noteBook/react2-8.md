# React 2.8 SWR

## 概念

下载：pnpm add swr

专门用于数据获取的库会为你处理数据的获取和缓存工作，让你可以专注于你的应用程序需要哪些数据以及如何展示它们。


SWR 是一个内置缓存、失效重载和请求去重的轻量级 API。它让你的 UI 保持快速、一致且始终最新——只需一个 React 钩子

```jsx
import useSWR from 'swr'
 
function Profile() {
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error, isLoading } = useSWR('/api/user', fetcher)
 
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  return <div>hello {data.name}!</div>
}

```

请求数据：

使用 mutate API 进行数据变更有两种方式：全局变更 API，可以变更任何键；绑定变更 API，只能变更对应 SWR 钩子的数据

Bound mutate 它将 key 绑定到 key 并传递给 useSWR ，并将 data 作为第一个参数接收。

```jsx
import useSWR from 'swr'
function Profile () {
  const { data, mutate } = useSWR('/api/user', fetcher)
  return (
    <div>
      <h1>My name is {data.name}.</h1>
    </div>
  )
}

```

# 总结

swr 是一个数据获取的库，帮助专注于数据展示。