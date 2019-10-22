// ーーーーーーー定義ーーーーーーー
// 要素の取得と定義
const clock = document.getElementById('clock');
const timer = document.getElementById('timer');
const timerBtn = document.getElementById('start_stop');
const logBox = document.getElementById('log_box');
const resetBtn = document.getElementById('log_reset')

// 現在時刻関係
let now;
let year;
let monty;
let date;
let day;
let hour;
let minute;
let second;
let currentTime;

// タイマー関係
let timerUsageCount = 1;
let setTimerInterval;
let countHour;
let countMinute;
let countSecond;
let countTime = '00:00:00';

// ーーーーーーー現在時刻表示機能　関数ーーーーーーー
//曜日の変換
const currentDay = function(dayValue){
  switch (dayValue) {
    case 0: dayValue = '日';break;
    case 1: dayValue = '月';break;
    case 2: dayValue = '火';break;
    case 3: dayValue = '水';break;
    case 4: dayValue = '木';break;
    case 5: dayValue = '金';break;
    case 6: dayValue = '土';break;
  }
  return dayValue;
}

//現在時刻の取得
const getCurrentTime = function(){
  now = new Date();
  year = now.getYear() + 1900;
  month =  addZero((now.getMonth() + 1));
  date = addZero(now.getDate());
  day = currentDay(now.getDay());
  hour = addZero(now.getHours());
  minute = addZero(now.getMinutes());
  second = addZero(now.getSeconds());
  currentTime = year + '/' + month + '/' + date + '(' + day + ') ' + hour + ':' + minute + ':' + second;
  return currentTime;
}

const writeCurrentTime = function(){
  clock.innerHTML = getCurrentTime();
}

// ーーーーーーータイマー機能　関数ーーーーーーー
//桁上がりの計算
// const carryUpDigit = function(digit){
//   let smallDigit ;
//   let largeDigit ;
//   if (digit > 60){
//     smallDigit = 0;
//     largeDigit = 1;
//   }else{
//     smallDigit =
//   }
// }
//
// //時間の加算
// const addTimer = function(digit){
//
// }

// タイマー開始
const startTimer = function(){
  countHour = 0;
  countMinute = 0;
  countSecond = 0;
  setTimerInterval = setInterval(function(){
    if(countSecond >= 59 && countMinute >= 59){
      countSecond = 0;
      countMinute = 0;
      countHour ++ ;
    }else if(countSecond >= 59){
      countSecond = 0 ;
      countMinute ++ ;
    }else{
      countSecond ++;
    }
    countTime = addZero(countHour ) + ':' + addZero(countMinute) + ':' + addZero(countSecond);
    timer.innerHTML = countTime;
  }, 1000);
  timerBtn.innerHTML = 'STOP';
  timerBtn.classList.remove('btn-info');
  timerBtn.classList.add('btn-warning');
}

//タイマー停止
const stopTimer = function(){
  clearInterval(setTimerInterval);
  //ログ出力
  if(timerUsageCount === 1){
    logBox.innerHTML = '';
  }
  logBox.insertAdjacentHTML('afterbegin','<p>' + timerUsageCount + '回目の測定：' + countTime + '秒</p>');
  timerUsageCount ++;
  //タイマーのリセット
  countTime = '00:00:00';
  timer.innerHTML = countTime;
  timerBtn.innerHTML = 'START';
  timerBtn.classList.remove('btn-warning');
  timerBtn.classList.add('btn-info');
}

const addZero = function(value){
  if(value < 10 ){
    value = '0' + value;
  }
  return value;
}

timerBtn.addEventListener('click',function(){
  if(this.innerHTML === 'START' ){
    startTimer();
  }else{
    stopTimer();
  }
});

resetBtn.addEventListener('click', function(){
  if(timerBtn.innerHTML === 'STOP'){
    stopTimer();
  }
  logBox.innerHTML = '<p>タイマーがリセットされました。</p>';
  // カウントの初期化
  timerUsageCount = 1;
});


// 初期表示
writeCurrentTime();
setInterval(writeCurrentTime,100);
