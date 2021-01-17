import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  readonly APIUrl: string = 'https://localhost:5001/api/files';
  constructor(private Http: HttpClient) {
    //
  }

  getAllFiles(): Observable<any[]> {
    return this.Http.get<any>(`${this.APIUrl}`);
  }

  sendMail(val: any) {
    return this.Http.post(`${this.APIUrl}/sendMail`, val);
  }

  uploadFile(file: any) {
    // Create form data 
    const formData = new FormData();  
        
    // Store form name as "file" with file data 
    formData.append("file", file, file.name); 
    return this.Http.post(`${this.APIUrl}`, formData);
  }

  deleteFile(val: any) {
    return this.Http.delete(`${this.APIUrl}`, val);
  }
}
