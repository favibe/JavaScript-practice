/* promise -promise is an object that has the status of an object of an async operation,
and its coressponding value */

/* in the callback hell the code base increase horinzontally which makes it messay, 
not readable(nested callbacks)--- Happens when asychronous operations depends on each other.
but the codebase should  rather increase verticllly (where promisee $ ---async/await) comes in...

---> Promise  is like a placeholder for a value that you'll get in the future.
it is crfeated using the new promise() constructor */

let promiseeeee =  function bookHotel(hotelId) {
  //  stateRequest --->  pending/ fulfilled/ rejected;
   // response ---> value/error;
}

const URL = " ";

let promise = fetch(URL);
promise.then(function(response) {
    console.log(response);
})

//.then : is a ,ethod used to get the data 