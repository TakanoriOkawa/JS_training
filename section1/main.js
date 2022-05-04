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

q3.forEach(val => console.log(val));

// Q4 配列の中身に、index値を足した文字列を表示 'a0'や'b1'など
console.log("Q4🎉");
const q4 = ['aa','bb','cc','dd'];

q4.forEach((val,index) => console.log(index + val));


// Q5 任意の配列が配列かを評価する true
console.log("Q5🎉");

const q5 = ['aa','bb','cc','dd','ee'];
const q5_2 = {id:1,name:'tanaka'};

// 方法1
console.log(Array.isArray(q5));

// 配列かどうかを判定する関数
const isArray = (param) => console.log(Array.isArray(param));

isArray(q5); // true
isArray(q5_2); // false

// typeofだと配列もオブジェクトも「Object」として返るのでisArrayを使う


// Q6 変数xが定義されていない場合、1と2が実行されるかどうか
console.log("Q6🎉");

//1
if (typeof x === 'undefined') {
  console.log("Q6_1実行")
}

//2
if(x === undefined){
  console.log("Q6_2実行")
}

// 1のみが実行される
// typeofは変数がない場合エラーを返さない。
// そもそもこのような値チェックは避けるべきである。
// グローバルの値チェックはfor...in？



