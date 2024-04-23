
import express, { Request, Response } from 'express';
import { base } from './controller';

const app = express();
const port = 3000;

app.use(express.json());

interface Inventory {
    cebolla: number;
    aji: number;
    harina: number;
    jamon: number;
    queso: number;
    ajo: number;
}

let products: Inventory[] = [
    { 
        cebolla: 4,
        aji: 10,
        harina: 45,
        jamon: 37,
        queso: 55,
        ajo: 65,
    }
];

//Endpoint GET to mainpage welcome
app.get('/', (req: Request, res: Response) => {
    res.send('<h1>MAIN PAGE!</h1>')
});

//Endpoint GET to get products inventory
app.get('/products', (req: Request, res: Response) => {
    res.json(products)
});



//
//
//
//listening App to run program 

app.listen(port, () => {
    console.log(`The server is running at port http://localhost:${3000}, please click it.`);
});
