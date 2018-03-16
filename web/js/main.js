"use strict";function User(n){if(!(this instanceof User))throw new Error("Call without new!");this.name=n,this.sayHi=function(){alert("My name "+this.name)}}User.prototype.fn=function(){return 1};var admin=new User("Admin");console.dir(admin);
//# sourceMappingURL=main.js.map
