function summary() {
  const objSumary = {
    sum: 0,
    mean: null,
    media: null,
  };
  for (let i = 0; i < arguments.length; i++) {
    let number = +arguments[i];
    if (!Number.isNaN(number)) {
      // sum
      objSumary.sum += number;
      // mean
      objSumary.mean = objSumary.sum / arguments.length;
      //
    }
  }
  console.log(objSumary.sum);
  console.log(objSumary.mean);
}

summary(5, "2", 3);
