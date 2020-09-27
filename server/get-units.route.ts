import {Request, Response} from 'express';
import {UNITS} from '../src/db-data';


export function getAllUnits(req: Request, res: Response) {

    res.status(200).json(Object.values(UNITS));

}

/*
export function getUnitById(req: Request, res: Response) {

    const id = req.params['id'];

    const units: any = Object.values(UNITS);

    const unit = units.find(unit => unit.id == id);

    res.status(200).json(unit);
}

*/