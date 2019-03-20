
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export default class CelebriteApiService {
    private apiUrl = 'http://localhost:8888/celebrites';
    
    constructor(private http: HttpClient) {
    }

    findAll() {
        return this.http.get(this.apiUrl);
    }

    findById(id: any) {
    }

    search(data: any) {
        const params = new HttpParams({ fromObject: data });

        const req = this.http.get(
            this.apiUrl + '/search', { params }
        );

        return req;
    }
}
