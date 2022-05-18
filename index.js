//closures - closure is not something that we create manually or explicitly it happens automatically in certain situation which we need to recognize.
//closure makes a function remember all the variable that existed at the function birthplace initially.
//any function always has access to variable environment of the execution context in which the function was created.





const ticketBooking = function(){
    let passengerCount = 0;

    return function(){
        passengerCount++;
        console.log(`the passenger count is ${passengerCount}`)
    };
};

const bookie = ticketBooking()
bookie();
bookie();
bookie();
bookie();

// in closure even though the execution destroyed, the variable environment somehow keeps living somehow in the engine.

let f;

const g = function(){
    const a =23;

    f = function(){
        console.log(a*2);
    }
};

const h = function(){
    const b =23;

    f = function(){
        console.log(b*2);
    }
};


g();
f();
console.dir(f);

h();
f();
console.dir(f);

//setTimeout and setInterval

// setTimeout((fruit1, fruit2) => {
//     console.log(fruit1,fruit2 );
// },5000, "banana", "orange");

const fruits = ["banana","orange"];
const timer = setTimeout((fruit1, fruit2) => {
    console.log(fruit1,fruit2 );
},5000, ...fruits);
console.log("waiting for time to finish ");

if(fruits.includes("banana")){
    clearTimeout(timer);
}

// setInterval(() => {
//     console.log("hi");
// }, 2000);

const boardingPassengers = (n,wait) => {
    const peopleperGroup = n/3;

    setTimeout(() => {
        console.log(`boarding ${n} number of passengers`);
        console.log(`boarding ${peopleperGroup} people pre value`);
        console.log("boarding in secs", wait);
    }, wait*1000);
};


boardingPassengers(180,2);
