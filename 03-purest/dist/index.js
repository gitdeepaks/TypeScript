"use strict";
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
    constructor(email, name // private userID: string
    ) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = 'Jaipur';
    }
    deleteToken() {
        console.log('Token deleted');
    }
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    get courseCount() {
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
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const deepak = new User('ds@d.com', 'deepak');
// deepak.name;
// deepak.deleteToken();
