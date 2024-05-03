
//var b=46;
//const sum=a+b;
//paragrapher color change korbo
//khali jaigaii click korle akta img show korbe
//atia parini
//puro container ke hidden kora
//akta buttone cclick korte arekta buttone jabe arekta buttone click korle arekta buttone jabe


//************ */
//functioner bitor ja icce tai hote pare

//largest number ber korar niom


function btnone(){
var a=10;
var b=11;
var c=12;
var d=13;
var maxnam=(a,b,c,d);

const getresult=Math.max(maxnam);

document.getElementById('first-id').innerHTML=getresult;

}
//lenght
function btntwo(){
    var name='momota  ';
   const getlength=(name.length);
    document.getElementById('second-id').innerHTML=getlength;
}


//the currect uppercase
function btnthree(){
    let countryname='bangladesh';
    let getuppercase=countryname.toUpperCase();
    document.getElementById('third-id').innerHTML=getuppercase;
}

//slice----
function btntfour(){
    let slicce='name';
    letgetslice=slicce.slice(0,1);
    document.getElementById('tfourth-id').innerHTML=letgetslice;
}
//queston mark

function btntfive(){
    let questionmark='?';
    document.getElementById('five-id').innerHTML=questionmark;
}