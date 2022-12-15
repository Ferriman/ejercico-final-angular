import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductoMainComponent } from './producto-main/producto-main.component';
import { ProductoFormComponent } from './producto-form/producto-form.component';



@NgModule({
  declarations: [
    ProductoMainComponent,
    ProductoFormComponent
  ],
  exports:[
    ProductoMainComponent,
    ProductoFormComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class ProductoModule { }
