
//La liste d'image 12  qui fais 2*6

var  a=[1,2,3,4,5,6,1,2,3,4,5,6,]
// debut operation melange
.map(p=>[p,Math.random()])
.sort((a,b)=>a[1]-b[1])
.map(p=>p[0])
//fin operation melange  15M36


console.log(a)
var pics = document.getElementsByTagName('img');
var eltScore =document.getElementById("score");
var score =0;
let step =1;
let  p1,p2;
var timer =null;




for(let i=0; i<pics.length; i++){
    pics[i].src2="/picsChien/chien" +a[i] + ".jpg";
}
/************************************************* */



 /************************************************ */
document.addEventListener("click",function(e){
    switch(step){
        case 1: //premier click  le IMG EN MAJUSCULE
            if(e.target.tagName=="IMG"){
               e.target.src=e.target.src2;
               p1 = e.target;
               step =2;
        }
        break;
        case 2: //deuxieme click  le IMG EN MAJUSCULE
            if(e.target.tagName=="IMG"){
               e.target.src=e.target.src2;
               p2 = e.target;
               step =3;
        }
        timer =setTimeout(check,1700);
        break;
        case 3: //Click suivant n'importe où :comparaison=>action
        clearTimeout(timer);
        check();
    }
});

function check(){
if(p1.src2==p2.src2){
    p1.replaceWith(document.createElement('span'))
    p2.replaceWith(document.createElement('span'))
    score +=50;
}else{
        
p2.src= p1.src="picsChien/chien0.jpg";
score =Math.max(0,score-30);
}
step =1;
eltScore.textContent=score;
//Fin du jeux
if(document.getElementsByTagName('img').length==0){
    eltScore.textContent +="Gagné !"
}
}



/*********************************************/ 

//Le jeux
//1-Premier  click :retourner l'image => memoriser l'image retournée
//2-Deuxieme click:retourner l'image => memoriser l'image retournée
//3-Comparer les deux images
//4-Si identiques => supprimer
//5-Sinon =>retourner
//6-Un timer en plus 
//7-Un message de victoire
//8-system de score








/*
var pic =document.getElementById("test");
pic.addEventListener('click',function(e){
    pic.src="pics/spr1.png"
})
*/