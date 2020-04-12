import { User } from './model/user';

const user = new User({ name: 'Lothar', age: 52 });
console.log(user.get('name'));
console.log(user.get('age'));
user.set({ name: 'Janina' });
console.log(user.get('name'));
console.log(user.get('age'));
