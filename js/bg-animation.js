let bg = document.getElementsByClassName('img')[0];
let bnr = document.getElementsByClassName('banner')[0];

let i = 0;
for (let j = 0; j < bg.children.length; j++) {
    if (j == i) {
        bg.children[j].style.opacity = '1';
        bg.children[j].style.visible = 'visible';
        bnr.children[j].style.opacity = '1';
        bnr.children[j].style.visible = 'visible';
        continue;
    }
    bg.children[j].style.opacity = '0';
    bg.children[j].style.visible = 'hidden';
    bnr.children[j].style.opacity = '0';
    bnr.children[j].style.visible = 'hidden';
}
i++;
setInterval(() => {
    
    if(i==4){
        i=0;
    }
    for (let j = 0; j < bg.children.length; j++) {
        if (j == i) {
            bg.children[j].style.opacity = '1';
            bg.children[j].style.visible = 'visible';
            bnr.children[j].style.opacity = '1';
            bnr.children[j].style.visible = 'visible';
            continue;
        }
        bg.children[j].style.opacity = '0';
        bg.children[j].style.visible = 'hidden';
        bnr.children[j].style.opacity = '0';
        bnr.children[j].style.visible = 'hidden';
    }
    i++;
}, 2000)