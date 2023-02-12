//Julia Ociesa
//IMD 3901 Section A
//February 11, 2023

'use strict'

//code for deleting a single sphere
//based off code used in class
AFRAME.registerComponent('delete-item', {
    schema: {
        duration : {type:'number', default:2}
    },
    init : function() {
        //called once at creation after aframe scene is loaded in

        const CONTEXT_AF = this;
        CONTEXT_AF.sphere1 = document.querySelector('#sphere1');
        CONTEXT_AF.isDeleted = false;


        CONTEXT_AF.el.addEventListener('click', function() {
            if(CONTEXT_AF.isDeleted === true) {
                console.log('dont delete');
            }
            else {
                console.log('delete');
                CONTEXT_AF.sphere1.parentNode.removeChild(CONTEXT_AF.sphere1);
                CONTEXT_AF.isDeleted = true;

            }
        });
    }
});

//setting music to activate once scene loads in
//music still doesn't load properly after numerous attempts to fix it
AFRAME.registerComponent('start-experience', {
    init: function() {
        console.log('scene loaded');
        document.querySelector('#user-gesture-button').style.display = 'block';
    }
});

const startExperience = function() {
    document.querySelector('#user-gesture-overlay').style.display = 'none';
    const ambientSounds = document.querySelectorAll('.ambient-sound');
    ambientSounds.forEach(function(soundEntity) {
        soundEntity.components['sound'].playSound();
});
};

// code from https://stackoverflow.com/questions/42041517/how-do-i-rotate-a-box-in-a-frame-by-moving-or-dragging-the-mouse
//this was my attempt at creating an interactive plant in the scene
//i couldnt get it to work before the deadline unfortunately 
const CONTEXT_AF = this;
CONTEXT_AF.plant = document.querySelector('#alien_plant');
var isDragging = false;
CONTEXT_AF.plant.addEventListener ('mousedown', function() {
    isDragging = true;
});
CONTEXT_AF.plant.addEventListener('mousemove',function(event) {
    if(isDragging)
    {
        plant.setAttribute('rotation', {x:event.clientX , y:event.clientY, z:0});
    }
  });
  CONTEXT_AF.plant.addEventListener('mouseleave', function() {
    if(isDraggging)
    {
      isDragging=false;
    }
  });
