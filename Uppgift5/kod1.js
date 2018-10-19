/* skapa en array som innehåller saker
let todoList = ["Dammsuga","Moppa", "Damma", "köpa mjölk"];

console.log(todoList); // skriv ut listan

function todoList (){

};*/

// VG Uppgiften inlämning 3


        

// HELA KODEN

function randomDice(){
			let r = []; //skapa array r som innehåller inga index
			let i=0; // skapa variabel i som är = 0
				while(i<1000){ // så länge i<1000 ska satserna innanför while-satsen upprepas.
					
					r[i] = [Math.floor(Math.random() * 6 + 1)]; //I index "i" som ligger i array "r" ska ett slumpmässig tal mellan 1-6 lagras.
					i++; //Öka "i" med ett, så nästa varv är i = 1 iställer för 0 som den var i början. Så för varje var ökas "i" med 1
				}
			return r;
		  // i = 0, första varvet
		  //index i(0) = slumpmässigt tal, t.ex. 4
		  //i++ = i ökar med 1. Så i är 1 i andra varvet

		  //index 0 = 4


		  // i = 1, andra varvet
		  //index i(1) = slumpmässigt tal, t.ex. 3
		  //i++ = i ökar med 1. Så i är 2 i andra varvet

		  //index 1 = 3

		  // i = 2, tredje varvet
		  //index i(2) = slumpmässigt tal, t.ex. 6
		  //i++ = i ökar med 1. Så i är 3 i andra varvet

		  //index 2 = 6

		  //.... index 999 = 2

		}
		
		function print(){
			let tal = randomDice();
			let ett = 0;
			let två = 0;
			let tre = 0;
			let fyra = 0;
			let fem = 0;
			let sex = 0;
			i=0;
			while(i<tal.length){
				if(tal[i] == 1){
					ett++;
					i++;
				}
				if(tal[i] == 2){
					två++;
					i++;
				}
				if(tal[i] == 3){
					tre++;
					i++;
				}
				if(tal[i] == 4){
					fyra++;
					i++;
				}
				if(tal[i] == 5){
					fem++;
					i++;
				}
				if(tal[i] == 6){
					sex++;
					i++;
				}
			}
			

			
			console.log(ett + " " + två + " " + tre + " " + fyra + " " + fem + " " + sex);

			
		}
		print();
 

