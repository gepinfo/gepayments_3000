import * as mongoose from 'mongoose';
import geppaymentsModel from '../models/daomodels/geppayments';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'


export class geppaymentsDao {
    private geppayments = geppaymentsModel;
    constructor() { }
    
    public async GpDelete(geppaymentsId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into geppaymentsDao.ts: GpDelete');

    

    
    
    
    this.geppayments.findByIdAndRemove(geppaymentsId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from geppaymentsDao.ts: GpDelete');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(geppaymentsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into geppaymentsDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(geppaymentsData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.geppayments.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from geppaymentsDao.ts: GpSearch');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(geppaymentsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into geppaymentsDao.ts: GpSearchForUpdate');

    

    
    
    
    this.geppayments.findOneAndUpdate({ _id: geppaymentsData._id }, geppaymentsData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from geppaymentsDao.ts: GpSearchForUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(geppaymentsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into geppaymentsDao.ts: GpUpdate');

    

    
    
    
    this.geppayments.findOneAndUpdate({ _id: geppaymentsData._id }, geppaymentsData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from geppaymentsDao.ts: GpUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetEntityById(geppaymentsId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into geppaymentsDao.ts: GpGetEntityById');

    

    
    
    
    this.geppayments.findById(geppaymentsId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from geppaymentsDao.ts: GpGetEntityById');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into geppaymentsDao.ts: GpGetAllValues');

    

    
    
    
    this.geppayments.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from geppaymentsDao.ts: GpGetAllValues');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(geppaymentsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into geppaymentsDao.ts: GpCreate');

    let temp = new geppaymentsModel(geppaymentsData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from geppaymentsDao.ts: GpCreate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(geppaymentsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into geppaymentsDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.geppayments.aggregate(([
                        { $match: { $and: [{ created_by: geppaymentsData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from geppaymentsDao.ts: GpGetNounCreatedBy');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}


}