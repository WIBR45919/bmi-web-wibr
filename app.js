const submit = document.querySelector('form');
function verification(){

  const img = document.querySelector('.ici');
  const mot = document.querySelector('.mot');
  //taille en centimetre

   let taille = submit.taille.value;
   taille = taille / 100;

//poids en g

   let poids = submit.poids.value;
   poids = poids/1000;

//    indice de masse corporelle

   let imc = poids/(taille*taille);

  if(submit.sex.value == 'M'){

      if(imc < 18.5){
        img.style.backgroundImage='url(assets/bmi_male.jpeg)';
        img.style.width="calc("+600+"px/"+5+" + "+25+"px)";
        img.style.height=191+"px";
        img.style.backgroundPosition=0+"px";
        mot.innerHTML="<strong>Vous etes <i>Mince</i></strong>";
        mot.style.color="blue";
      }else if(imc>=18.5 && imc<25){
        img.style.backgroundImage='url(assets/bmi_male.jpeg)';
        img.style.width="calc("+600+"px/"+5+" - "+25+"px)";
        img.style.height=191+"px";
        img.style.backgroundPosition=-150+"px";
        mot.innerHTML="<strong>Vous etes <i>Normal</i></strong>";
        mot.style.color="green";
      }
      else if(imc>=25 && imc<30){
        img.style.backgroundImage='url(assets/bmi_male.jpeg)';
        img.style.width="calc("+600+"px/"+5+" - "+25+"px)";
        img.style.height=191+"px";
        img.style.backgroundPosition=-250+"px";
        mot.style.color="yellow";
        mot.innerHTML="<strong>Vous etes <i>Gros</i></strong>";
    }else if(imc>=30 && imc<35){
        img.style.backgroundImage='url(assets/bmi_male.jpeg)';
        img.style.width="calc("+600+"px/"+5+" - "+25+"px)";
        img.style.height=191+"px";
        img.style.backgroundPosition=-350+"px";
        mot.innerHTML="<strong>Vous etes <i>obese</i></strong>";
        mot.style.color="orange";
    }else{
        img.style.backgroundImage='url(assets/bmi_male.jpeg)';
        img.style.width="calc("+600+"px/"+5+" - "+25+"px)";
        img.style.height=191+"px";
        img.style.backgroundPosition=-450+"px";
        mot.innerHTML="<strong>Vous etes <i>extremement obese</i></strong>";
        mot.style.color="red";
    }
  }else{
    if(imc < 18.5){
        img.style.backgroundImage='url(assets/bmi_male.jpeg)';
        img.style.width="calc("+1396+"px/"+5+"-"+25+"px)";
        img.style.height=225+"px";
        img.style.backgroundPosition=0+"px";
        mot.innerHTML="<strong>Vous etes <i>Mince</i></strong>";
        mot.style.color="blue";
      }else if(imc>=18.5 && imc<25){
        img.style.backgroundImage='url(assets/bmi_male.jpeg)';
        img.style.width="calc("+1396+"px/"+5+" - "+25+"px)";
        img.style.height=225+"px";
        img.style.backgroundPosition=-250+"px";
        mot.innerHTML="<strong>Vous etes <i>Normal</i></strong>";
        mot.style.color="green";
      }
      else if(imc>=25 && imc<30){
        img.style.backgroundImage='url(assets/bmi_male.jpeg)';
        img.style.width="calc("+1396+"px/"+5+" - "+25+"px)";
        img.style.height=225+"px";
        img.style.backgroundPosition=-500+"px";
        mot.innerHTML="<strong>Vous etes <i>Grosse</i></strong>";
        mot.style.color="yellow";
    }else if(imc>=30 && imc<35){
        img.style.backgroundImage='url(assets/bmi_male.jpeg)';
        img.style.width="calc("+1396+"px/"+5+" - "+25+"px)";
        img.style.height=225+"px";
        img.style.backgroundPosition=-750+"px";
        mot.innerHTML="<strong>Vous etes <i>obese</i></strong>";
        mot.style.color="orange";
    }else{
        img.style.backgroundImage='url(assets/bmi_male.jpeg)';
        img.style.width="calc("+1396+"px/"+5+" - "+25+"px)";
        img.style.height=225+"px";
        img.style.backgroundPosition=-1070+"px";
        mot.innerHTML="<strong>Vous etes <i>extremement obese</i></strong>";
        mot.style.color="red";
    }
    img.style.backgroundImage='url(assets/bmi_female.jpeg)';
    img.classList.add('under');
  }
}