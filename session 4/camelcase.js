function camelize(str){
    let a= str
    let b = []
    c=""
    for(let i=0;i<a.length;i++)
    {
        b.push(a[i])
    }
    for(let i=0;i<b.length;i++){
        if(b[i]=='-')
        {
            b[i]=b[i+1].toUpperCase()
            b[i+1]=""
        }
       c+=b[i]
    }
    return c
}


let x = camelize("-webkit-transition")
console.log(x) 