let user = {
    name: 'mark',
    age:12
}

let admin = {};
Object.assign(admin, user);
admin.name = 'admin';

console.log("user Object => ", user);
console.log("admin Object => ", admin);


// admin.name = 'admin';
// console.log(user,admin);