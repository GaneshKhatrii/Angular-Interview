export interface IUserRegisterRequest {
  UserName: string;
  Role: string;
  CompanyContactNo: string;
  CompanyEmailId: string;
  Password: string;
  CompanyName: string;
  CompanyFullAddress: string;
  CompanyWebsiteLink: string;
  CorporateIdentificationNo: string;
  CompanyLogo: string;
  CompanyStamp: string;
}
export interface IUserRegisterResponse {
  message: string;
}
export interface IUserLoginRequest {
  userName: string;
  password: string;
}
export interface IUserLoginResponse {
  token: string;
  expiry: string;
  userId: string;
  userName: string;
  role: string;
  companyName: string;
  companyFullAddress: string;
  companyContactNo: string;
  companyEmailId: string;
  companyWebsiteLink: string;
  corporateIdentificationNo: string;
  logoPath: null;
  stampPath: null;
}
