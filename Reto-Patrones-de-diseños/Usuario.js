import { Usuario, showUsers } from './modul.mjs'

let user1 = new Usuario('Kenneth');
let user2 = new Usuario('Abraham');

user1.addUser();
user2.addUser();
showUsers();