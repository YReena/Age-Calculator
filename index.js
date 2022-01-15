	 function resetvalue(){
	 	document.getElementById('age').value="";
	 	document.getElementById('display-age').innerHTML= "";
	 }

	function ageCalculator(){
	let date = new Date(document.getElementById('age').value);
	

	let birthDate , birthMonth , birthYear;
	birthDate = date.getDate();
	birthMonth = date.getMonth()+1;
	birthYear = date.getFullYear();
	
	let today = new Date();
	let currDate , currMonth , currYear;

	currDate = today.getDate();
	currMonth = today.getMonth()+1;
	currYear  = today.getFullYear();

	var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; 

	if(birthDate>currDate){
		currDate = currDate + month[currMonth-1];
		currMonth = currMonth-1;
	}
	if(birthMonth>currMonth){
		currMonth = currMonth+12;
		currYear = currYear-1;
	}
	var d = currDate-birthDate;
	var m = currMonth-birthMonth;
	var y= currYear - birthYear;

	if(y<0){
		document.getElementById('display-age').innerHTML= " Not Born yet";
	}
	else if(isNaN(y)){
		document.getElementById('display-age').innerText= " **Choose a date please!";
	}
	else{
	document.getElementById('display-age').innerHTML= "Your Age is : "+d+"days " + m+"months "+y+"years ";
}
    
}