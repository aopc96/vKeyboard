//Play and Display
let x = document.getElementById('key');
x.addEventListener('click', event => {
    let target = event.target;
       if (target.matches('button')){
           let value = target.value;
       document.getElementById('converted').value += value+'  ';
       let x = String(target.id);
       switch(x){
            case 'F0': new Audio("/sample/m(33).wav").play();
            break;
            case 'F#0': new Audio("sample/m(34).wav").play();
            break;
            case 'G0': new Audio("sample/m(35).wav").play();
            break;
            case 'G#0': new Audio("sample/m(36).wav").play();
            break;
            case 'A0': new Audio("sample/m(37).wav").play();
            break;
            case 'A#0': new Audio("sample/m(38).wav").play();
            break;
            case 'B0': new Audio("sample/m(39).wav").play();
            break;
            case 'C1': new Audio("sample/m(40).wav").play();
            break;
            case 'C#1': new Audio("sample/m(41).wav").play();
            break;
            case 'D1': new Audio("sample/m(42).wav").play();
            break;
            case 'D#1': new Audio("sample/m(43).wav").play();
            break;
            case 'E1': new Audio("sample/m(44).wav").play();
            break;
            case 'F1': new Audio("sample/m(45).wav").play();
            break;
            case 'F#1': new Audio("sample/m(46).wav").play();
            break;
            case 'G1': new Audio("sample/m(47).wav").play();
            break;
            case 'G#1': new Audio("sample/m(48).wav").play();
            break;
            case 'A1': new Audio("sample/m(49).wav").play();
            break;
            case 'A#1': new Audio("sample/m(50).wav").play();
            break;
            case 'B1': new Audio("sample/m(51).wav").play();
            break;
            case 'C2': new Audio("sample/m(52).wav").play();
            break;
            case 'C#2': new Audio("sample/m(53).wav").play();
            break;
            case 'D2': new Audio("sample/m(54).wav").play();
            break;
            case 'D#2': new Audio("sample/m(55).wav").play();
            break;
            case 'E2': new Audio("sample/m(56).wav").play();
            break;
            case 'F2': new Audio("sample/m(57).wav").play();
            break;
            case 'F#2': new Audio("sample/m(58).wav").play();
            break;
            case 'G2': new Audio("sample/m(59).wav").play();
            break;
            case 'G#2': new Audio("sample/m(60).wav").play();
            break;
            case 'A2': new Audio("sample/m(61).wav").play();
            break;
            case 'A#2': new Audio("sample/m(62).wav").play();
            break;
            case 'B2': new Audio("sample/m(63).wav").play();
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
//Text at cursor
function insertTextAtCaret(text) {
    var sel, range;
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();
            range.insertNode( document.createTextNode(text) );
        }
    } else if (document.selection && document.selection.createRange) {
        document.selection.createRange().text = text;
    }
}


