import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface RegistrationData {
  firstName: string;
  lastName: string;
  state: string;
  email: string;
  subscribe: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // Using a sample email as instructed in the Swagger spec for the auth key.
  private apiUrl = 'https://codingexercise.speakcore.com/api/registrations';
  private key = 'testuser@example.com'; 

  constructor(private http: HttpClient) { }

  register(data: RegistrationData): Observable<any> {
    const url = `${this.apiUrl}?key=${encodeURIComponent(this.key)}`;
    return this.http.post(url, data);
  }
}
