const isRequestSuccessful = true;

const db = [
    {id: 1 , name : "joy"},
    {id: 2, name: "Mike"},
];

let promise = new Promise((resolve, reject) => {
    if (isRequestSuccessful){
        setTimeout(()=> resolve(db), 1000)
    }else {
        const error = new Error("Something went wrong")
        reject(error);
    }
});


promise
    .then((response) => console.log(response))
    .catch(function (error){
        console.log(error);
    });

//method chaining

/**
 * Promise
 */

const hotelName = "The Kak Palace";

function bookHotel(hotel) {
  const promise = new Promise((resolve, reject) => {
    const hotelId = "xyz123";
    if (!validateHotel()) {
      const error = new Error("No Hotel Found");
      reject(error);
    }

    if (hotelId && validateHotel) {
      setTimeout(() => {
        resolve(hotelId);
      }, 3000);
    }
  });

  return promise;
}

function validateHotel() {
  return true;
}

function payment(hotelId) {
  return new Promise((resolve) => resolve("payment successful"));
}

let hotel = bookHotel(hotelName);
hotel
  .then((hotelId) => {
    console.log({ hotelId });
    return hotelId;
  }) //1
  .catch((err) => console.log(err))
  .then(function (hotelId) {
    //2
    return payment(hotelId);
  })
  .catch((err) => console.log(err))
  .then((response) => console.log(response)) //3
  .catch((error) => console.log(error.message));