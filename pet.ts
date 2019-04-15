export class Pet {
    name: string;
    type: string;
    age: string;
    size: string;
    condition: string;

  
  
    constructor(fname: string, lname: string, email: string, phoneNum: string, address: string){
      this.name= fname;
      this.type= lname;
      this.age= email;
      this.size= phoneNum;
      this.condition= address;
    }
  }