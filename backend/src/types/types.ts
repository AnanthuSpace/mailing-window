export type User = {
    userId?: string;
    name: string;
    email: string;
    password: string;
  };
  
  export type Email = {
    id: number;
    sender: string;
    receiver: string;
    subject: string;
    preview: string;
    time: string;
    content: string;
  };
  
export interface IUser extends Document {
  userId: string,
  name: string;
  email: string;
  password: string;
}

export interface IEmail extends Document {
  sender: string;
  receiver: string;
  subject: string;
  preview: string;
  time: string;
  content: string;
}
