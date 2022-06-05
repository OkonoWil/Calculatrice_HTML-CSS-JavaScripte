

//Gestion du bouton OFF
let isOff = true;

const tmp = document.querySelector('#displayOut');
const ecran = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
    item.onclick = () => {

        let ecranString = ecran.innerText.toString();
        let tmpString = tmp.innerText.toString();

        //Allumage ou réinitialisation
        if(item.id == 'on') {
            isOff = false;
            tmp.innerText = '0';
            ecran.innerText = '0';
        }
        

        //Eteindre
        else if(item.id == 'off'){
            isOff = true;
            tmp.innerText = '';
            ecran.innerText = '';
        }


        //Lorsque la calculatrice est éteind on ouvre une boîte dialogue pour signaler à l'utilisateur
        else if(isOff == true)
            alert('La calculatrice est éteint!!!');


        //Lorsque la calculatrice est allumé
        else{
            //Effacer
            if (item.id == 'backspace') {
                if(ecranString.length+1 == tmpString.length){
                    let string = tmp.innerText.toString();
                    tmp.innerText = string.substr(0, string.length - 2);
                    let string2 = ecran.innerText.toString();
                    ecran.innerText = string2.substr(0, string2.length - 1);
                    if(tmpString==""){
                        ecran.innerText = "0";
                        tmp.innerText = "0"
                    }

                }
                else if(ecran.innerText.length != 0){
                    let string = tmp.innerText.toString();
                    tmp.innerText = string.substr(0, string.length - 1);
                    let string2 = ecran.innerText.toString();
                    ecran.innerText = string2.substr(0, string2.length - 1);
                }else if(tmp.innerText.length != 0){
                    let string = tmp.innerText.toString();
                    tmp.innerText = string.substr(0, string.length - 1);
                    if(tmp.innerText.length != 0)
                        ecran.innerText = eval(tmp.innerText);
                }   

            }//Ecran vide
            else if(tmpString.length==1 && tmpString == "0" && ecranString == "0"){

                //Les opérateurs * et / déclanche une érreur
                if(item.id == '0' || item.id == '1' || item.id == '2' || item.id == '3' || item.id == '4' || item.id == '5' || item.id == '6' || item.id == '7' || item.id == '8' || item.id == '9'){
                    tmp.innerText = item.id;
                    ecran.innerText = item.id;
                }
                //L'opérateur = déclanche une érreur
                else if (item.id == 'equal') {
                    tmp.innerText = eval(tmp.innerText);
                    ecran.innerText = tmp.innerText
                }else{
                    ecran.innerText = tmp.innerText.toString();
                    ecran.innerText = eval(ecran.innerText);
                    tmp.innerText += item;
                }

                //Lorsque la dernier valeur saisie est un opérateur
            }else if(tmpString.charAt(tmpString.length-1)=='+'||tmpString.charAt(tmpString.length-1)=='-'||tmpString.charAt(tmpString.length-1)=='*'||tmpString.charAt(tmpString.length-1)=='/'){
                if(ecranString.length == tmpString.length == 1){
                    if(item.id == '*' || item.id == '/' || item.id == 'equal'){
                        alert('Math error');
                    }else if(item.id == '+' || item.id == '-'){   
                        tmp.innerText = item.id;
                        ecran.innerText = item.id;
                    }else{   
                        tmp.innerText += item.id;
                        ecran.innerText += item.id;
                    }
                }
                else if (item.id == 'equal') {
                    tmp.innerText = tmpString.substr(0, tmpString.length - 1);
                    tmp.innerText = eval(tmp.innerText);
                    ecran.innerText = tmp.innerText;
                }else if (item.id == '+') {
                    tmp.innerText = tmpString.substr(0, tmpString.length-1);
                    ecran.innerText = tmp.innerText.toString();
                    ecran.innerText = eval(ecran.innerText);
                    tmp.innerText += '+';
                }else if (item.id == '-' ) {
                    tmp.innerText = tmpString.substr(0, tmpString.length-1);
                    ecran.innerText = tmp.innerText.toString();
                    ecran.innerText = eval(ecran.innerText);
                    tmp.innerText += '-';
                }else if (item.id == '*' ) {
                    tmp.innerText = tmpString.substr(0, tmpString.length-1);
                    ecran.innerText = tmp.innerText.toString();
                    ecran.innerText = eval(ecran.innerText);
                    tmp.innerText += '*';
                }else if (item.id == '/' ) {
                    tmp.innerText = tmpString.substr(0, tmpString.length-1);
                    ecran.innerText = tmp.innerText.toString();
                    ecran.innerText = eval(ecran.innerText);
                    tmp.innerText += '/';
                }else{
                    tmp.innerText += item.id;
                    ecran.innerText = item.id;
                }
                

            //Lorsque la dernier valeur saisie est chiffre    
            }else if (item.id == 'equal') {
                tmp.innerText = eval(tmp.innerText);
                ecran.innerText = tmp.innerText;
            }else if (item.id == '+') {
                ecran.innerText = tmp.innerText;
                tmp.innerText = eval(ecran.innerText);
                ecran.innerText = eval(ecran.innerText);
                tmp.innerText += '+';
            }else if (item.id == '-' ) {
                ecran.innerText = tmp.innerText;
                tmp.innerText = eval(ecran.innerText);
                ecran.innerText = eval(ecran.innerText);
                tmp.innerText += '-';
            }else if (item.id == '*' ) {
                ecran.innerText = tmp.innerText;
                tmp.innerText = eval(ecran.innerText);
                ecran.innerText = eval(ecran.innerText);
                tmp.innerText += '*';
            }else if (item.id == '/' ) {
                ecran.innerText = tmp.innerText;
                tmp.innerText = eval(ecran.innerText);
                ecran.innerText = eval(ecran.innerText);
                tmp.innerText += '/';
            }else if(ecran.innerText != ''){
                tmp.innerText += item.id;
                ecran.innerText += item.id;
            }
        }
        
    }
})


//Gestion de la fonctionnalité thème de la calculatrice
const themeToggleBtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');
const toggleIcon = document.querySelector('.toggler-icon');
let isDark = true;
themeToggleBtn.onclick = () => {
    calculator.classList.toggle('dark');
    themeToggleBtn.classList.toggle('active');
    isDark = !isDark;
}

