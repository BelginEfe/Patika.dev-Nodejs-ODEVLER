const { PI } = Math;

module.exports.circleArea = (r) => {
    const areaCircle = PI*r**2;
    console.log(areaCircle);
}

module.exports.circleCircumference = (r) => {
    const circlePerimeter = 2*PI*r;
    console.log(circlePerimeter);
}