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
        <main style={{
            border: '1px solid black',
            textAlign: 'center',
            width: '300px',
            margin: '0 auto',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
            backgroundColor: '#f2f2f2',
            fontFamily: 'Arial, sans-serif',
            color: '#333',
            fontSize: '16px',
            lineHeight: '1.5',
        }}>
            <h2>login form</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" style={{ margin: '2px' }} value={inputText} onChange={(e) => setInputText(e.target.value)} />
                <br />
                <input type="password" style={{ margin: '2px' }} value={password} onChange={(e) => setPassword(e.target.value)} />
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

