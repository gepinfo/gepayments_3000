
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const geppaymentsSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   user_name: { type: String },
   total_price: { type: String },
   cardholder_name: { type: String },
   invoiceid: { type: String }
})

const geppaymentsModel = mongoose.model('geppayments', geppaymentsSchema, 'geppayments');
export default geppaymentsModel;
