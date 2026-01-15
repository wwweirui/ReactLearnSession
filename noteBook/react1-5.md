# React 1-5 列表&条件渲染

代码链接：[section1-5](https://github.com/wwweirui/ReactLearnSession/tree/main/section/section1-5)

## 概念

### Conditional rendering   条件渲染

- if 判断返回
- 三元运算符 ? : 逻辑控制
- 逻辑与&& 更加简短

In React, there is no special syntax for writing conditions. Instead, you’ll use the same techniques as you use when writing regular JavaScript code. For example, you can use an if statement to conditionally include JSX:
在 React 中，没有特殊的语法来编写条件。相反，你会使用与编写常规 JavaScript 代码时相同的技巧。例如，你可以使用 if 语句来有条件地包含 JSX：

```jsx
let content;
if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}
return (
  <div>
    {content}
  </div>
);
```
If you prefer more compact code, you can use the conditional ? operator. Unlike if, it works inside JSX:
如果你更喜欢更紧凑的代码，可以使用条件运算符 ? 。与 if 不同，它可以在 JSX 内部工作：

```jsx
<div>
  {isLoggedIn ? (
    <AdminPanel />
  ) : (
    <LoginForm />
  )}
</div>
```
When you don’t need the else branch, you can also use a shorter logical && syntax:
当你不需要 else 分支时，也可以使用更简短的逻辑 && 语法：

```jsx
<div>
  {isLoggedIn && <AdminPanel />}
</div>
All of these approaches also work for conditionally specifying attributes. If you’re unfamiliar with some of this JavaScript syntax, you can start by always using if...else.
所有这些方法也适用于条件性地指定属性。如果你对一些 JavaScript 语法不熟悉，可以先始终使用 if...else 。
```


### Rendering lists

渲染列表

You will rely on JavaScript features like for loop and the array map() function to render lists of components.

使用map()函数来渲染列表或者使用for循环来渲染列表。

Example:
例子：

```jsx
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
);
return (
  <ul>{listItems}</ul>
);
```

Inside your component, use the map() function to transform an array of products into an array of <li> items:

在组件中，使用map()函数将产品数组转换为 <li> 项的数组

列表中每个项目，需要有一个唯一的key属性。通常，你会使用数据中**唯一的ID**作为key属性的值。

```jsx
const productList = products.map(product =>
  <li key={product.id}>
    {product.name}
  </li>
);
``` 


## 需求

实现重复结构的数据在页面上的列表渲染，并注意数据为空或者数据为null的情况。同时添加条件判断逻辑

思路：
1. 抽离整体列表公共部分
2. 抽离列表内小循环的公共部分
3. 声明子循环函数和返回值，同时判断内容展示条件和空值

核心代码
```jsx
    return (
        <main>
            {
                cities.map((city) => {
                    return (
                        <section className="city">
                            <h2>{city.country}</h2>
                            <h3>{city.name}</h3>
                            {
                                // 存在且长度大于0
                                (city.forecast && city.forecast.length) ? forecastList(city.forecast) : <p>No forecast available</p>
                            }
                        </section>
                    )
                })
            }
        </main>
    );



        function forecastList(list) {
        return (
            <ul>
                {
                    list.map((item) => {
                        return (
                            <li key={item.date}>
                                {new Date(item.date).toLocaleDateString()}
                                <span> temperature: {item.temperature}℃({item.weather})</span>
                            </li>
                        )
                    })
                }
            </ul>
        )

    }

```

# 总结

1. 条件渲染：
    - if 判断返回
    - 三元运算符? : 逻辑控制
    - 逻辑与&& 更加简短
2. 列表渲染
    - 使用map()函数来渲染列表或者使用for循环来渲染列表。
    - 列表中每个项目，需要有一个唯一的key属性。通常，你会使用数据中**唯一的ID**作为key属性的值。
3. 条件渲染和列表渲染的结合使用
    观察数据结构，重复的部分可以抽离出来，然后使用条件渲染和列表渲染的结合使用。
