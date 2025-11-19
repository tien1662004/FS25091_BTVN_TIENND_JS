function calcBMI(weight, height){
    let bmi = (weight / (height * height)).toFixed(2);

    let body = "";
    if(bmi < 18.5) body = "thiếu cân";
    else if(bmi >= 18.5 && bmi < 23) body = "bình thường";
    else if(bmi >= 23 && bmi < 25) body = "thừa cân";
    else body = "béo phì";
    return `BMI = ${bmi}, ${body}`;    
}
calcBMI(60, 1.7);

