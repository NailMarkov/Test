const positionLatitude = 4;
const positionLongitude = 12;
const addressLatitude = 7;
const addressLongitude = 19;

const latitude = positionLongitude - addressLatitude;
const longitude = addressLongitude - positionLatitude;

latitude ** 2;
longitude ** 2;

const result = Math.sqrt(latitude + longitude);
console.log(result);

