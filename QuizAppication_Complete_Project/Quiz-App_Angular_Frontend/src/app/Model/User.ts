export class User {
  public id: number;
  public username: string;
  public password: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  public contact: string;
  public role: string;

  constructor(
    id: number,
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    email: string,
    contact: string,
    role: string
  ) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.contact = contact;
    this.role =role;
  }
}
