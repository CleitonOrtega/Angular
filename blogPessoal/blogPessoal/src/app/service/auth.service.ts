import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserLogin } from './../model/UserLogin';
import { User } from './../model/User';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  logar(userLogin: UserLogin) : Observable<UserLogin>{
   
    return this.http.post<UserLogin>('https://blogpessoal-cleiton.herokuapp.com/usuarios/logar',userLogin)
  }

  cadastrar(user : User) : Observable<User>{
    return this.http.post<User>('https://blogpessoal-cleiton.herokuapp.com/usuarios/cadastrar',user)

  }

  btnSair(){
    let ok = false
    let token = environment.token

    if(token != ''){
      ok = true
    }

    return ok
  }

  btnLogin(){
    let ok = false
    let token = environment.token

    if(token == ''){
      ok = true
    }

    return ok
  }

}
