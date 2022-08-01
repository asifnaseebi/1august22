function myname(){
    let zakatCamel=document.getElementById('camel').value;
    let result;
    if (zakatCamel>150){
    result="Sorry, it still needs to be worked on";

    }
     else if (zakatCamel>=150){
       result="3Hiqqay";
    }else if (zakatCamel>=145){
         result="2Hiqqay and 1 Bent e makhaz";
    }else if(zakatCamel>=140){
         result="2Hiqqay+4 goat ";
    }else if(zakatCamel>=135){
         result="2Hiqqay and 3 goat ";
    }else if(zakatCamel>=130){
         result="2Hiqqay and 2 goat ";
    }else if(zakatCamel>=125){
         result="2Hiqqay and 1 goat ";
    }else if(zakatCamel>=120){
         result="2Hiqqay ";
    }else if(zakatCamel>=91){
         result="2Hiqqay ";   
    }else if(zakatCamel>=76){
         result="2 Bint e laboon ";
    }else if(zakatCamel>=61)
    {
         result="1 Jizaa";
    }else if (zakatCamel>=46)
    {
         result="1 Hiqqay";
    }else if (zakatCamel>=36){
         result="1 Bint e laboon";
    }else if(zakatCamel>=25){
         result="1 Bint e makhaz";
    }else if (zakatCamel>=20){
         result="4 goat or sheep ";
    } 
    else if(zakatCamel>=15){
         result="3 goat or sheep";
    }else if(zakatCamel>=10){
         result="2 goat or sheep";
    }else if (zakatCamel>=4){
         result="1 goat or sheep";
    }else{
         result="zakat is not";
    }
      document.getElementById('head').innerText=result;
}