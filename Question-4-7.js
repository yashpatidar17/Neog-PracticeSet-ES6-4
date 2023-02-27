// Write an ES6 function that takes the users' details
//  and returns the data with team ID. Avoid using in-built methods.

// const podAndTeamAllocation = obj =>{
//     obj.teamId = 12345;
//     const {firstName,lastName,teamId} = obj;

//     return obj;
// }

const podAndTeamAllocation = (obj) => ({...obj,teamId:1264161})

const userData = { firstName : "John", lastName: "Dee" }
console.log(podAndTeamAllocation(userData))
// {firstName: 'John', lastName: 'Dee', teamId: 667543}