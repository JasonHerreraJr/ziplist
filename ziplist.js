let a = ['a', 'b', 'c'];
let b = [1, 2, 3];

function ziplist(first, second){
  const returnList = [];
  for(let i = 0; i < first.length; i++){
    returnList.push(first[i], second[i]);
  }
  return returnList;
}
console.log(ziplist(a,b))

function zipListTheSimpleWay(first, second){
  return _.zip(first, second);
}
console.log(zipListTheSimpleWay(a,b));

