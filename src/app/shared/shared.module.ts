import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './components/loader/loader.component';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    LoaderComponent
  ],
  declarations: [
    LoaderComponent
  ]
})
export class SharedModule { }
