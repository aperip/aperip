
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
        $("#object_func").val(newData.func());

    });

});