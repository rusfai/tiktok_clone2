import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private apiUrl = 'https://rusfai-send-photo-f9d0.twc1.net/tiktok';

  constructor(private http: HttpClient) {}

  sendPhotoData(formData: FormData): Observable<any> {
    console.log('Отправка данных на сервер:', formData);
    console.log('URL для отправки:', this.apiUrl);

    return this.http.post(this.apiUrl, formData).pipe(
      tap(response => this.logSuccess(response)),
      // catchError(error => this.handleError(error))
    );
  }

  private logSuccess(response: any) {
    console.log('Успешный ответ от сервера:');
    console.log('Тело ответа:', response);
  }

  private handleError(error: any) {
    console.error('Ошибка при отправке данных:', error);

    // if (error instanceof HttpErrorResponse) {
    //   console.error('HttpErrorResponse детали:');
    //   console.error('Статус:', error.status);
    //   console.error('Сообщение:', error.message);
    //   console.error('URL:', error.url);
    //   console.error('Название ошибки:', error.name);
    //   console.error('Ошибка:', error.error);

    //   if (error.status === 0) {
    //     console.error('Возможная проблема с подключением к серверу или блокировка CORS.');
    //   } else {
    //     console.error(`Полное сообщение об ошибке:`, error);
    //   }
    // } else {
    //   console.error('Произошла неизвестная ошибка:', error);
    // }

    // return throwError(() => new Error('Произошла ошибка при отправке данных. Пожалуйста, попробуйте позже.'));
  }
}
