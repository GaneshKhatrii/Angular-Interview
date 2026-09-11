export interface ApiResponse<T> {
  success: string;
  statusCode: string;
  message: string;
  data: T;
}
