import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';



@Injectable()
export default class RegisterService {
    private apiUrl = 'http://localhost:8100';

    constructor(private http: HttpClient) {

    }

    sendUser(login: Object) {
        return this.http
           .post(this.apiUrl, login)
            
    };
    




}