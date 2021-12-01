// // class Car {
// //     // Change code below this line
// //   constructor(brand, model, price) {
// //   this.brand = brand;
// //   this.model = model;
// //   this.price = price;
// //   }

// //     // Change code above this line
// //   }
// //   const car = new Car();
// //   console.log(car);

// class Storage {

// constructor(items) {
//  this.items = items;
// };
//   getItems() {
//   return this.items;
//   };
//   addItem(newItem){
//     this.items.push(newItem); 
//   };
//   removeItem(itemToRemove) {
//     this.item.splice(1,1);
//   };
//   }
//   // Change code above this line
//   const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
//   // console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
//   // storage.addItem("Droid");
//   // console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
//   storage.removeItem("Prolonger");
//   console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
  
///================ 17 задача 5 модуля ================

// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line

// static checkPrice(price){
  
//   if (price > Car.#MAX_PRICE){
//   return "Error! Price exceeds the maximum"
//   } else {
//   return "Success! Price is within acceptable limits";
// }
// }
  // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

///================ 19 задача 5 модуля ================

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  // Change code below this line

  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };
  static accessLevel = {};
  
constructor ({ email, accessLevel }) {
super (email);
this.accessLevel = accessLevel;
}
  // Change code above this line
}

const mango = new Admin({
  email: "mango@mail.com",
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"


///================ 20 задача 5 модуля ================

