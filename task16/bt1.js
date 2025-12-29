function delayLog(message, ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, ms);
  });
}

delayLog("Hello", 1000).then(() => {
  console.log("Done");
});
