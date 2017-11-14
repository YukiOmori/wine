// fire baseとの接続?
console.log('読み込み開始');
let config = {
    apiKey: "AIzaSyAiipaC7uoKV9LXiJ1XXHwAkJHv89BQbP0",
    authDomain: "chatapp-783ff.firebaseapp.com",
    databaseURL: "https://chatapp-783ff.firebaseio.com",
    projectId: "chatapp-783ff",
    storageBucket: "",
    messagingSenderId: "982383963911"
  };
firebase.initializeApp(config);

let newPostRef = firebase.database();
// set buttonが押されたときの処理

$('#set').on('click', () => {
  let userId = $('#userName').val();
  $('#send').on('click', () => {
    let d = new Date();
    let date = d.getHours() + ' : ' + d.getMinutes();

    newPostRef.ref(`user/${userId}/${date}`).set({
      userName: userId,
      text: $('#text').val(),
      date: date
    });

    $('#text').val('');

    newPostRef.ref(`user/${userId}`).on('child_added', (data) => {
      let content = data.val();
      let addedStr = '<dl id="' + content.date + '"><dt>' + content.userName + '</dt><dd>' + content.text + '</dd><dd>' + content.date + '</dd><dl>';
      $('#history').prepend(addedStr);
    });
  });
});
  // userIDの取得
  // submit が押されたとき
    // fire baseにdate/userName/textを格納
    // テキストエリアをクリア
    // prepend childを取得