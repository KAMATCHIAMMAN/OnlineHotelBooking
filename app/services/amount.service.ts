import { Injectable } from '@angular/core';
import * as amountData  from "../../assets/amount.json";
import * as userdetails  from "../../assets/logindetails.json";

@Injectable({
  providedIn: 'root'
})
export class AmountService {

  constructor() { }


  getuserdetails(){
  return userdetails;
 }
 
 public totalamount:any
 public getamount():any{
   return this.totalamount;
 }
 public setamount(amount:any){
   this.totalamount=amount;
 }
}
