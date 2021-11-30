import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Snack } from './snack';

@Injectable({
  providedIn: 'root'
})
export class SnackService {

  private endpointUrl = `${environment.apiUrl}/snacks`;

  constructor(private http: HttpClient) { }

  save(snack: Snack) {
    return this.http.post<Snack>(this.endpointUrl, snack);
  }

  update(id: number, snack: Snack) {
    return this.http.put<Snack>(`${this.endpointUrl}/${id}`, snack);
  }

  findById(id: number) {
    return this.http.get<Snack>(`${this.endpointUrl}/${id}`);
  }

  findAll() {
    return this.http.get<Snack[]>(this.endpointUrl);
  }

  deleteById(id: number) {
    return this.http.delete(`${this.endpointUrl}/${id}`);
  }

}
