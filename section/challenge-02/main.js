/*
  1. Implement adding and deleting todo items.
  2. Implement completing todo items (completed items should be moved to the bottom).

  1. 添加和删除子项
  2. 完成状态style 完成项目移到最后
  
*/

function MyApp() {
    // [{ id / isCompleted / content }]
    const [todoList, setTodoList] = React.useState([])
    const [currentTodo, setCurrentTodo] = React.useState('')

    /**
        todo添加列表方法
    */
    function addTodoList() {
        if (!currentTodo.trim().length) {
            alert("Please enter a todo item");
        }

        const newTodoList = [
            ...todoList,
            {
                id: Math.random() + Date.now(),
                content: currentTodo,
                isCompleted: false
            }
        ]
        setTodoList(newTodoList);
        setCurrentTodo('')
        sortTodoList(newTodoList)
    }
    // 删除
    function deleteItem(id) {
        const newTodoList = todoList.filter(item => item.id !== id)
        setTodoList(newTodoList)
    }

    // 点击完成触发状态改变 然后排序



    function toggleTodo(toggleTodoId) {
        const toggleTodoList = todoList.map((item) => {
            if (item.id === Number(toggleTodoId)) {
                return {
                    ...item,
                    isCompleted: !item.isCompleted
                }
            }
            return item;
        })

        sortTodoList(toggleTodoList)
    }

    // 完成的往后排
    function sortTodoList(toggleTodoList) {

        const sortedTodoList = toggleTodoList.sort((a, b) => {
            // 如果a和b的isCompleted属性不同，则根据isCompleted属性进行排序
            if (a.isCompleted !== !b.isCompleted) {
                // 如果a的isCompleted属性为true，则a排在b后面
                return a.isCompleted ? 1 : -1;
            }
            return a.id - b.id;
        })
        setTodoList(sortedTodoList)
    }


    return (
        <main>
            <h1>React Todo List</h1>
            <input type="text" value={currentTodo}
                onChange={(event) => { setCurrentTodo(event.target.value) }}
                placeholder="Add item into as todo" />
            <button onClick={addTodoList}>Add</button>
            <ul>
                {todoList.length > 0 &&
                    todoList.map(item => (
                        <li key={item.id} className={item.isCompleted ? 'deleted' : ''}>
                            <input type="checkbox" onChange={() => toggleTodo(item.id)} />
                            {item.content} {" "}
                            <button onClick={() => deleteItem(item.id)}>delete</button>
                        </li>

                    ))
                }
            </ul>
        </main>
    );
}

const appEl = document.querySelector("#app");
const root = ReactDOM.createRoot(appEl);

root.render(<MyApp />);