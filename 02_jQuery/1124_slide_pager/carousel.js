$(document).ready(function(){
    // 변수선언
    // var i = $(".btn li.current").index();
    // 현재 current 붙어 있는 값 결국 변수값은 0
    var i = 0;
    // 가로값을 구하기 위한 변수 선언
    //carousel의 width은 1000이니까 변수값은 1000
    var wid = $(".carousel").width();

    $(".btn li").click(function(){
        // 위치값구하기
        i = $(this).index();
        // 버튼 초기화
        $(".btn li").removeClass("current");
        // 위치값에 담긴 값에 활성화시키기
        $(".btn li").eq(i).addClass("current");
        // $(this).addClass("current"); 같은의미

        // panel이 margin-left로 이동하도록 -값을 넣어줌 
        $(".panel").stop().animate({"margin-left": -wid * i},500);

    });    
});