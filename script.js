//inputa ulaştık
const val = document.querySelector("#val");
//tüm butonlara ulaşıyoruz
const buttons = document.querySelectorAll(".calculator button"); 
//
const hold = document.querySelector("#hold");


let number1;
let number2;
let clickedOperator;
let result;

//buttons içinde bulunan her button için
buttons.forEach(button => {
    //O buttona click eventi ekliyoruz.
    button.addEventListener("click",e =>{
        //"e" parametresi tetiklenen olay nesnesini işaret eder. Tıklanan öğe bilgileri içerir. "event.target", tıklanan öğeyi temsil eder.
        const clickedElement = e.target;


        //Tıklanan elementin içinde "number" sınıfı varsa
        if(clickedElement.classList.contains("number")){
            //inputun değerine tıklanan elemanın içinde yazan değeri ekliyoruz.
            val.value += clickedElement.textContent;
        } 
        //Tıklanan elementin içinde "operator" sınıfı varsa
        else if(clickedElement.classList.contains("operator")){
            // tıkladığımız buton operatörse ilk sayı, input içindeki değere eşit oluyor.
            number1 = parseFloat(val.value);
            //ilk sayının ne olduğunu "hold" içinde tutuyoruz. 
            hold.value = val.value;
            //input içini  temizliyoruz
            val.value = ""; 
            //Seçili operatörü belli eden sınıfı kaldırıyoruz
            delClicked();
            //operatöre "clicked" sınıfını ekliyoruz.
            clickedElement.classList.add("clicked");
           
            
             
            //Tıkladığımız elementin textini "clickedOperator" içinde tutuyoruz.
             clickedOperator = clickedElement.textContent;
            
        }
        //Tıklanan elemanın içinde "equal" sınıfı varsa
        else if(clickedElement.classList.contains("equal")){
            //Hesaplama işlemlerini "calculate" func. içinde yaptım. Onu çağırıyoruz
            calculate();
            //Seçili operatörü belli eden sınıfı kaldırıyoruz
            delClicked();
        }
        //Tıklanan elemanın içinde "deleteAll" sınıfı varsa
        else if(clickedElement.classList.contains("deleteAll")){
            //Tüm inputu temizliyoruz.(AC button)
            val.value = "";
            //hold inputunu temizliyoruz.
            hold.value = "";
            //Seçili operatörü belli eden sınıfı kaldırıyoruz
            delClicked();
        }
        //Tıklanan elemanın içinde "deleteSingle" sınıfı varsa
        else if(clickedElement.classList.contains("deleteSingle")){
            //İnputa yazdığımız son şeyi siliyoruz
            val.value = val.value.slice(0,-1);

        }

    })
}) 

    //Hesaplama işlemlerini yaptığımız func.
    const calculate = () => {
          //eşittire tıkladığımızda input içindeki değer ikinci sayı oluyor.
          number2 = parseFloat(val.value);
          let result;
          
          if(clickedOperator=="+"){
             result = (number1+number2)
             val.value = result;
          }
          if(clickedOperator=="-"){
              result = (number1-number2)
              val.value = result;
          }
          if(clickedOperator=="*"){
              result = (number1*number2)
              val.value = result;
          }
          if(clickedOperator=="/"){
              result = (number1/number2)
              val.value = result;
          }
          //hold kısmını temizliyoruz.
          hold.value = "";
          //Sonucu tekrar val içine atıyoruz
          val.value = result;


    }

    //Seçili operatörü belli eden sınıfı kaldırıyoruz
    const delClicked = () => {
        //"operator" sınıfına sahip buttonlar içinde geziyoruz
        document.querySelectorAll(".operator").forEach(operatorButton => {
        //"clicked" sınıfını kaldırıyoruz.
        operatorButton.classList.remove("clicked");
        })

    }




    
