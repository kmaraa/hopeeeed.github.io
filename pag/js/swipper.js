function App() {}

window.onload = function (event) {
    var app = new App();
    window.app = app;
};

App.prototype.processingButton = function(event) {
    const btn = event.currentTarget;
    const slickList = event.currentTarget.parentNode;
    const track = event.currentTarget.parentNode.querySelector('#track');
    const slick = track.querySelectorAll('.slick');

    const slickWidth = slick[0].offsetWidth;
    
    const trackWidth = track.offsetWidth;
    const listWidth = slickList.offsetWidth;

    track.style.left == ""  ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);

    btn.dataset.button == "button-prev" ? prevAction(leftPosition,slickWidth,track) : nextAction(leftPosition,trackWidth,listWidth,slickWidth,track)
}

let prevAction = (leftPosition,slickWidth,track) => {
    if(leftPosition > 0) {
        console.log("entro 2")
        track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
    }
}

let nextAction = (leftPosition,trackWidth,listWidth,slickWidth,track) => {
    if(leftPosition < (trackWidth - listWidth)) {
        track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
    }
}

const menuItems = [...document.querySelectorAll('.menu-item')];

menuItems.forEach(item=> {
  
  let word = item.children[0].children[0].innerText.split('');
  item.children[0].innerHTML = '';
  word.forEach((letter,idx) => {
    item.children[0],innerHTML += `<span style="--index: ${idx};">${letter}</span>`;
  })
  let cloneDiv = item.children[0].cloneNode(true);
  cloneDiv.style.position = 'absolute';
  cloneDiv.style.left = '0'
  cloneDiv.style.top = '0';
  item.appendChild(cloneDiv)
})
