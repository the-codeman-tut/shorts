"use strict";

let user = {
    name: 'The code man',
    pageAccess: ['home', 'about', 'course'],
    
    set setName(value) {
        this.name = value;
    },

    get getName() {
        return this.name;
    }
}

let admin = {
    __proto__: user,
    isAdmin:true
}

admin.setName = "Admin";
console.log(admin);
console.log(admin.name);
console.log(user.name);