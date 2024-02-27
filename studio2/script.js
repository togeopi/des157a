(function(){

    'use strict';
    console.log('reading js');

    let playlistChange = 0;

    const left = document.getElementById('left');
    const right = document.getElementById('right');
    const p1 = document.getElementById('playlist1');
    const p2 = document.getElementById('playlist2');
    const p3 = document.getElementById('playlist3');
    const p4 = document.getElementById('playlist4');
    const overlay1 = document.getElementById('overlay1');
    const overlay2 = document.getElementById('overlay2');
    const overlay3 = document.getElementById('overlay3');
    const overlay4 = document.getElementById('overlay4');
    const play1 = document.getElementById('play1');
    const play2 = document.getElementById('play2');
    const play3 = document.getElementById('play3');
    const play4 = document.getElementById('play4');
    const close1 = document.getElementById('close1');
    const close2 = document.getElementById('close2');
    const close3 = document.getElementById('close3');
    const close4 = document.getElementById('close4');

    left.addEventListener('click', function(){
        playlistChange--;

        p1.className = 'showing';
        p2.className = 'showing';
        p3.className = 'hidden';
        p4.className = 'hidden';
        p5.className = 'hidden';
        p6.className = 'hidden';
    });

    right.addEventListener('click', function(){
        p1.className = 'hidden';
        p2.className = 'hidden';
        p3.className = 'showing';
        p4.className = 'showing';

        playlistChange += 1;

        if (playlistChange > 1){
            p5.className = 'showing';
            p6.className = 'showing';
            
            p3.className = 'hidden';
            p4.className = 'hidden';
        }
    });

    play1.addEventListener('click', function(){
        overlay1.className = 'overlay';
    });

    play2.addEventListener('click', function(){
        overlay2.className = 'overlay';
    });

    play3.addEventListener('click', function(){
        overlay3.className = 'overlay';
    });

    play4.addEventListener('click', function(){
        overlay4.className = 'overlay';
    });

    close1.addEventListener('click', function(){
        overlay1.className = 'hidden';
    });

    close2.addEventListener('click', function(){
        overlay2.className = 'hidden';
    });

    close3.addEventListener('click', function(){
        overlay3.className = 'hidden';
    });

    close4.addEventListener('click', function(){
        overlay4.className = 'hidden';
    });
})();