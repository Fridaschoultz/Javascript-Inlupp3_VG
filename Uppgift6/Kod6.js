
    function fakultet() { // skapat en fuktion som innehåller en lokal variabel tal
        let tal = prompt("Skriv in talet"); // skriver in talet 
        if(tal<=1000){ // if villkor och så länge detta stämmer så utförs for-loopen
            for(x=1, fak=1; x<=tal; x++){ /* lokal variabel x och fak, så länge x<=tal så upprepas for-satsen
                                            och x ökar med ett varje gång*/
                fak *= x;             /* beräknar 1*1 och sedan ökar x med ett så att det i nästa
                                       varv är 2 * 1, 3*1 osv, skulle kunna stå fak = x *fak */
            }
            return document.write(tal + "! = " + fak); // när for-satsen över stämmer så returneras ett svar till anvävndaren
        }
        else{
        document.write("Talet får inte vara större än 1000!"); // annars så visas ett felmeddelande
     }
        
    }

    fakultet(); // anropar funktionen fakultet   


    


