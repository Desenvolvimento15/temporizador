// Define a data para a qual estamos em contagem regressiva
var countDownDate = new Date("August 26, 2022 18:00:00").getTime();
// Atualiza a contagem regressiva a cada 1 segundo
  var x = setInterval(function() {
// Obtém a data e hora de hoje
  var now = new Date().getTime();
// Encontra a distância entre agora e a data da contagem regressiva
  var distance = countDownDate - now;
// Cálculos de tempo para dias, horas, minutos e segundos
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  if(hours < 10){
    hours = '0'+hours;
  }
     if(minutes < 10){
    minutes = '0'+minutes;
  }
    if(seconds < 10){
    seconds = '0'+seconds;
  }
    
// Exibe o resultado no elemento com id="timer"
    days = days > 0 ? days+"D ": "";
document.getElementById("timer").innerHTML =   days + hours + ":"+ minutes + ":" + seconds;
// Se a contagem regressiva terminar, escreva algum texto
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Oferta Encerrada!";
  }
}, 1000);
