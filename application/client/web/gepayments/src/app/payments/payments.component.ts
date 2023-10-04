import { Component, OnInit, ViewChild } from '@angular/core';
import { PaymentsService } from './payments.service';





@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss'],
})

export class PaymentsComponent implements OnInit {
    public geppayments:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        user_name: '',
        total_price: '',
        cardholder_name: '',
        invoiceid: '',
    }




    constructor (
        private paymentsService: PaymentsService,
    ) { }

    ngOnInit() {
        this.geppayments.created_by = sessionStorage.getItem('email') || ''; 
        


    
    }
    GpCreate() {
        this.paymentsService.GpCreate(this.geppayments).subscribe((data:any) => {
            this.geppayments.user_name = ''
 	 	this.geppayments.total_price = ''
 	 	this.geppayments.cardholder_name = ''
 	 	this.geppayments.invoiceid = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }


}