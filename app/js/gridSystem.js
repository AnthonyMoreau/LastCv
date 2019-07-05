//Grid_System


let h = document.querySelector('head');

let style = document.createElement('style');
h.appendChild(style);


style.innerHTML = 
`
    grid-template-columns: 1fr 5fr ;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr ;
    grid-template-areas: 
    "menu about"
    "menu competence"
    "menu xp"
    "menu pong"
    "menu infos"

`






