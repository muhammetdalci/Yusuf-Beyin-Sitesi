let menu = document.getElementsByClassName('menu')[0];
document.querySelectorAll('a').forEach(item => {
  item.classList.add('none');
})
document.getElementById("selector").onclick = () => {
  let event = menu.classList.contains("active")//1
  /*1*/ event = /*0*/ !event;
  if (event) {
    if (innerWidth <765) {
      menu.classList.add('verc');
    }else{
      menu.classList.remove('verc');
    }
    menu.classList.add("active"); document.querySelectorAll('i')[0].classList.add("none"); document.querySelectorAll('i')[1].classList.remove('none')
    document.querySelectorAll('a').forEach(item => {
      item.classList.remove('none');
    })
  }
  else {
    menu.classList.remove("active"); document.querySelectorAll('i')[1].classList.add("none"); document.querySelectorAll('i')[0].classList.remove('none')

    document.querySelectorAll('a').forEach(item => {
      item.classList.add('none');
    })
  }
}
