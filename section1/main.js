// 'use strict';

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
  console.log("Q6_1実行") // 実行される
}

//2
// if(x === undefined){
//   console.log("Q6_2実行") // 実行されない
// }

// 1のみが実行される
// typeofは変数がない場合エラーを返さない。
// そもそもこのような値チェックは避けるべきである。
// グローバルの値チェックはfor...in？




// Q7 オブジェクトのkeyとvalueを自身のプロパティのみ全て出力しなさい
console.log("Q7🎉");

const q7 = {
  key: 'aa',
  key2: 'bb'
}

console.log('key' in q7); // 単純なinだけを使えば、プロパティの有無はわかる
console.log('toString' in q7); // オブジェクトのデフォルトのメソッドも含まれる

// 方法1 for...inを使う方法

// ただこの方法はプロトタイプ拡張をした場合、オブジェクトリテラル以外の値もループしてしまう。
// その為、hasOwnPropertyを使う
for(let key in q7) {
  if(q7.hasOwnProperty(key)){
    console.log(key, q7[key]); // keyと値
  }
}

// ただこのパターンだと「toString」などはキーとして使えない。

// 方法2
// Object.keysメソッドでオブジェクトのキーだけを取り出した配列を作成し、
// それをループさせる
Object.keys(q7).forEach(key => console.log(key,q7[key]));



// Q8 配列の中の全ての要素を結合し、1つの文字列として出力
console.log("Q8🎉");

const q8 = ['a', 'b', 'c'];

// 方法１ joinメソッド
console.log(q8.join('')); // 空文字にすることで配列の文字列をそのまま連結させることもできる

// 方法2
let a8_2 = "";
q8.forEach(val => a8_2 += val);
console.log(a8_2);

// Q9 オブジェクトの特定のキーを削除する
console.log("Q9🎉");

const q9 = {
  x: 10,
  y: 20,
}

delete q9.x; 
console.log(q9);


// Q10 id番号が若い順にソートしたオブジェクトを出力
console.log("Q10🎉");

const q10 = [
  {id:2,name:'kenji'},
  {id:1,name:'morita'},
  {id:4,name:'uro'},
  {id:3,name:'ken'}
];

// sortメソッドは破壊的なメソッドである。オブジェクト本体が書き変わる
q10.sort(function(a,b){
  return (a.id < b.id) ? -1 : 1;
})

console.log(q10);

// Q11 aは5、bは7を持ち、aに1を代入してconsole出力

// 分割代入
// 分割代入構文は、配列から値を取り出して、あるいはオブジェクトからプロパティを取り出して、
// 別個の変数に代入することを可能にする
console.log("Q11🎉");

// 配列を使った分割代入は以下
// [変数, 変数, ・・・] = [値, 値, ・・・]
// 変数はあらかじめ宣言しておくか、直接let,constを指定する
const [q11_a = 5,  q11_b = 7] = [1];
console.log(q11_a, q11_b);




// Q12 next()で返り値が1増える関数
console.log("Q12🎉");

// 増えていく返り値はグローバルに定義すると、予期せぬバグになるので
// 関数内に定義する クロージャー
const useCount = val => {
  let count = 0;

  return function() {
    count++;
    return val + count;
  }
}
const next = useCount(8);
console.log(next());
console.log(next());


// Q13 q13(1,2,3)を実行したら引数が全て配列で返る関数
console.log("Q13🎉");

const q13 = (...val) => {
  return val
}
// スプレッド構文
console.log(q13(1,2,3));





// Q15 配列の0〜2番目の要素をそれぞれ red, green, yellowに置き換える
console.log("Q15🎉");

const q15 = ['a1','a2','a3','a4','a5']

const tekitou = ['red', 'green', 'yellow'];
// spliceで置き換え
// 第一引数・・・配列を変更する先頭の位置
// 第二引数・・・取り除く個数
// スプレッド構文で渡せる
// 返却されるのは取り除かれた値の配列

const a15 = q15.splice(0,3, ...tekitou);
console.log(q15); // 取り除き後
console.log(a15); // 返り値