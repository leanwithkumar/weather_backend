import axios from 'axios';
import express from 'express'
import cors from 'cors'

const app = express();

app.use(cors())

app.get("/weather", async (req, res)=>{
    const city = req.query.city;
    if(!city){
        return res.status(400).json({message : "no city name recived"})
    }
    try{
        const apikey = "3b00998d427740b095750852251406";
        const url = `http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}&aqi=yes`;
        const response = await axios.get(url);
        res.send(response.data)
    }catch(error){
        res.status(400).json({message : "unable to fetch data"})
    }
})

const port = 5000;
app.listen(port , ()=> console.log(`app is listening at port ${port}`))