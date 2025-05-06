function createFile() {
  alert("Created File");
  var promiseData = fetch("http://localhost:4020/create");
  promiseData
    .then((successdata) => {
      return (data = successdata.json());
    })
    .then((data) => {
      console.log(data);
    })
    .catch((errordata) => {});
}
function removeFile() {
  var promiseData = fetch("http://localhost:4020/remove");
  promiseData
    .then((successdata) => {
      return (data = successdata.json());
    })
    .then((data) => {
      console.log(data);
    })
    .catch((errordata) => {});
  alert("Removed File");
}
