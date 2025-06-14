function canDriveCar(user, car) {
  if (user.age >= 18) {
    return true;
  }

  return car.engineSize < 1000;
}

export { canDriveCar };
