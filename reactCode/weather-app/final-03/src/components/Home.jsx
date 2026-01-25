import { Button } from '@mui/material';
import Day from './Day';
import styles from './Home.module.css';
import { getCurrentWeather } from '../services/apiWeather';
import Welcome from './Welcome';
import { useState } from 'react';

function Home({ getLocation, textState }) {

  const [data, setData] = useState(null);

  async function getWeather() {
    const position = await getLocation()
    const weatherDetail = await getCurrentWeather(position.latitude, position.longitude)
    setData(weatherDetail)

  }

  return (
    <section className={styles.section}>
      {data && <Day
        temperature={{ max: data.main.temp_max, min: data.main.temp_min }}
        iconCode={data.weather[0].icon} />}
      {!data && <Welcome> welcome to weirui weather site </Welcome>}
      <Button variant="contained" size="large" onClick={getWeather}>
        {textState}
      </Button>
    </section>
  );
}
export default Home;
