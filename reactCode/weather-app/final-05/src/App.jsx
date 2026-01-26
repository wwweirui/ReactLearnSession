import { useEffect, useState } from 'react';
import Container from './components/Container';
import Forecast from './components/Forecast';
import Home from './components/Home';
// import useGeolocation from './hooks/useGeolocation.js';
import useGeolocationSelf from './hooks/useGeolocationSelf.js';


function App() {
  // const position = useGeolocation();
  const { getLocation, textState } = useGeolocationSelf();
  const [isHome, setIsHome] = useState(true);
  return (
    <Container>
      {isHome &&
        <Home getLocation={getLocation} textState={textState} setIsHome={setIsHome} />
      }
      {!isHome &&
        <Forecast getLocation={getLocation} setIsHome={setIsHome} />
      }
    </Container>
  );
}

export default App;
