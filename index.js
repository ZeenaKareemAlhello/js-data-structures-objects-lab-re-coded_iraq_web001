<<<<<<< HEAD
let driver={};
function updateDriverWithKeyAndValue(driverObj ,key ,value)
{  let driverNew={...driverObj} 
driverNew[key]=value; 
return driverNew;}
function destructivelyUpdateDriverWithKeyAndValue(driverObj ,key ,value)
{    driverObj[key]=value;
return driverObj;}
function deleteFromDriverByKey(driverObj,key){ 
  let driverNew = Object.assign({},driverObj);
  delete driverNew[key];
  return driverNew;}
  function destructivelyDeleteFromDriverByKey(driverObj,key){  delete driverObj[key]; 
  return driverObj;}
=======
let driver={};function updateDriverWithKeyAndValue(driverObj ,key ,value){  let driverNew={...driverObj}  driverNew[key]=value;  return driverNew;}
function destructivelyUpdateDriverWithKeyAndValue(driverObj ,key ,value){    driverObj[key]=value;  return driverObj;}function deleteFromDriverByKey(driverObj,key){  let driverNew = Object.assign({},driverObj);  delete driverNew[key];  return driverNew;}function destructivelyDeleteFromDriverByKey(driverObj,key){  delete driverObj[key];  return driverObj;}
>>>>>>> 48d409883cc4fd90a355a0474b94cf36d71de06d
