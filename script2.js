'use strict';

confirm('change pictures using buttons or arrows on the keyboard');

let container = document.querySelector('.img-container');

function moveImage(n) {
    if (n === 1) {
        let item = container.children[0];
        item.classList.remove('show-small');
        item.remove();
        container.append(item);
        container.children[0].classList.remove('show-big');
        container.children[0].classList.add('show-small');
        
        container.children[1].classList.remove('show-small');
        container.children[1].classList.add('show-big');

        container.children[2].classList.add('show-small');
     
    } else if (n === -1) {
        let lastItem = container.lastElementChild;
        console.log(lastItem)
        lastItem.remove();
        container.prepend(lastItem);
        lastItem.classList.add('show-small');
       
        container.children[1].classList.remove('show-small');
        container.children[1].classList.add('show-big');
    
        container.children[2].classList.remove('show-big');
        container.children[2].classList.add('show-small');
    
        container.children[3].classList.remove('show-small');
    }
}



window.addEventListener('keydown', function(s) {
    console.log(s.keyCode);
    const move = this.document.querySelector(`[data-key="${s.keyCode}"]`);
    console.log(move);
    if (s.keyCode === 37) {
        moveImage(-1);
    } else if (s.keyCode === 39) {
        moveImage(1)
    } else {
        return;
    }
})
