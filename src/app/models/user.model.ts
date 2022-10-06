export interface Roles {
  admin?: boolean;
}

export interface User {
  uid: string;
  email: string;
  userName: string;
  photo: string;
  registrationDate: string;
  roles: Roles;
}
