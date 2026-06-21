export interface User {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  // optional for normal user
  country?: string;
}
