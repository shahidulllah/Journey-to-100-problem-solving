//Write a function wher the user can drive a car based on his age

function canDriveCar(user, car) {
  if (user.age >= 18) {
    return true;
  }
  return car.engineSize < 1000;
}

