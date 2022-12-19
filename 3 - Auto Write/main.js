let text = "Danish is the best";
let index = 0;


function printMsg(){
    let dom = document.body;
    dom.innerText = text.slice(0,index);
    console.log(text.slice(0,index))
    index++;

    if(index>text.length){
        index=0;
    }
}
setInterval(printMsg,100);