# React 挑战 - 01

代码链接：[chanllenge-01](https://github.com/wwweirui/ReactLearnSession/tree/main/section/chanllenge-01)

## 挑战需求

  1. Bind the input/select to the states （将状态绑定到input和select）
  2. Change the circle styles based on the states （根据状态改变圆形样式）

## 主要实现思路

1. 设置需要绑定的状态变量
```js
    const [purple, setPurple] = React.useState(false);
    const [text, setText] = React.useState("");
    const [size, setSize] = React.useState(150);
    const [rotate, setRotate] = React.useState(0);
```

2. 到对应的input/select上绑定状态变量
```jsx
  <input type="checkbox" value={purple}
    onChange={(e) => setPurple(e.target.checked)} />

  <select value={text} onChange={(e) => { setText(e.target.value) }}>
  <option value="" selected>
      White
  </option>
  <option value="text-black">Black</option>
  <option value="text-orange">Orange</option>
  </select>
```

> 注意: 对于checkbox的绑定，需要使用`e.target.checked`，而不是`e.target.value`

状态绑定需要value和onChange，value是当前状态的值，onChange是状态改变的回调函数。

写习惯vue有时候会忘记这两个属性，导致状态绑定失败。

3. 到对应的div上绑定状态变量
```jsx
  <div className={`circle ${purple ? "purple" : ""}`}
    style={{ fontSize: `${size}px`, transform: `rotate(${rotate}deg)` }}>
    <span className={text}>{text}</span>
  </div>
```

> 注意: 对于div的绑定，需要使用`className`和`style`，而不是`class`和`style`。

className是当前状态的值，style是状态改变的回调函数。