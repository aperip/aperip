
function handleOnClick()  {
    var greeting = prompt('관리자에게 보낼 메세지를 입력해주세요', '여기에 입력하세요');
    $("#prompt_cb").val(greeting);
}

var arr = [10, "문자열", true]; // 배열
var bool = false;               // 불리언
function func(n) { this.number = n ;return this.number; }   // 함수
function func1(){
    return 0;
}
function fnString(){
    var r1 = arr.toString();
    var r2 = bool.toString();
    var r3 = func.toString();
    var r4 = func1.toString();

    return r1 +"+"+ r2 +"+"+ r3 +"+"+ r4;
}

function fnValueOf(){
    var funcExec = new func(5);
    func.prototype.valueOf = function() {
        return this.number;
    }
}

function startTimeout() {
    return setTimeout(startTimeoutAfter, 2000);
}
function startTimeoutAfter() {
    $("#prompt_cb").val("타임아웃")
}

$(function(){
    $("#button3").click(function(){
        console.log("prompt");
        handleOnClick();
        console.log(fnValueOf());  //return값이 안나옴. //이건 미제... valueOf func 맞는데 왜 undefine 일까..

        console.log(func());
        console.log(fnString());

        
    });
    startTimeout()



});