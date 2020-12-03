import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserLogin } from './../model/UserLogin';
import { User } from './../model/User';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  logar(userLogin: UserLogin){
    return this.http.post('http://localhost:8080/usuarios/logar',userLogin)
  }

  cadastrar(user : User){
    return this.http.post('http://localhost:8080/usuarios/cadastrar',user)

  }

}
