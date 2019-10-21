


window.onload = function(){
  const tbl_w = 10;
  const tbl_h = 18;
  const speed = 20;
  let tbl = ['<table>'];
  for(let i = 0;i < tbl_h ; i++){
    tbl.push('<tr>');
    for(let j = 0; j < tbl_w ; j++){
      tbl.push('<td></td>');
    }
    tbl.push('</tr>');
  }
  tbl.push('</table>');
  document.getElementById('views').innerHTML = tbl.join('');

  let cells = document.getElementsByTagName('td');
  let topAfter = 0;
  let topBefore = topAfter;
  let leftAfter = 0;
  let leftBefore = 0;
  let keys = {};

  document.onkeydown = function(e){
    switch((e || event).keyCode ){
      case 37: keys.left = true; break;
      case 38: keys.up = true; break;
      case 39: keys.right = true; break;
      case 40: keys.down = true; break;
      case 243: keys.esc = true; break;
    }
  }
  let gamestart;
  let tick = 0;

  // ゲームの操作処理
    /*
    * 受け付けたキー入力で位置情報を更新。
    * その後ブロックの位置を操作。
    * move()が20回実行された場合に自然落下（下に１マス進む）
    *
    */
  let move = function(){
        tick ++;
        leftBefore = leftAfter;
        move: {
        if(keys.left && leftAfter > 0){
          leftAfter --;
        }else if(keys.right && leftAfter + 4 > 0){
          leftAfter ++;
        }else if(keys.down){
          topAfter ++;
        }else if(keys.up || keys.esc){
          gamereset();
          keys = {}
          // return;
          break move;
        }
        keys = {}

        cells[topBefore * tbl_w + (leftBefore + 0)].style.backgroundColor = '';
        cells[topBefore * tbl_w + (leftBefore + 1)].style.backgroundColor = '';
        cells[topBefore * tbl_w + (leftBefore + 2)].style.backgroundColor = '';
        cells[topBefore * tbl_w + (leftBefore + 3)].style.backgroundColor = '';
        cells[topAfter * tbl_w + (leftAfter + 0)].style.backgroundColor = 'red';
        cells[topAfter * tbl_w + (leftAfter + 1)].style.backgroundColor = 'red';
        cells[topAfter * tbl_w + (leftAfter + 2)].style.backgroundColor = 'red';
        cells[topAfter * tbl_w + (leftAfter + 3)].style.backgroundColor = 'red';
        topBefore = topAfter;

        if(tick % speed == 0 ) {
          topAfter ++ ;
        }
        write_info(tick,leftAfter,topAfter);

        if(topAfter < tbl_h){
          gamestart = setTimeout(move, 1000 / speed);
        }else{
        topAfter = 0;
        leftAfter = 0;
        tick = 0;
        }
      }
    }


// 初期表示
  cells[0].style.backgroundColor = 'red';
  cells[1].style.backgroundColor = 'red';
  cells[2].style.backgroundColor = 'red';
  cells[3].style.backgroundColor = 'red';
  let sttbtn = document.getElementById('start');
  sttbtn.addEventListener('click',move);

// リセットボタンの処理
  let reset = document.getElementById('reset');

  let gamereset = function(){
    clearTimeout(gamestart);
    for(let i = 0 ; i < tbl_h * tbl_w ; i ++){
      cells[i].style.backgroundColor = '';
    }
    topAfter = 0;
    leftAfter = 0;
    tick = 0;
    write_info(tick,leftAfter,topAfter);

    cells[0].style.backgroundColor = 'red';
    cells[1].style.backgroundColor = 'red';
    cells[2].style.backgroundColor = 'red';
    cells[3].style.backgroundColor = 'red';
  }

  reset.addEventListener('click', gamereset);

// Info記載の処理
  let write_info = function(tick,left,top){
    document.getElementById('info').innerHTML = tick + '(' + left + ',' + top + ')';
  }

}
