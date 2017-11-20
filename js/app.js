
window.addEventListener('load', function () {
    //creating nodes in js.
    var box = document.getElementById('container');
    var listBox = document.getElementsByClassName('list-box')[0];
        
    listBox.addEventListener('click',addForm);
    
    //creating form
    function addForm(event){
     //creating nodes
      var form = document.createElement('form');
      var input = document.createElement('input');
      var btn = document.createElement('button');
      btn.textContent = 'Guardar';
      
      box.appendChild(form);
      form.appendChild(input);
      form.appendChild(button);
      
      
         


 }); //end      