import { Button } from '@mui/material';
import Day from './Day';
import styles from './Home.module.css';
import Welcome from './Welcome';
import useCurrentWeather from '../hooks/useCurrentWeather.js';

function Home({ getLocation, textState }) {

  const { data, isMutating, getCurrentWeather } = useCurrentWeather(getLocation);

  return (
    <section className={styles.section}>
      {data && <Day
        temperature={{ max: data.main.temp_max, min: data.main.temp_min }}
        iconCode={data.weather[0].icon} />}
      {!data && <Welcome> welcome to weirui weather site </Welcome>}
      <Button disabled={isMutating}
        variant="contained"
        size="large"
        onClick={getCurrentWeather}>
        {textState}
      </Button>
    </section>
  );
}
export default Home;
