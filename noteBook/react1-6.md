# React 1-6 列表&条件 补充

代码链接：[section1-6](https://github.com/wwweirui/ReactLearnSession/tree/main/section/section1-6)

## 官网概念

### Conditional Rendering 

条件渲染之 Pitfall 易错点

Don’t put numbers on the left side of &&.
不要把数字放在&&的左边。

To test the condition, JavaScript converts the left side to a boolean automatically. However, if the left side is 0, then the whole expression gets that value (0), and React will happily render 0 rather than nothing.

为了测试条件，JavaScript会自动把左边的数字转换为布尔值。但是，如果左边是0，那么整个表达式就会得到这个值（0），React会很高兴地渲染0而不是什么都不渲染。

For example, a common mistake is to write code like messageCount && <p>New messages</p>. It’s easy to assume that it renders nothing when messageCount is 0, but it really renders the 0 itself!

例如，一个常见的错误是编写代码messageCount && <p>New messages</p>。当messageCount为0时，它很容易认为它会渲染空值，但是它实际上会渲染0本身！

To fix it, make the left side a boolean: messageCount > 0 && <p>New messages</p>

避免这种情况，把左边的数字转换为布尔值：messageCount > 0 && <p>New messages</p>

所以使用 && 判断，注意数字陷阱，不要把数字放在&&的左边。

###  Why does React need keys?

为什么React需要keys？

You could get used to it, but once you delete a file, it would get confusing. The second file would become the first file, the third file would be the second file, and so on.

你可能会习惯它，但一旦你删除一个文件，它就会变得混乱。第二个文件将成为第一个文件，第三个文件将成为第二个文件，等等。


1. 列表渲染没有key属性，react会默认把列表渲染中把index索引作为key属性。但实际上是不满足要求的，因为index索引是不稳定的，会随着列表的变化而变化，会导致列表的渲染出现问题。

Similarly, do not generate keys on the fly, e.g. with key={Math.random()}. This will cause keys to never match up between renders, leading to all your components and DOM being recreated every time. Not only is this slow, but it will also lose any user input inside the list items. Instead, use a stable ID based on the data.

类似地，不要在运行时生成key，例如key={Math.random()}。这将导致keys在渲染之间不匹配，从而导致每次渲染时都要重新创建所有的组件和DOM。不仅如此，它还会丢失列表项中的任何用户输入。相反，使用基于数据的稳定ID。

2. 列表渲染有key属性，react会把key属性作为唯一标识，不会随着列表的变化而变化，会导致列表的渲染出现问题。


## 代码

```jsx
{isForecastAvailable && isForecastAvailable(city.forecast)}
{!isForecastAvailable && <span>No forecast available</span>}



 function isForecastAvailable(list) {
        return list && list.length > 0;
    }

```

# 总结

1. 条件渲染注意数字陷阱，不要把数字放在&&的左边，数组为空陷阱，空数组会渲染0。
2. 列表渲染有key属性，react会把key属性作为唯一标识，不会随着列表的变化而变化，会导致列表的渲染出现问题。

