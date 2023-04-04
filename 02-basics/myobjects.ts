// const user = {
//   name: 'Deepak',
//   email: 'deepak@gmail.com',
//   isActive: true,
// };

// function createUser({ name: string, isPaid: boolean }) {}

// let newUser = { name: 'Anurag', isPaid: false, email: 'anurag@gmail.com' };

// createUser(newUser);

// function createCourse(): {} {
//   return { name: 'Reactjs', price: 399 };
// }

// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// function createUser(user: User): User {
//   return { name: '', email: '', isActive: true };
// }

// createUser({ name: '', email: '', isActive: true });

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCard?: number;
};

let myUser: User = {
  _id: '1234',
  name: 'd',
  email: 'd@d.com',
  isActive: false,
};

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  carddate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

myUser.email = 'h1@gmail.com';
// myUser._id = 'asa';

export {};
