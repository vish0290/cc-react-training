let raksha = { name: "Raksha", surname: "Sharma", age: 28 };
let srinivas = { name: "Srinivas", surname: "Iyengar", age: 30 };
let usha = { name: "Usha", surname: "Janardhana", age: 54 };

let users = [ raksha, srinivas, usha ];

const usersMapped = users.map((values,index)=> {return{
    fullName : values.name +" "+values.surname,
    id: index+1
}})

console.log(usersMapped)