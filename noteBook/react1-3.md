# React 1-3 表单实践

代码链接：[section1-3](https://github.com/wwweirui/ReactLearnSession/tree/main/section/section1-3)

## 编写提交表单

**需求**

1. 在之前构建的模板基础上，编写一个简单表单，包含用户名和密码输入框，以及一个提交按钮。


2. input数据双向绑定： value= {inputText}

3. preventDefault 阻止默认提交行为

4. css 样式 style = {{}} 小驼峰命名法（不建议把所有样式写在标签上，建议抽离css）

# 总结
1. 表单提交时，需要阻止默认行为，使用preventDefault()方法。

2. 表单数据双向绑定，需要使用value属性。

3. 表单数据提交时，需要使用onSubmit事件。

4. 样式使用style属性。使用{{ 小驼峰命名法 }}

5. 建议把样式抽离出来，使用css文件。
