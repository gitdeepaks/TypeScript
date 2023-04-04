const users: (string | number)[] = [1, 'ds'];
let tUsers: [string, number, boolean];

tUsers = ['ds', 123, true];

let rgb: [number, number, number] = [255, 255, 255];

type User = [number, string];

const neUser: User = [122, 'example@google.com'];

neUser[1] = 'ds.com';

neUser.push(1);

export {};
