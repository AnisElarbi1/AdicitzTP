import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SearchComponent} from './search/search.component';
import {HttpClientModule} from '@angular/common/http';
import {ErrorComponent} from './error/error.component';
import {
  MatBadgeModule,
  MatButtonModule,
  MatButtonToggleModule, MatCardModule, MatChipsModule,
  MatFormFieldModule, MatGridListModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {ResultComponent} from './result/result.component';
import {BookService} from './services/book.service';

import { MatDialogModule } from '@angular/material';
import {ConfirmationDialogComponent} from './Modal/confirmation-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ErrorComponent,
    ResultComponent,
    ConfirmationDialogComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatOptionModule,
    MatSelectModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
    MatBadgeModule,
    MatChipsModule

  ],
  providers: [BookService],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmationDialogComponent],
})
export class AppModule {
}
