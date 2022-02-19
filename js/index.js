
var numTwo = 2;
//alert("numTwo="+numTwo);

function Dog(color, name, age, family) {

    this.color = color;
    this.name = name;
    this.age = age;
    this.family = family;
    this.breed = function() {
        return this.color + " " + this.family;
    }

}

var myDog = new Dog("하얀색", "곰", 3, "불독");
myDog.hasOwnProperty("color"); // true
myDog.hasOwnProperty("breed"); // true
myDog.hasOwnProperty("class"); // 상속받은 프로퍼티이므로, false를 반환함.
//alert(myDog.color);

let list = [];

function familyFont(id, name, value){
    this.id = id;
    this.name = 'godicName';
    this.value = 'value';
    this.func = function() {
        return this.id + " " +this.name +" " + this.value;
    }
}

var fFont = new familyFont('1','2','3');


function dataObj(id, name, value){
    this.id = id;
    this.name = name;
    this.value = value;
    this.func = function() {
        return this.id + " " +this.name +" " + this.value;
    }
}


$(function(){
    var list = new Array(3);
    list[0] = '30140331';
    list[1] = '30150102';
    list[2] = '30110324';
    var newData = new dataObj(list[0], list[1], list[2]);

    $("#button1").click(function(){
        list[0] = fFont.id;
        list[1] = fFont.name;
        list[2] = fFont.value;
        //$("#inptVal").val("type="+typeof fFont +"+"+ list[0]+"+"+ list[1]+"+"+ list[2]);
        $("#inptVal").val(newData.func());

        //alert(fFont.id+"+"+fFont.func());
        //alert(fFont.hasOwnProperty("func")+"1");
    });

});