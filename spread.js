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
const result = sum(...array1);

console.log("spread1📗", result)

