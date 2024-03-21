(function(){
    'use strict';
    console.log('reading js');

    // variable for color palettes on start screen
    const mood1 = document.getElementById('mood1');
    const mood2 = document.getElementById('mood2');
    const mood3 = document.getElementById('mood3');
    const mood4 = document.getElementById('mood4');

    // variable for song ui
    const blue = document.getElementById('blue');
    const green = document.getElementById('green');
    const red = document.getElementById('red');
    const lightblue = document.getElementById('lightblue');
    // variable for start screen
    const start = document.getElementById('start');

    // variable for back buttons on song ui
    const escape1 = document.getElementById('escape1');
    const escape2 = document.getElementById('escape2');
    const escape3 = document.getElementById('escape3');
    const escape4 = document.getElementById('escape4');
    // variable for main page after song ui
    const mainPage = document.getElementById('mainPage');

    // variables for buttons
    const left = document.getElementById('left');
    const right = document.getElementById('right');
    // variables for main playlists
    const p1 = document.getElementById('playlist1');
    const p2 = document.getElementById('playlist2');
    const p3 = document.getElementById('playlist3');
    const p4 = document.getElementById('playlist4');
    // overlays for each individual playlist
    const overlay1 = document.getElementById('overlay1');
    const overlay2 = document.getElementById('overlay2');
    const overlay3 = document.getElementById('overlay3');
    const overlay4 = document.getElementById('overlay4');
    // img buttons to select playlists
    const play1 = document.getElementById('play1');
    const play2 = document.getElementById('play2');
    const play3 = document.getElementById('play3');
    const play4 = document.getElementById('play4');
    // buttons to close overlays
    const close1 = document.getElementById('close1');
    const close2 = document.getElementById('close2');
    const close3 = document.getElementById('close3');
    const close4 = document.getElementById('close4');
    let playlistChange = 0;

    // display song ui based off of color palette and mood
    blue.addEventListener('click', function(event){
        event.preventDefault();
        mood1.className = 'showing';
        start.className = 'hidden';
        escape1.className = 'showing';
    });

    green.addEventListener('click', function(event){
        event.preventDefault();
        mood2.className = 'showing';
        start.className = 'hidden';
        escape2.className = 'showing';
    });

    red.addEventListener('click', function(event){
        event.preventDefault();
        mood3.className = 'showing';
        start.className = 'hidden';
        escape3.className = 'showing';
    });

    lightblue.addEventListener('click', function(event){
        event.preventDefault();
        mood4.className = 'showing';
        start.className = 'hidden';
        escape4.className = 'showing';
    });

    // escape song ui and enter main page
    escape1.addEventListener('click', function(){
        mainPage.className = 'showing';
        escape1.className = 'hidden';
        mood1.className = 'hidden';
    });

    escape2.addEventListener('click', function(){
        mainPage.className = 'showing';
        escape2.className = 'hidden';
        mood2.className = 'hidden';
    });

    escape3.addEventListener('click', function(){
        mainPage.className = 'showing';
        escape3.className = 'hidden';
        mood3.className = 'hidden';
    });

    escape4.addEventListener('click', function(){
        mainPage.className = 'showing';
        escape4.className = 'hidden';
        mood4.className = 'hidden';
    });

    // switch between playlists on main page
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

    // display each playlist upon clicking on playlist cover
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

    // close each playlist 
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