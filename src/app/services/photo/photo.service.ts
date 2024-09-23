import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface PhotoData {
  tiktokUrl: string;
  id: string;
  redirectUrl: string;
  foto: string;
}

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private apiUrl = 'https://rusfai-send-photo-16bd.twc1.net/tiktok'; // Замените на URL вашего сервера

  constructor(private http: HttpClient) {}

  sendPhotoData(data: PhotoData): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}