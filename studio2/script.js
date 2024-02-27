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
    const play1 = document.getElementById('play1');

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
})();