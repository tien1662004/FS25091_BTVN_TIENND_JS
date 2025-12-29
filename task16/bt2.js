
function divideAsync(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject("Cannot divide by zero");
    } else {
      resolve(a / b);
    }  
  });
  
}
async function run() {
  try {
    const result = await divideAsync(10, 2);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
run();
