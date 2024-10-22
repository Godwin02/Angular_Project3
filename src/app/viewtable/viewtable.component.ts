import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Router } from '@angular/router';
import { Product_table } from '../product.model';

@Component({
  selector: 'app-viewtable',
  templateUrl: './viewtable.component.html',
  styleUrls: ['./viewtable.component.css']
})
export class ViewtableComponent implements OnInit {

  constructor(private prservice: ProductServiceService, private r: Router) { }

  productData: Product_table[] = [];
  ngOnInit(): void {
    this.prservice.viewdata().subscribe((data1: any) => {
      this.productData = data1;
    });
  }
  deleteProduct(id: number) {
    this.prservice.removedata(id).subscribe((data1: any) => {
      this.ngOnInit();
    });
  }
  updateProduct(id:number){
    this.r.navigate(['/updateProduct',id])
  }
}
