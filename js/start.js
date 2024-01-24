$(function() {
	setTimeout(function(){
		$('.start p').fadeIn(1600);
	},500); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
		$('.start').fadeOut(1000);
	},2500); //2.5秒後にロゴ含め真っ白背景をフェードアウト！
});