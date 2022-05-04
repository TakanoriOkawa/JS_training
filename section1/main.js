'use strict';

// Q1 オブジェクト同士のマージ
console.log("Q1🎉");

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



// Q2 特定の値のみで新しい配列を作る。
console.log("Q2🎉");
const q2 = ['aa','bb','cc','dd','ee','ff','gg'];

// 方法１ filterを使う
const a2_1 = q2.filter((val) => {
    if(val === 'ff' || val === 'ee') return val;
})
console.log(a2_1);


// Q3 配列の中身を個別にコンソール出力
console.log("Q3🎉");
const q3 = ['aa','bb','cc','dd'];

