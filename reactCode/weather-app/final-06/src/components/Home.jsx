import { Button } from '@mui/material';
import Welcome from './Welcome';
import useCurrentWeather from '../hooks/useCurrentWeather.js';
import CurrentWeather from './CurrentWeather.jsx';

function Home({ getLocation, textState, setIsHome }) {

  const { data, isMutating, getCurrentWeather }
    = useCurrentWeather(getLocation);
  if (data) {
    return (
      <>
        <CurrentWeather data={data} status={textState} setIsHome={setIsHome} />
      </>
    )
  }
  return (
    <>
      <Welcome> {isMutating ? 'Loading' : 'welcome to weitui web'} </Welcome>
      <Button disabled={isMutating}
        variant="contained"
        size="large"
        onClick={getCurrentWeather}>
        {textState}
      </Button>
    </>

  );
}
export default Home;
