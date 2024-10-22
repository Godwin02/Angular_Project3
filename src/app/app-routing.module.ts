import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { RemovetableComponent } from './removetable/removetable.component';
import { ViewtableComponent } from './viewtable/viewtable.component';
import { HomeComponent } from './home/home.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'add',component:AddproductComponent},
  {path:'remove',component:RemovetableComponent},
  {path:'view',component:ViewtableComponent},
  {path:'updateProduct/:id',component:UpdateProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
