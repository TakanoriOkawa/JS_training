const getGitUser = () => {
  return new Promise((resolve,reject) => {
    const url = 'https://api.github.com/users/TakanoriOkawa';
    // fetch
    fetch(url).then(res => res.json())
      .then(json => {
        console.log('これは非同期処理です');
        return resolve(json);
      }).catch(error => {
        console.log("これは非同期処理 失敗メッセージです", error)
        return reject(null);
      })
  })
}

const message = 'GitユーザーIDは'
getGitUser().then(res => {
  console.log(message + JSON.stringify(res));
})
// thenはあれか、プロミスが返った時に実行するやつか。