import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';



@Injectable()
export default class ImageService {
    private apiUrl = 'http://localhost:8100';

    constructor(private http: HttpClient) {

    }

    sendImage(image: Object) {
        return this.http
           .post(this.apiUrl, image)
            
    };
    




}