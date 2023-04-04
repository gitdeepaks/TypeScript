let score: number | string = 43;

score = 44;

score = '55';

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let deepak: User | Admin = { name: 'Deepak', id: 2233 };

deepak = { username: 'ds', id: 4433 };

// const getDbId = (id: number | string) => {
//   //making api calls
//   console.log(`DB id is ${id}`);
// };

// getDbId(3);
// getDbId('4');

const getDbId = (id: number | string) => {
  if (typeof id === 'string') {
    id.toLowerCase();
  }
};

//array

const data: number[] = [1, 2, 3, 4];
const data2: string[] = ['1', '2', '3', '4'];
const data3: number[] | string[] = ['1', '2', '3', '4'];
const data4: (number | string | boolean)[] = ['1', '2', '3', '4', 6, 7, true];

let seatAllotment: 'aisle' | 'middle' | 'window';

seatAllotment = 'aisle';
