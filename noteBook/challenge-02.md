# 挑战二 todoList 完成

代码链接：[chanllenge-02](https://github.com/wwweirui/ReactLearnSession/tree/main/section/challenge-02)

## 需求

1. 添加和删除子项
2. 完成状态style 完成项目移到最后

## 项目注意点

1. todoList 在map中使用唯一id作为key表示，id保持唯一性，随机数+时间戳
2. 添加和删除绑定的方法中，onClick={} 内绑定是函数不是函数调用，() => func(params) 绑定函数调用
3. todolist 数组的覆盖，使用setState 覆盖数组,首先创建新的数组，然后把旧数组的内容复制到新数组中，然后把新数组赋值给setState
4. 删除操作使用filter 过滤数组，返回新数组，然后把新数组赋值给setState
5. 完成状态style 完成项目移到最后，使用sort 排序数组，返回新数组，然后把新数组赋值给setState

