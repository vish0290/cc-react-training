const user = { person: { employee: { firstname: "Rahul" }, likes: ["Cycling", "Hiking", "Driving"] } }

let name = user.person.employee.firstname
let likes = user.person.likes[1]

console.log(name,likes)