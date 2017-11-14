// fire baseとの接続?
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
  $('#submit').on('click', () => {
    let d = new Date();
    let date = d.getHours() + ' : ' + d.getMinutes();

    newPostRef.ref(`user/${userId}/${date}`).set({
      userName: userId,
      text: $('#text').val(),
      date: date
    });

    $('#text').val('');
  });
});
  // userIDの取得
  // submit が押されたとき
    // fire baseにdate/userName/textを格納
    // テキストエリアをクリア
    // prepend childを取得