"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
let products = [
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
app.get('/', (req, res) => {
    res.send('<h1>MAIN PAGE!</h1>');
});
//Endpoint GET to get products inventory
app.get('/products', (req, res) => {
    res.json(products);
});
//
//
//
//listening App to run program 
app.listen(port, () => {
    console.log(`The server is running at port http://localhost:${3000}, please click it.`);
});
