export interface Auth {
}

export interface Register {
  name : string ;
  email : string ;
  password : string ;
  dateOfBirth : string;
  gender : string;
}

export interface Login {
  email : string ;
  password : string ;
}

export interface ChangePassword {

}
