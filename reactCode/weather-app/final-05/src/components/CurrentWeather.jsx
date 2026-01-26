import { Button } from '@mui/material';

import style from './CurrentWeather.module.css';
import Day from './Day';

function CurrentWeather({ data, status, setIsHome }) {
    return <>
        <section className={style.section}>
            <Day
                temperature={{ max: data.main.temp_max, min: data.main.temp_min }}
                iconCode={data.weather[0].icon}
            />
            <div>
                <Button variant="contained" size="large" onClick={() => setIsHome(false)}>
                    {status}
                </Button>
            </div>
        </section>
    </>;
}
export default CurrentWeather;
