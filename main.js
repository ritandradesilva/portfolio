//olá rita! isto está comentado para poderes estudar

//primeiro: uma função que deteta se a página está a funcionar
$(document).ready(function () {

//aqui temos um conditional statement (if/else) que corre a função isItPhone() e deteta se ela retorna com verdadeiro ou falso
//ou seja não se for um telemóvel, corre o código que tem entre os seus parênteses
  if (isItPhone() == false) {

   //quando o mouse se move sobre as imagens, chama esta função
    $("img").mousemove(function (e) {

      //cpos guarda as coordenadas do rato segundo a posição da imagem
      let cpos = { top: e.pageY + 10, left: e.pageX + 10 };

      //mostra o figcaption dessa imagem e dá-lhe um offset. isto é, coloca a ponta superior esquerda do figcaption junto do rato
      $(this).siblings("figcaption").show();
      $(this).siblings("figcaption").offset(cpos);
    });

    //quando o mouse sai de cima das imagens, chama esta função 
    $("img").mouseleave(function (e) {

      //esconde o figcaption dessa imagem
      $(this).siblings("figcaption").hide();
    });
  } //fechamos o conditional que corre apenas em desktop

//ao clicar no botão de index, chama esta função
  $("#indexbutton").click(function () {

   //abrir (se fechado) ou fechar (se aberto) o index e fechar o about
    $("#indexbutton").toggleClass("active");
    $("#aboutbutton").removeClass("active");

    $(".indextoggle").toggle();
    $(".abouttoggle").hide();
  });

  //ao clicar no botão de about, chama esta função
  $("#aboutbutton").click(function () {
   //abrir (se fechado) ou fechar (se aberto) o about e fechar o index
    $("#aboutbutton").toggleClass("active");
    $("#indexbutton").removeClass("active");
    $(".abouttoggle").toggle();
    $(".indextoggle").hide();
  });
  //ao clicar no overlay, chama esta função
  $(".overlay").click(function () {
   //fechar o index ou about
    $("#indexbutton").removeClass("active");
    $("#aboutbutton").removeClass("active");
    $(".abouttoggle").hide();
    $(".indextoggle").hide();
  });

  //ao abrir a página, chamar a função whatIsRitaDoing()
  whatIsRitaDoing();
});

//esta função deteta o tamanho do viewport e, se for maior do que 600, retorna o resultado "falso"
function isItPhone() {
  let viewportWidth = window.innerWidth;
  if (viewportWidth > 600) {
    return false;
  }
}

//esta função calcula o que a rita deve estar a fazer
function whatIsRitaDoing() {
//guarda na constante d a data atual (year,month,day,hours,minutes,seconds,ms)
  const d = new Date();

  //dessa data, extraímos o dia da semana atual (1-7) e guardamos na variável day
  let day = d.getDay();

  //dessa data, extraímos a hora atual (0-23) e guardamos na variável hour
  let hour = d.getHours();
  
  //guardar na variável dayText um array com os dias da semana
  let dayText = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  let dayTextPT = [
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "sábado",
    "domingo",
  ];

  //guardar na variável activity um array com as diferentes atividades
  let activity = [
    "sleeping",
    "scrolling linkedin",
    "at the beach but worrying about unemployment",
    "eating bánh mì with my friends",
    "staring at 3 different screens",
    "baking something"
  ];

  let activityPT = [
    "a dormir",
    "a fazer scroll no linkedin",
    "na praia mas preocupada com o desemprego",
    "a comer bánh mì com os meus amigos",
    "a olhar para 3 ecrãs diferentes",
    "a cozinhar alguma coisa"
  ];

  //no span currentTime, escrevemos a hora atual com a variável hour
  $("#currentTime").html(hour);

  //no span currentDayEN, escrevemos o dia da semana com a variável day
  $("#currentDayEN").html(dayText[day - 1]);
  $("#currentDayPT").html(dayTextPT[day - 1]);

  //com um conditional statement (if/else), detetamos qual é a hora e dia e definimos a atividade atual, escrevendo no span currentActivityEN essa atividade
  if (hour >= 23 || hour < 10) {
    // SLEEPING
    $("#currentActivityEN").html(activity[0]);
    $("#currentActivityPT").html(activityPT[0]);
  } else if (day >= 1 && day <= 5 && hour >= 10 && hour < 14) {
    // AT LINKEDIN
    $("#currentActivityEN").html(activity[1]);
    $("#currentActivityPT").html(activityPT[1]);
  } else if (day >= 1 && day <= 5 && hour >= 14 && hour < 19) {
    // AT BEACH
    $("#currentActivityEN").html(activity[2]);
    $("#currentActivityPT").html(activityPT[2]);
  } else if (day >= 1 && day <= 5 && hour >= 19 && hour < 22) {
    // EATING
    $("#currentActivityEN").html(activity[3]);
    $("#currentActivityPT").html(activityPT[3]);
  } else if (day >= 1 && day <= 5 && hour == 22) {
    // SCREENS
    $("#currentActivityEN").html(activity[4]);
    $("#currentActivityPT").html(activity[4]);
  } else if (day === 6 && hour >= 10 && hour < 14) {
    // SLEEPING ON SATURDAY MORNING
    $("#currentActivityEN").html(activity[0]);
    $("#currentActivityPT").html(activityPT[0]);
  } else if ((day === 6 && hour >= 14 && hour < 19) || (day === 0 && hour >= 10 && hour < 19)) {
    // SCREENS ON SATURDAY AFTERNOON OR SUNDAY
    $("#currentActivityEN").html(activity[4]);
    $("#currentActivityPT").html(activityPT[4]);
  } else if ((day === 6 && hour >= 19 && hour < 22) || (day === 0 && hour >= 19 && hour < 22)) {
    // BAKING ON SATURDAY EVENING OR SUNDAY EVENING
    $("#currentActivityEN").html(activity[5]);
    $("#currentActivityPT").html(activityPT[5]);
  } else if (day === 6 && hour >= 22 || day === 0 && hour >= 22) {
    // EATING ON SATURDAY NIGHT OR SUNDAY NIGHT
    $("#currentActivityEN").html(activity[3]);
    $("#currentActivityPT").html(activityPT[3]);
  }
}
