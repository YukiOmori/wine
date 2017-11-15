

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
let userId = prompt('あなたのIDを入力してください');

// idの重複があれば、表示
let roomId = prompt('チャットルームIDを入力してください');
// set buttonが押されたときの処理

function returnDigitalTime () {
  let d = new Date();
  let h = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
  let m = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
  let s = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();
  return h + ':' + m + ':' + s;
}

$('#send').on('click', () => {
  let date = returnDigitalTime();

  newPostRef.ref(`${roomId}/post/${date}`).set({
    userName: userId,
    text: $('#text').val(),
    date: date
  });

  $('#text').val('');
});

$('#text').on('keydown', (e) => {
  if (e.keyCode === 13) {
    
  }
});

newPostRef.ref(`${roomId}/post`).on('child_added', function(data) {
  let content = data.val();
  let addedStr = '<dl id="' + content.date + '"><dt>' + content.userName + '</dt><dd>' + content.text + '</dd><dd>' + content.date + '</dd><dl>';
  $('#history').append(addedStr);
  $('#history').animate({scrollTop: $('#history')[0].scrollHeight}, 'fast');
});