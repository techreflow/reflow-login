import 'next-auth';

declare module 'next-auth' {
  interface User {
    _id?: string;
    isVerified?: boolean;
    email?: string;
    isActivated?: boolean;
    firstName?:string,
    lastName?:string

  }
  interface Session {
    user:{
      _id?: string;
    isVerified?: boolean;
    email?: string;
    isActivated?: boolean;
    }& DefaultSession['user'];
  }
  interface JWT{
    _id?: string;
    isVerified?: boolean;
    email?: string;
    isActivated?: boolean;
  }
}

declare module "next-auth/jwt"{
  interface JWT{
    _id?: string;
    isVerified?: boolean;
    email?: string;
    isActivated?: boolean;
  }
}