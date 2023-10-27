import express from 'express';
import getOrderStatus from './routes/getOrderStatus.js'

const app=express();
const port = 8080 ;

app.use(express.json());
app.use('/getOrderStatus', getOrderStatus);
app.get('/',(req,res) => {
    res.send('Helelo');

})


app.listen(port, () => {
console.log(`Fetching status started at http://localhost:${port}`);

})