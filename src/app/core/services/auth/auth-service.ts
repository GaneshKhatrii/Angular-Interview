import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Environment } from '../../../../environments/environment';
import {
  IUserLoginRequest,
  IUserLoginResponse,
  IUserRegisterRequest,
} from '../../models/auth/userAuthModels';
import { ApiResponse } from '../../models/common/commonModels';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  baseUrl = Environment.domain + '/auth';

  onRegister(userObj: IUserRegisterRequest) {
    const formData = new FormData();

    formData.append('UserName', userObj.UserName);
    formData.append('Role', userObj.Role);
    formData.append('CompanyContactNo', userObj.CompanyContactNo);
    formData.append('CompanyEmailId', userObj.CompanyEmailId);
    formData.append('Password', userObj.Password);
    formData.append('CompanyName', userObj.CompanyName);
    formData.append('CompanyFullAddress', userObj.CompanyFullAddress);
    formData.append('CompanyWebsiteLink', userObj.CompanyWebsiteLink);
    formData.append('CorporateIdentificationNo', userObj.CorporateIdentificationNo);
    formData.append('CompanyLogo', userObj.CompanyLogo);
    formData.append('CompanyStamp', userObj.CompanyStamp);
    return this.http.post<ApiResponse<string>>(`${this.baseUrl}/register`, formData);
  }
  onLogin(userObj: IUserLoginRequest) {
    return this.http.post<ApiResponse<IUserLoginResponse>>(`${this.baseUrl}/register`, userObj);
  }
}
