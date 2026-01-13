function App() {
    return (
        <>
            <h1>Hello React 18</h1>
            <input type="text" />
        </>
    )
}
// 挂载节点
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);

