function App() {
    const [inputText, setInputText] = React.useState('');

    function handleChange(event) {
        setInputText(event.target.value);
    }

    return (
        <>
            <h1>Hello React 18</h1>
            <p>{inputText} input value</p>
            <input type="text" onChange={handleChange} />
        </>
    )
}
// 挂载节点
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);

