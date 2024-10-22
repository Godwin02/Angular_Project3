import { Component, OnInit } from '@angular/core';
import { Product_table } from '../product.model';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-removetable',
  templateUrl: './removetable.component.html',
  styleUrls: ['./removetable.component.css']
})
export class RemovetableComponent implements OnInit {

  constructor(private prservice:ProductServiceService) { }
  productData:Product_table[]=[];
  ngOnInit(): void {
this.prservice.viewdata().subscribe((data1:any )=>{
  this.productData=data1;
})
  }

}
