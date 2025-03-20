import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox({info}) {
    const HOT = import.meta.env.VITE_HOT;
    const COLD = import.meta.env.VITE_COLD;
    const RAIN = import.meta.env.VITE_RAIN;
    const NORMAL = import.meta.env.VITE_NORMAL;

    return (
        <div className="InfoBox">
            <h3>WeatherInfo - {info.weather}</h3>
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={
                        info.city === "" ? "..." :
                        info.temp > 27 ? HOT : 
                        info.humidity >= 90 ? RAIN : 
                        info.temp < 10 ? COLD : NORMAL
                    }
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                        <b>Temperature = {info.temp}&deg;C</b> <br />
                        Humidity = {info.humidity} <br />
                        Min Temp = {info.tempMin}&deg;C <br />
                        Max Temp = {info.tempMax}&deg;C <br />
                        The weather feels like {info.feelsLike}&deg;C
                    </Typography>
                </CardContent>
                </Card>
            </div>
        </div>
    );
}