var obj = new Object();
var arr = new Array();
var date =  new Date();

function Dog(color, name, age){
    this.color = color;
    this.name = name;
    this.age = age;

}

var myDog = new Dog('white','pyongsan', '21');
myDog.owner = 'yongchan';
Dog.prototype.owner2 = 'hyae_gi';
myDog.breed = function(){
    return this.color +"/"+ this.owner2;
}

$(function(){
    
    let table = new DataTable('#example', {
        // options
    });
    
    $("#button2").click(function(){
        $("#object").val(myDog.breed());
        //document.write(Object.getOwnPropertyNames(myDog)); // color, name, age
        $("#object_p").text(Object.getOwnPropertyNames(myDog));

        //$('#myTable').DataTable();
    });

});

$(document).ready( function () {
    $('#myTable').DataTable();
} );
