import { useEffect, useState } from 'react';
import Container from './components/Container';
import Forecast from './components/Forecast';
import Home from './components/Home';
// import useGeolocation from './hooks/useGeolocation.js';
import useGeolocationSelf from './hooks/useGeolocationSelf.js';


function App() {
  // const position = useGeolocation();
  const position = useGeolocationSelf();

  return (
    <Container>
      <Home />
      {/* <Forecast /> */}
    </Container>
  );
}

export default App;
