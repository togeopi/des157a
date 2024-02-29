(function(){
    'use strict';
    console.log('reading js');

    const help = document.querySelector('a');
    const instructions = document.getElementById('instructions');
    const close = document.getElementById('close');

    help.addEventListener('click', function(event){
        event.preventDefault();
        instructions.className = 'showing';
    });

    close.addEventListener('click', function(){
        instructions.className = 'hidden';
    });
})();