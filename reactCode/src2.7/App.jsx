import { useState, useEffect } from "react";
function App() {
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(false);

  const apiUrl = 'https://api.adviceslip.com/advice'

  useEffect(() => {
    getAdvice();
  }, []);

  async function getAdvice() {
    setLoading(true);
    const response = await fetch(apiUrl);
    const data = await response.json();
    setAdvice(data.slip.advice);
    setLoading(false);
  }
  return (
    <main>
      <h1>Advice App</h1>
      <p>{loading ? 'is loading' : advice}</p>
      <button disabled={loading} onClick={getAdvice}>Get Advice</button>
    </main>
  );
}
export default App;