// Q1 オブジェクト同士のマージ
const userA = {
  id: 1,
  name: 'tanaka',
  age:20,
  type: '1'
}

const userB = {
  id:2,
  name:'ishida',
  age:30,
}

// 方法1
const user = Object.assign({}, userA, userB);
console.log(user);

// 方法2
const margeUser = {...userA,...userB}
console.log(margeUser);

