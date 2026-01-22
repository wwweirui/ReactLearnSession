import { Button } from '@mui/material';
import Day from './Day';
import styles from './Home.module.css';

import { getCurrentWeather } from '../services/apiWeather';

function Home({ getLocation, textState }) {


  async function getWeather() {
    const position = await getLocation()
    // 直接使用props 传入的position 因为异步更新，无法获取最新
    const weatherDetail = await getCurrentWeather(position.latitude, position.longitude)
    console.log(weatherDetail, 'weatherDetail');
  }

  return (
    <section className={styles.section}>
      <Day />
      <Button variant="contained" size="large" onClick={getWeather}>
        {textState}
      </Button>
    </section>
  );
}
export default Home;
