import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormControlName,Validators,AbstractControl } from '@angular/forms';
import { AmountService } from 'src/app/services/amount.service';
import {FormsModule}  from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finalpaymentpage',
  templateUrl: './finalpaymentpage.component.html',
  styleUrls: ['./finalpaymentpage.component.css']
})
export class FinalpaymentpageComponent implements OnInit {
  static CanActivate: any;
  grandtotal:any;
  paymentForm:FormGroup;
  name:any;
  address:any;
  phonenumber:any;
  time:any;
  cardname:any;
  cardnumber:any;
  month:any;
  year:any;
  cvv:any;
  constructor(public amountservice:AmountService,private router :Router){}
  
  Successmessage(){
    if(this.name.length==0){
      console.log(this.name);
     return
    }
    else{
      alert('Successfully Booked..')
    }
  }

  
  
 
 
  ngOnInit():void{
   this.grandtotal= this.amountservice.getamount();
   this.paymentForm=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(5)]),
    address:new FormControl('',Validators.compose([Validators.required,Validators.maxLength(50)])),
    phonenumber:new FormControl('',Validators.compose([Validators.required,Validators.maxLength(10)])),
    time:new FormControl('',Validators.required),
    cardname:new FormControl('',[Validators.required,Validators.minLength(5)]),
    cardnumber:new FormControl('',Validators.compose([Validators.required,Validators.maxLength(16),Validators.minLength(16)])),
    month:new FormControl('',[Validators.required]),
    year:new FormControl('',[Validators.required]),
    cvv:new FormControl('',Validators.compose([Validators.required,Validators.maxLength(3),Validators.minLength(3)]))

  })
  }

  get f(){
    return this.paymentForm.controls;
  }
  submit(){}
  success(){
    if(this.name.length!=0 && this.address.length!=0 && this.phonenumber.length!=0 &&  this.cardname.length!=0 &&  this.cardnumber.length!=0  && this.month.length!=0 &&  this.year.length!=0 && this.cvv.length!=0){
      
      alert('Successfully Booked..')
      this.router.navigate(['home/homepage'])
    }
  }
  isFormComplete():boolean{
    const {name,address,phonenumber,time,cardname,cardnumber,month,year,cvv}=this.paymentForm.controls;
    return name.valid && address.valid && phonenumber.valid && time.valid && cardname.valid && cardnumber.valid && month.valid && year.valid && cvv.valid;
  }

  
}
