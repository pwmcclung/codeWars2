function mean(lst){
  let nums ='0123456789'
  let numArr = [];
  let letArr = [];
  for (let i = 0; i < lst.length; i++){
    if (nums.includes(lst[i])){
      numArr.push(Number(lst[i]));
    }else{
      letArr.push(lst[i]);
    }
  }
  let str = letArr.join('');
  let mean = Number(((numArr.reduce((a,b) => a + b, 0)) / numArr.length).toFixed(1));
  return [mean, str];
}