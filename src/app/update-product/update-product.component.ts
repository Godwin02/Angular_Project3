import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product_table } from '../product.model';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  constructor(private prservice: ProductServiceService, private form: FormBuilder, private r: Router, private ar: ActivatedRoute) { }

  updateform = this.form.group(
    {
      productId: [0],
      productName: [''],
      productPrice: [0],
      productStock: [0]
    },
  )
  productId: any;
  ngOnInit(): void {
    this.productId = this.ar.snapshot.paramMap.get('id');
    if (this.productId) {
      this.prservice.updateProduct(this.productId).subscribe({
        next: (response) => {
          this.updateform.patchValue(response)
        }
      });
    }

  }

  saveData() {
    let details = this.updateform.value as Product_table;
    this.prservice.updateData(this.productId,details).subscribe((demo: any) => {
      this.r.navigate(['/'])
    });
  }
}
