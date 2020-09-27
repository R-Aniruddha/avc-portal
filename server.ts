

import * as express from 'express';
import {Application} from "express";
import {getAllUnits} from './server/get-units.route';
import {saveUnit} from './server/save-unit.route';


const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

app.route('/api/units').get(getAllUnits);

app.route('/api/units/:id').put(saveUnit);



const httpServer = app.listen(9000, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});



