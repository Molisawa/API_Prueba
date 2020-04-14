import { Request, Response } from 'express';

import pool from '../database';

class UbicacionController {

    public async list(req: Request, res: Response): Promise<void> {
        const ubicacion = await pool.query('SELECT * FROM ubicacion');
        res.json(ubicacion);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const ubicacion:any = await pool.query('SELECT * FROM ubicacion WHERE id = ?', [id]);
        console.log(ubicacion.length);
        if (ubicacion.length > 0) {
            return res.json(ubicacion[0]);
        }
        res.status(404).json({ text: "La ubicacion no se encontro" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO ubicacion set ?', [req.body]);
        res.json({ message: 'Ubicacion guardada' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldUbicacion = req.body;
        await pool.query('UPDATE ubicacion set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "Ubicacion actualizada" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM ubicacion WHERE id = ?', [id]);
        res.json({ message: "Ubicacion eliminada" });
    }

}

const ubicacionController = new UbicacionController();
export default ubicacionController;