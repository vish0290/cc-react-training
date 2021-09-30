let a = [1,33,99,50,100,150,60,99,1000,999,0,-1,10]

function great(a){
    const b = a.filter((val,index)=> val >= 150)
    console.log(b)
}
great(a)