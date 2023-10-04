import * as mongoose from 'mongoose';
import { geppaymentsSchema } from './models/daomodels/geppayments';

const geppaymentsModel = mongoose.model('geppayments', geppaymentsSchema);

export class Seed {

    constructor() {

    }

    

}
