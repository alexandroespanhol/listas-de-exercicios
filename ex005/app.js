function converter(){
    let metros=doument.getElementById("metros").value
    let centimetros=parseFloat(metros)*100
    document.getElementById("resposta").innerHTML=centimetros
}