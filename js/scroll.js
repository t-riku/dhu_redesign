//#fixedBoxを途中から上部に固定する
jQuery(function ($) {
  var nav = $("#fixedBox"), //id="fixedBox"を定義
    offset = nav.offset(); //fixedBoxの位置を取得
  $(window).scroll(function () {
    if ($(window).scrollTop() > 800) {
      //fixedBoxが上部にきたとき
      nav.addClass("fixed"); //class="fixed"を追加する
    } else {
      //そうじゃないとき
      nav.removeClass("fixed"); //class="fixed"を解除する
    }
  });
});
//下まで行くと消える
$(window).scroll(function () {
  var check = window.pageYOffset; //現在のスクロール位置を取得
  var docHeight = $(document).height(); //ページ全体の高さを取得
  var dispHeight = $(window).height(); //表示されている高さを取得
  if (check > docHeight - dispHeight - 60) {
    //消えるときのフッターからの距離を数字で調整※サイトに合わせて変更
    $("#fixedBox.fixed").slideUp(700); //数字が大きいほどゆっくり消える
  } else {
    $("#fixedBox.fixed").slideDown(700); //数字が大きいほどゆっくり出る
  }
});
