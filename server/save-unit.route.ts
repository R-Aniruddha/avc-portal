import {Request, Response} from 'express';
import {findUnitById} from '../src/db-data';


export function saveUnit(req: Request, res: Response) {

    const id = req.params["id"],
          changes = req.body;

    console.log("Saving units", id, JSON.stringify(changes));

    const unit = findUnitById(id);

    unit.description = changes.description;

    res.status(200).json(unit);

}
