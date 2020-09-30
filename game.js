	'use strict';

	let score_cazino=1;
	let score_gamer=1;

let gamerName = prompt("Please enter your name");
if (gamerName.length<2){
	alert("Sorry, but you can't continue because of a misspelled name․");
	close();
}

document.getElementById("gamerName").innerHTML = gamerName;


function throw_dice(){

	let zar1=document.getElementById("zar1");
	let zar2=document.getElementById("zar2");

	let z1=Math.floor(Math.random()*6)+1;
	let z2=Math.floor(Math.random()*6)+1;
	zar1.innerHTML=z1;
	zar2.innerHTML=z2;
	var sum=z1+z2;
	
	let score1=document.getElementById("score1");
	let score2=document.getElementById("score2");


console.log(gamerName);	

	switch(sum){
		case 5:
			p.innerHTML="Win <b>cazino</b>";
			score1.innerHTML= "Score cazino  " + score_cazino++;
			break;
		case 7:
			p.innerHTML="Win <b>cazino</b>";
			score1.innerHTML= "Score cazino  " + score_cazino++;
			break;
		case 9:
			p.innerHTMl="Win <b>cazino</b>";
			score1.innerHTML= "Score cazino  " + score_cazino++;
			break;	
		case 8:
			p.innerHTML="Win "+ gamerName;
			score2.innerHTML="Score "+ gamerName +" "+ score_gamer++;
			break;
		case 11:
			p.innerHTML="Win "+ gamerName;
			score2.innerHTML="Score "+ gamerName +" "+ score_gamer++;
			break;
		default:
			throw_dice();
			
	} 
	
}
