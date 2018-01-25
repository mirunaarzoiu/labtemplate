// CORE
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// UI
import { SuiModule } from 'ng2-semantic-ui';
import { DataTableModule, SharedModule,ChartModule } from 'primeng/primeng';
import {GalleriaModule} from 'primeng/primeng';

// Services
import { ApiService } from './service';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';

// used to create fake backend
import { fakeBackendProvider } from './service';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { AnimalsComponent } from './components/pages/animals/animals.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ButtonModule } from 'primeng/components/button/button';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnimalsComponent,
    ContactComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    SuiModule,
    // Prime
    DataTableModule,
    SharedModule,
    FormsModule,
    DataTableModule,
    ButtonModule
  ],
  providers: [
    AppRoutingModule,
    ApiService,
    // providers used to create fake backend
    // fakeBackendProvider,
    // MockBackend,
    // BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
