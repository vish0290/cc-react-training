function display(val) {
    document.getElementById("result").value+=val
}
function del() {
    let ans = document.getElementById("result").value
    ans = ans.slice(0,-1)
    document.getElementById("result").value=ans
}
function cls(){
    document.getElementById("result").value=""
}
function solve(){
    let val = document.getElementById("result").value
    let ans = eval(val).toFixed(4)
    document.getElementById("result").value=ans
}
function sqrt(){
    let x = document.getElementById("result").value
    let y = Math.sqrt(x)
    document.getElementById("result").value=y
}
function sqr(){
    let x = document.getElementById("result").value
    let y = Math.pow(x,2)
    document.getElementById("result").value=y
}

