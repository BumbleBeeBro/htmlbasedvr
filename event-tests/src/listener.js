AFRAME.registerComponent('click-listener', {
  init: function() {
    var clicked = true;
    this.el.addEventListener('click', function(evt) {

      var textField = document.querySelector('#textField');
      let camera = document.querySelector('#camera');
	  let scene = document.querySelector('#scene1');
	  
		
		

      if (clicked) {
		  clicked = !clicked;


		  textField.setAttribute('value', 'clicked');

      } else {

		  clicked = !clicked;
		  textField.setAttribute('value', 'clicked again');
      }

      

      
    });
  }
});
