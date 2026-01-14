function App() {
    const [inputText, setInputText] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleSubmit(event) {
        // 阻止表单默认提交行为
        event.preventDefault();
        alert(`用户名：${inputText}，密码：${password}`);
        // 清空输入框
        setInputText('');
        setPassword('');
    }


    return (
        <main className="login-form-container">
            <h2>login form</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" className="form-input" value={inputText} onChange={(e) => setInputText(e.target.value)} />
                <br />
                <input type="password" className="form-input" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <button type="submit" >提交</button>
            </form>
        </main>
    )
}
// 挂载节点
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);

