

let promise = new Promise((resolved) => resolved("Done"));
promise
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

async function reSmth () {
    let promise = new Promise ((res) => res("Done Done"));
    return promise;
}
const results = reSmth();
//console.log(results);
//promise.then((res) => console.log(res)); [So no need for this when we have return];
/* Aysnc 
 --> once you place async in front of a function it becomes a promise
 -->So its an elegant way to write promise without using .then() .all() and all of that
 ::: __:: Await will make the function excution stop at ehereever the syntax is
 until the promise is settled
 ::::__:: since no .catch in async we use try-catch to catch errors*/


async function returnSmth () {
    let promise = new Promise ((res) => res("Done Done"));
    let result = await promise;
    console.log(result);
}

returnSmth();




async function returnSmth () {

    try {
        let promise = new Promise ((res) => res("Done Done"));
        let result = await promise;
        console.log(result);
    } catch (err) {
        console.log("Error occured ::",err)
    }

}

returnSmth();







//creating async with arror func
const getUserData = async () => {
    try{
        const promise = fetch("https://mockdata.prakashsakari.repl.co/users");
        const data =await promise
        console.log(data)
    } catch (err) {
        console.log(err)
    }
};


getUserData();
//if i run this on console chrome. i get a response.

//next is converting it to json

const getUserDatas = async () => {
    try{
        const promise = fetch("https://mockdata.prakashsakari.repl.co/users");
        const data =await promise;
        const response = await data.json();
        console.log(response);
    } catch (err) {
        console.log(err);
    }
};


