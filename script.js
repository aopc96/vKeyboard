//Play and Display
let x = document.getElementById('key');
x.addEventListener('click', event => {
    let target = event.target;
       if (target.matches('button')){
           let value = target.value;
       document.getElementById('converted').value += value+'  ';
       let x = String(target.id);
       switch(x){
            case 'F0': new Audio("sample/m(33).ogg").play();
            break;
            case 'F#0': new Audio("sample/m(34).ogg").play();
            break;
            case 'G0': new Audio("sample/m(35).ogg").play();
            break;
            case 'G#0': new Audio("sample/m(36).ogg").play();
            break;
            case 'A0': new Audio("sample/m(37).ogg").play();
            break;
            case 'A#0': new Audio("sample/m(38).ogg").play();
            break;
            case 'B0': new Audio("sample/m(39).ogg").play();
            break;
            case 'C1': new Audio("sample/m(40).ogg").play();
            break;
            case 'C#1': new Audio("sample/m(41).ogg").play();
            break;
            case 'D1': new Audio("sample/m(42).ogg").play();
            break;
            case 'D#1': new Audio("sample/m(43).ogg").play();
            break;
            case 'E1': new Audio("sample/m(44).ogg").play();
            break;
            case 'F1': new Audio("sample/m(45).ogg").play();
            break;
            case 'F#1': new Audio("sample/m(46).ogg").play();
            break;
            case 'G1': new Audio("sample/m(47).ogg").play();
            break;
            case 'G#1': new Audio("sample/m(48).ogg").play();
            break;
            case 'A1': new Audio("sample/m(49).ogg").play();
            break;
            case 'A#1': new Audio("sample/m(50).ogg").play();
            break;
            case 'B1': new Audio("sample/m(51).ogg").play();
            break;
            case 'C2': new Audio("sample/m(52).ogg").play();
            break;
            case 'C#2': new Audio("sample/m(53).ogg").play();
            break;
            case 'D2': new Audio("sample/m(54).ogg").play();
            break;
            case 'D#2': new Audio("sample/m(55).ogg").play();
            break;
            case 'E2': new Audio("sample/m(56).ogg").play();
            break;
            case 'F2': new Audio("sample/m(57).ogg").play();
            break;
            case 'F#2': new Audio("sample/m(58).ogg").play();
            break;
            case 'G2': new Audio("sample/m(59).ogg").play();
            break;
            case 'G#2': new Audio("sample/m(60).ogg").play();
            break;
            case 'A2': new Audio("sample/m(61).ogg").play();
            break;
            case 'A#2': new Audio("sample/m(62).ogg").play();
            break;
            case 'B2': new Audio("sample/m(63).ogg").play();
            break;
            default: 
       }
    }
  }); 
//Clear
    document.getElementById('clear').addEventListener('click', e =>{
    document.getElementById('converted').value = '';
  });
//Newline
    document.getElementById('new-line').addEventListener('click', f =>{
    document.getElementById('converted').value +='\n';
    updateScroll()
  });
//Copy
    document.getElementById('copy').addEventListener('click', g =>{
    var c = document.getElementById('converted');
    navigator.clipboard.writeText(c.value);
    alert("Copied " + c.value)
  });   
//Scroll
function updateScroll(){
    var element = document.getElementById("converted");
    element.scrollTop = element.scrollHeight;
}


