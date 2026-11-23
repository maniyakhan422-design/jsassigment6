let balance = 10000;
let withdrawAmount = 7000;

let withdrawPromise = new Promise((resolve, reject) => {
  if (balance >= withdrawAmount) {
    resolve("withdrawal successful!");
  } else {
    reject("Withdrawal failed! Insufficient balance.");
  }
});

withdrawPromise
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  });



let marks = 75;

let resultPromise = new Promise((resolve, reject) => {
  if (marks > 100 || marks < 0) {
    reject("Invalid Marks! Marks should be between 0 and 100.");
  } else if (marks >= 50) {
    resolve("Pass" + " Marks: " + marks);
  } else {
    reject("Fail" + " Marks: " + marks);
  }
});

resultPromise
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  });


  let deliveryPromise = new Promise((resolve, reject) => {
  console.log("Delivery in progress...");

  setTimeout(() => {
    let deliverySuccess = true; 

    if (deliverySuccess) {
      resolve("Product Delivered Successfully");
    } else {
      reject("Delivery Failed");
    }
  }, 3000); 
});

deliveryPromise
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  });


  let myPromise = new Promise((resolve, reject) => {
  resolve(10);
});

myPromise
  .then((num) => {
    let result = num + 20; 
    console.log("Add: " + result);
    return result; 
  })
  .then((num) => {
    let result = num * 2; 
    console.log("Multiply: " + result);
    return result; 
  })
  .then((num) => {
    let result = num - 5;
    console.log("Subtract: " + result);
    return result; 
  })
  .then((finalResult) => {
    console.log("Final Result: " + finalResult);
  })
  .catch((err) => {
    console.log("Error: " + err);
  });