const PI = Math.PI;
const argument = process.argv.slice(2);

// This function calculates circle area. pı*r*r

function circleArea (r) {
    let area = PI*r*r;
    console.log(area);
}

circleArea(argument[0]*1)