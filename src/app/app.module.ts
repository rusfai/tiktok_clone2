import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './app.routes';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot(routes),  // Инициализация маршрутов с помощью forRoot
    ReactiveFormsModule,
    HttpClientModule,
  ],
  bootstrap: []  // указываем начальный компонент
})
export class AppModule { }
