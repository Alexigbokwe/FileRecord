import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  readonly APIUrl: string = '';
  constructor(private Http: HttpClient) {
    //
  }

  getAllFiles(): Observable<any[]> {
    return this.Http.get<any>(`${this.APIUrl}/getFiles`);
  }

  addFile(val: any) {
    return this.Http.post(`${this.APIUrl}/addFile`, val);
  }

  deleteFile(val: any) {
    return this.Http.delete(`${this.APIUrl}/deleteFile`, val);
  }
}
