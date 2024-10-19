import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Product_table } from '../product.model';
import { ProductServiceService } from '../product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor(private form: FormBuilder,private r:Router,private prservice:ProductServiceService ) { }

  ngOnInit(): void {
  }
  addform = this.form.group(
    {
      productName: [''],
      productPrice: [0],
      productStock: [0]
    }
  )
  get fuctioncall() {
    return this.addform.controls;
  }
  // submit = false;
  saveData() {
    // this.submit = true;
    let data=this.addform.value as Product_table;//comparing the variables in the model and the inputs in the form.
    this.prservice.insertdata(data).subscribe((demo:any) =>
   {this.r.navigate(['/'])} );
  }
}
