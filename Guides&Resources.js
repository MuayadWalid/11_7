
var helpArray = [ "Enter your car name in this box. (e.g: Toyota).",
    "Enter your car model here (e.g: Corola).",
    "Enter your car year here (e.g: 2015).",
    "Enter the specfic car part you are looking for.",
    "Enter your budget.",
    "Have additional information? Enter it here!", "This button submits the form to the server-side script."," " ];
var helpTextDiv;


  
  function init()
  {

     helpTextDiv = document.getElementById( "helpText" );

    
     
     //register listeners
     registerListeners(document.getElementById( "car-make" ), 0 );
     registerListeners(document.getElementById( "car-model" ), 1 );
     registerListeners(document.getElementById( "car-year" ), 2 );
     registerListeners(document.getElementById( "part-category" ), 3 );
     registerListeners(document.getElementById( "budget" ), 4 );
     registerListeners(document.getElementById( "comments" ), 5 );
     registerListeners(document.getElementById( "submit" ), 6 );
     
     
  
     var myForm = document.getElementById( "myForm" );
     myForm.addEventListener( "submit", 
        function()
        {                                                         
           return confirm( "Are you sure you want to submit?" );  
        }, 
        false );
     myForm.addEventListener( "reset", 
        function()
        {                                                         
           return confirm( "Are you sure you want to reset?" );  
        },
        false );
  }
  
  //register events
  function registerListeners( object, messageNumber )
  {
     object.addEventListener( "focus", 
        function() { helpTextDiv.innerHTML = helpArray[ messageNumber ]; },
        false );
     object.addEventListener( "blur", 
        function() { helpTextDiv.innerHTML = helpArray[ 7 ]; }, false );
  } // end function registerListener
  
  window.addEventListener( "load", init, false );
  
