function redarr(arr) {
let sorted = arr.sort();
let singles  = [... new Set(sorted)];
 let count = [];
  for(let i = 0; i< singles.length; i++){
    count.push(i);
  };
 return Object.assign(...count.map((k,i) => ({ [k]: singles[i] })));
}