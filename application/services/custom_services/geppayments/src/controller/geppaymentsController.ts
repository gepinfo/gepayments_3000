import { Request, Response } from 'express';
import { geppaymentsService } from '../service/geppaymentsService';
import { CustomLogger } from '../config/Logger'
let geppayments = new geppaymentsService();

export class geppaymentsController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    geppayments.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into geppaymentsController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from geppaymentsController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    geppayments.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into geppaymentsController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from geppaymentsController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    geppayments.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into geppaymentsController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from geppaymentsController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    geppayments.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into geppaymentsController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from geppaymentsController.ts: GpUpdate');
    })}
public GpGetEntityById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    geppayments.GpGetEntityById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into geppaymentsController.ts: GpGetEntityById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from geppaymentsController.ts: GpGetEntityById');
    })}
public GpGetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    geppayments.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into geppaymentsController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from geppaymentsController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    geppayments.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into geppaymentsController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from geppaymentsController.ts: GpCreate');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    geppayments.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into geppaymentsController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from geppaymentsController.ts: GpGetNounCreatedBy');
    })}


}