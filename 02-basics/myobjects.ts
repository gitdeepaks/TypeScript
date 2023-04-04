const user = {
  name: 'Deepak',
  email: 'deepak@gmail.com',
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

let newUser = { name: 'Anurag', isPaid: false, email: 'anurag@gmail.com' };

createUser(newUser);

function createCourse(): {} {
  return { name: 'Reactjs', price: 399 };
}

export {};
