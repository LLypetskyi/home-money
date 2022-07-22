import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { AuthModule } from './auth/auth.module';
import { UsersService } from './shared/services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './shared/services/auth.service';
import { SystemModule } from './system/system.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    BrowserAnimationsModule,
    AuthModule,
    HttpClientModule,
    SystemModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ],

  providers: [UsersService, AuthService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule {}
