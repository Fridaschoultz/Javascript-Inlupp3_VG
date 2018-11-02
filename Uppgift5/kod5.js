// Skapa funktionen randomDice
function randomDice(){
			let r = []; //skapa array r som innehåller tomma index
			let i=0; // skapa variabel i som är = 0
				while(i<1000){ /* Så länge i<1000 ska satserna innanför while-satsen upprepas
					            sen returnerar r tillbaks till arrayen */
					
					r[i] = [Math.floor(Math.random() * 6 + 1)]; /*I index "i" som ligger i array "r" 
					                                             ska ett slumpmässig tal mellan 1-6 lagras*/
					i++; //Öka "i" med ett, så nästa varv är i = 1 istället för 0.
				}
			 return r; // returnerar ett fält med slumpmässiga tal till variabeln r

			}

		function print(){   // skapar funktionen print(). En frekevenstabell.
			let tal = randomDice(); /* Placerar randomDice som returnerar ett fält innehållande massa slumpmässiga tal 
			                         till och med 1000*/
			let ett = 0;             // variablerna ett-sex är lika med noll
			let två = 0;
			let tre = 0;
			let fyra = 0;
			let fem = 0;
			let sex = 0;
			               // tal[0] = tar ett slumpmässigt tal. Kollar sedan i if-sats efter korresponderande if-sats nedan
			for(i=0; i<tal.length ; i++){ 
				if(tal[i] == 1){ // Om indexen 'i' i fältet tal är lika med 1 så ska satserna i denna if-sats utföras, osv nedåt..
					ett++;
					
				}
				if(tal[i] == 2){ 
					två++;
					
				}
				if(tal[i] == 3){ 
					tre++;
					
				}
				if(tal[i] == 4){ 
					fyra++;
				
				}
				if(tal[i] == 5){ 
					fem++;
					
				}
				if(tal[i] == 6){ 
					sex++;
					
				}
			}
			

			// Visar respektive variabel och dess resultat i konsolen
			console.log("Förekomsten av ettor: " + ett + "\nFörekomsten av tvåor: " + två + "\nFörekomsten av treor: " + 
			tre + "\nFörekomsten av fyror: " + fyra + "\nFörekomsten av femor: " + fem + "\nFörekomsten av sexor: " + sex);

			
		}
		print(); // anropa funktionen som utför frekvenstabellen
 

