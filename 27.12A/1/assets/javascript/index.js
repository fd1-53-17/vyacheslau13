function min(x, y) {
    console.log(arguments);
    if (x < y) {
        return x;
    }
    else {
        return y;

    }
    
}


function max(x, y) {
    console.log(arguments);
    if (x > y) {
        return x;
    }
    else {
        return y;
    }
}

min(1,8, 9)
max(5, 12, 7, 1)