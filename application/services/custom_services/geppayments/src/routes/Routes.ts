import { Request, Response, NextFunction } from "express";
import { geppaymentsController } from '../controller/geppaymentsController';


export class Routes {
    private geppayments: geppaymentsController = new geppaymentsController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/geppayments/:id').delete(this.geppayments.GpDelete);
app.route('/geppayments/get/search').get(this.geppayments.GpSearch);
app.route('/geppayments/get/update').put(this.geppayments.GpSearchForUpdate);
app.route('/geppayments').put(this.geppayments.GpUpdate);
app.route('/geppayments/:id').get(this.geppayments.GpGetEntityById);
app.route('/geppayments').get(this.geppayments.GpGetAllValues);
app.route('/geppayments').post(this.geppayments.GpCreate);
app.route('/geppayments/userid/created_by').get(this.geppayments.GpGetNounCreatedBy);
     }

}