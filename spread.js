// スプレッド構文復習
// https://zenn.dev/web_tips/articles/69a63bc8a91459

// 1 関数の引数にスプレッド構文を使う
// 一番簡単な例

const array1 = [1,2,3];

// 引数の数だけ配列の値を取得する
function sum(x,y,z){
  return x + y + z;
}

// 配列の中身を個別の値に展開して引数に渡せる
const result1 = sum(...array1);

console.log("spread1📗", result1)

// 2 配列にスプレッド構文を使うケース
// 新しい配列を作る場合、push,splice,concatなどを使う必要があるが、
// スプレッド構文を使えば、より簡潔に記述できる


// 既存の配列の一部を使って新しい配列を作る
const array2 = ['apple','orange'];
const newArray = ['ぶどう','さくらんぼ',...array2,'いちご'];

console.log(newArray);


// 配列を複製する 異なる参照先になる複製ができる

const array3 = ['サッカー', '野球', 'スキー'];

const newArray2 = [...array3];
newArray2.push('テニス');

console.log(newArray2, array3);

const newArray3 = array3;

console.log(newArray2 === array3); // false
console.log(newArray3 === array3); // true


// 配列の結合 concatを使わない
let array4 = ['日本','アメリカ','中国'];
const array5 = ['イギリス','ドイツ','オーストラリア'];

// 配列の結合
array4 = [...array4, ...array5];
console.log(array4);
