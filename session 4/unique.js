let value = ["green","green","red","red","yellow","pink","pink","yellow"];
console.log("Unique values are ",unique(value))




// My preference i belive using set we can solve faster
// function unique(arr){   
//     const b = [... new Set(arr)] 
//     return b
// }

function unique(arr){   
    const b = arr.filter((val,ind,a)=>a.indexOf(val)=== ind); 
    return b
}

