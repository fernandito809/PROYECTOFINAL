import { Request, Response } from 'express';



export function base(req: Request, res: Response) {
    res.send('<h1>Practica con API de empleados!</h1>');
}