// class User {
//   public email: string;
//   private name: string;
//   readonly city: string = 'Jaipur';
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//     this.city;
//   }
// }
class User {
  protected _courseCount = 1;

  readonly city: string = 'Jaipur';
  constructor(
    public email: string,
    public name: string // private userID: string
  ) {}

  private deleteToken() {
    console.log('Token deleted');
  }

  get getAppleEmail(): string {
    return `apple ${this.email}`;
  }
  get courseCount(): number {
    return this._courseCount;
  }
  set courseCount(courseNumber) {
    if (courseNumber <= 1) {
      alert('Course count shoul be more than 1');
    }
    this._courseCount = courseNumber;
  }
}

class subUser extends User {
  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 4;
  }
}

const deepak = new User('ds@d.com', 'deepak');
// deepak.name;

// deepak.deleteToken();
