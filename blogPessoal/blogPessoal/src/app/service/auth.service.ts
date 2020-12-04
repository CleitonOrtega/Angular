import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserLogin } from './../model/UserLogin';
import { User } from './../model/User';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  logar(userLogin: UserLogin) : Observable<UserLogin>{
    return this.http.post<UserLogin>('http://localhost:8080/usuarios/logar',userLogin)
  }

  cadastrar(user : User) : Observable<User>{
    return this.http.post<User>('http://localhost:8080/usuarios/cadastrar',user)

  }

  btnSair(){
    let ok = false
    let token = localStorage.getItem('token')

    if(token != null){
      ok = true
    }

    return ok
  }

  btnLogin(){
    let ok = false
    let token = localStorage.getItem('token')

    if(token == null){
      ok = true
    }

    return ok
  }

}
