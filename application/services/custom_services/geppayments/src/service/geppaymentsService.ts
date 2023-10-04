import { Request, Response } from 'express';
import {geppaymentsDao} from '../dao/geppaymentsDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let geppayments = new geppaymentsDao();

export class geppaymentsService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into geppaymentsService.ts: GpDelete')
     let  geppaymentsId = req.params.id;
     geppayments.GpDelete(geppaymentsId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from geppaymentsService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into geppaymentsService.ts: GpSearch')
     let  geppaymentsData = req.query;
     geppayments.GpSearch(geppaymentsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from geppaymentsService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into geppaymentsService.ts: GpSearchForUpdate')
     let  geppaymentsData = req.body;
     geppayments.GpSearchForUpdate(geppaymentsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from geppaymentsService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into geppaymentsService.ts: GpUpdate')
     let  geppaymentsData = req.body;
     geppayments.GpUpdate(geppaymentsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from geppaymentsService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetEntityById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into geppaymentsService.ts: GpGetEntityById')
     let  geppaymentsId = req.params.id;
     geppayments.GpGetEntityById(geppaymentsId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from geppaymentsService.ts: GpGetEntityById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into geppaymentsService.ts: GpGetAllValues')
     
     geppayments.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from geppaymentsService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into geppaymentsService.ts: GpCreate')
     let  geppaymentsData = req.body;
     geppayments.GpCreate(geppaymentsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from geppaymentsService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into geppaymentsService.ts: GpGetNounCreatedBy')
     let  geppaymentsData = { created_by: req.query.createdby };
     geppayments.GpGetNounCreatedBy(geppaymentsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from geppaymentsService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}