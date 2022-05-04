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
const a1_1 = Object.assign({}, userA, userB);
console.log(a1_1);

// 方法2
const a1_2 = {...userA,...userB}
console.log(a1_2);

