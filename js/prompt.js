
function handleOnClick()  {
    var greeting = prompt('관리자에게 보낼 메세지를 입력해주세요', '여기에 입력하세요');
    $("#prompt_cb").val(greeting);
}

$(function(){
    $("#button3").click(function(){
        console.log("prompt");
        handleOnClick();
    });

});