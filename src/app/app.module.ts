import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarCreateComponent } from './car/car-create/car-create.component';
import { CarDetailsComponent } from './car/car-details/car-details.component';
import { CarListComponent } from './car/car-list/car-list.component';
import { InMemoryDataService }  from './db-memory/in-memory-data.service';

@NgModule({
    declarations: [
        AppComponent,
        CarCreateComponent,
        CarDetailsComponent,
        CarListComponent,

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
