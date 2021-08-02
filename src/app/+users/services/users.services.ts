import { HttpClient, HttpResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { UserResponse } from 'src/app/models/UserResponse'

@Injectable()
export class UsersService {
  constructor(private _http: HttpClient) {}

  public getUsers(
    page: number = 1,
    limit: number = 6
  ): Observable<HttpResponse<UserResponse>> {
    const endpoint = `https://reqres.in/api/users?page=${page}&per_page=${limit}`
    return this._http.get<UserResponse>(endpoint, { observe: 'response' })
  }
}
