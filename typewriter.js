"use strict";
// VARIABLES AND DOM SETUP
let letter, lCode,speed,i,nextLetter;
const container = document.querySelector(".typewritten")
const text = container.innerHTML;

container.innerHTML = "";
let typeKey1 = document.getElementById('typekey1');
let typeKey2 = document.getElementById('typekey2');
let typeSpace = document.getElementById('typespace');
let typeLast = document.getElementById('typelast');
let typeReturn = document.getElementById('typereturn');
i = 0;

function typeLetter() {
    i++

    if (i < text.length){
        // SLICE INTO ONE LETTER
        letter = text.substring(i-1, i);
        nextLetter = text.substring(i, i+1); 

        // DECIDE IF ITS LAST
        if (nextLetter == "<"){
            console.log('last');
            typeLast.play();
            typeReturn.play();
            container.innerHTML = container.innerHTML + letter;
            container.innerHTML = container.innerHTML + "</br>"
            i = i + 4;
            
            setTimeout(typeLetter, 1400);
           
        } else{
            lCode = letter.charCodeAt(0);

        if (lCode == 32){
            typeSpace.play();
        }    
        if (lCode > 113){
            typeKey1.play();
        }    
        if (lCode < 113 && lCode !== 32){
            typeKey2.play();
        }    
        container.innerHTML = container.innerHTML + letter;
        setTimeout(typeLetter, 300);
    }
       
    }
    };
    document.querySelector(".trigger").addEventListener("click", typeLetter);
    
