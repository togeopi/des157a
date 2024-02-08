(function(){
    'use strict';
    console.log('reading js');

    const userData = document.getElementById('userdata');
    const story = document.getElementById('madlib');

    userData.addEventListener('submit', function(event){
        event.preventDefault();

        document.getElementById('overlay').className = 'showing';

        const adjective1 = document.getElementById('adjective1').value;
        const adjective2 = document.getElementById('adjective2').value;
        const verb1 = document.getElementById('verb1').value;
        const noun1 = document.getElementById('noun1').value;
        const verb2 = document.getElementById('verb2').value;
        const animal = document.getElementById('animal').value;

        let text;
        
        if(adjective1 && adjective2 && verb1 && noun1 && verb2 && animal){
            text = `it was a very <u>${adjective1}</u> night. all you could see was a <u>${adjective2}</u> figure in the distance. at first it was still, but soon you noticed it started to <u>${verb1}</u> near you. with the dim light, you could see that there was a large <u>${noun1}</u> next to it. you start to <u>${verb2}</u> and finally you wake up just to realize it was your <u>${animal}</u> having the zoomies at 3am.`;

            document.getElementById('adjective1').value = '';
            document.getElementById('adjective2').value = '';
            document.getElementById('verb1').value = '';
            document.getElementById('noun1').value = '';
            document.getElementById('verb2').value = '';
            document.getElementById('animal').value = '';
        } 
        else 
        {
            text = "you think you're funny for trying to not fill out my madlib?"
        }

        story.innerHTML = text;
    });

    document.querySelector('.close').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('overlay').className = 'hidden';
    });

})();