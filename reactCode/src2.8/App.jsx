import useSWR from 'swr';

function App() {
  const adviceURL = 'https://api.adviceslip.com/advice';

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, isValidating, mutate: getAdvice } = useSWR(adviceURL, fetcher);

  return (
    <main>
      <h1>Advice App</h1>
      <p>{isValidating ? 'Loading...' : data.slip?.advice}</p>
      <p>{isValidating ? '1' : '2'}</p>
      <button disabled={isValidating} onClick={getAdvice}>
        advice query
      </button>
    </main>
  );
}

export default App;