function Add(a,b){
    let sum=a+b;
    return sum;
}

function Sub(a,b){
    let sub=a-b;
    return sub;
}

function Mul(a,b){
    let mul=a*b;
    return mul;
}

function Div(a,b){
    let div=a/b;
    div.toFixed(2);
    return div;
}

export {Add, Sub, Mul, Div};