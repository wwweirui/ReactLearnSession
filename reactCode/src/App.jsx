import { useState } from "react";
import './App.css'

function App() {
  const [inputText, setInputText] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    // 阻止表单默认提交行为
    event.preventDefault();
    if (inputText.length <= 2 || password.length <= 2) {
      alert('用户名或密码长度不能小于3');
      return;
    }

    alert(`用户名：${inputText}，密码：${password}`);
    // 清空输入框
    setInputText('');
    setPassword('');
  }

  const inputClass = inputText.length <= 2 && inputText.length > 0 ? 'input-error' : '';
  const passwordClass = password.length <= 2 && password.length > 0 ? 'input-error' : '';

  return (
    <main className="login-form-container">
      <h2>login form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" className={inputClass} value={inputText} onChange={(e) => setInputText(e.target.value)} />
        <br />
        <input type="password" className={passwordClass} value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type="submit" >提交</button>
      </form>
    </main>
  )
}



export default App;
