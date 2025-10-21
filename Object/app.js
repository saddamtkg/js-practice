// JavaScript Objects

const newSymb = Symbol("key1");
const mobileModel = {
  // key: value
  brand: "Samsung",
  model: "s24 Ultra",
  Processor: "Sanpdragon Gen 3",
  camera: ["200Mp", "12MP", "12MP"],
  hasZoomCamera: true,
  "selfie camera MP": 12,
  [newSymb]: "myKey1",
  brandModel: function () {
    return `Mobile Brand is ${this.brand} and Model is ${this.model}`;
  },
  batteray: {
    mah: 5000,
  },
};

mobileModel.model = "s25 Ultra";

Object.freeze(mobileModel);

mobileModel.model = "s26 Ultra";

console.log(mobileModel.model);

console.log(mobileModel);

console.log(mobileModel.batteray.mah);

console.log(mobileModel["selfie camera MP"]);

console.log(mobileModel[newSymb]);

console.log(mobileModel.brandModel());

console.log(mobileModel.hasOwnProperty("model"));

console.log(Object.keys(mobileModel));

console.log(Object.values(mobileModel));

const obj1 = {
  a: 1,
  b: 2,
  c: 3,
};
const obj2 = {
  x: 1,
  y: 2,
  z: 3,
};
const obj3 = {
  p: 1,
  q: 2,
  r: 3,
};

//const objFinal = Object.assing(target,source)

// const objFinal2 = Object.assign(obj1, obj2, obj3)
const objFinal2 = Object.assign({}, obj1, obj2, obj3);
const objFinal = { ...obj1, ...obj2, ...obj3 }; //spred operator
const objFinal3 = { obj1, obj2 };

console.log(objFinal3);

console.log(objFinal);

console.log(objFinal2);

// constractor Object

function Person(first, last) {
  (this.firstName = first), (this.lastName = last);
}

const person1 = new Person("Md Saddam", "Ranju");
person1.age = 33;
const person2 = new Person("md ranju", "saddam");
console.log(person1);
console.log(person2);
