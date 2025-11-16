//Write a function named getBusinessAddress that receives an Object representing a business as a parameter, and returns a string representation of the it's address. */

function getBusinessAddress(business) {
  const address = business.address;

  return `${address.street}, ${business.name}, ${address.zipCode}`;
}

const business = {
  address: { number: 3, street: "Avenuepark", zipCode: 123500 },
  name: "100 Functions ltd.",
};

