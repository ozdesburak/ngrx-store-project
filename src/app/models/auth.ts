export interface User {
  _id?: string;
  name?: string;
  email?: string;
  password?:string
  isadmin?: boolean;
}

export var UserModel: User = {
  _id: null,
  name: null,
  email: null,
  password:null,
  isadmin: false,
};
export type UserId = '_id';