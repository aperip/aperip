const a = 5;
const b = 2;
const myName = "nico";

console.log(a+b);

const mon = "mon";
const tue = "tue";
const wed = "wed";
const tru = "tru";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const week = [mon, tue, wed, tru, fri, sat, sun]
const nonsense = [ 1, 2, '', '3', 'at', false, undefined];
console.log(week, nonsense);

week.push("holiday");
console.log(week[0]);

const player = {
    name : "nico",
    points : 10,
    fat : true,
    age : 27
};
console.log(player.name);
const calculate = {
    minus : function (a, b) {
        let aa = prompt('입력하세요');
        alert(isNaN(aa));
    },
    plus : function( a, b) {
        alert('1+1');
    }
}


var class_name = document.getElementsByClassName('none');

alert(class_name[0]+"+"+class_name[1] );
if( $("#text_val").getElementsByClassName == "text"){
    calculate.minus(1,2);
}