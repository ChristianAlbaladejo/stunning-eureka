import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../../app/models/user';
@Injectable()
export class UserService {
    public url: string;
    public identity;
    public stats;

    constructor(public _http: HttpClient) {
         this.url = "https://panesandco.herokuapp.com"   
         /* this.url = "http://localhost:3000";   */
    }

    getIdentity() {
        let identity = JSON.parse(localStorage.getItem('identity'));

        if (identity != "undefined") {
            this.identity = identity;
        } else {
            this.identity = null;
        }

        return this.identity;
    }

    ifGetIdentity() {
        let identity = JSON.parse(localStorage.getItem('identity'));
        if (identity == null) {
            return true;
        } else {
            return false;
        }
    }

    login(user: User): Observable<any> {
        JSON.stringify(user);
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this._http.post(this.url + '/admin/login', user, { headers: headers });
    }

    register(user: User): Observable<any> {
        
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this._http.post(this.url + '/register', user, { headers: headers });
    }

    getUsers(): Observable<any> {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("token")
        });
        return this._http.get(this.url + '/admin/getUsers/', { headers: headers });
    }
}

