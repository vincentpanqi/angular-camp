import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DemoFormSkuComponent } from './demo-form-sku/demo-form-sku.component';
import { DemoFormSkuBuilderComponent } from './demo-form-sku-builder/demo-form-sku-builder.component';
import { DemoFormValidationsExplicitComponent } from './demo-form-validations-explicit/demo-form-validations-explicit.component';
import { DemoFormNgmodelComponent } from './demo-form-ngmodel/demo-form-ngmodel.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoFormSkuComponent,
    DemoFormSkuBuilderComponent,
    DemoFormValidationsExplicitComponent,
    DemoFormNgmodelComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
