

alert("Hello! How are you?");

alert("Welcome to my <Code> Louisville Project!");

$( function() {
  // run the currently selected effect
  function runEffect() {
    // get effect type from
    var selectedEffect = "slide";

    // Most effect types need no options passed by default
    var options = {};
    // some effects have required parameters
    if ( selectedEffect === "scale" ) {
      options = { percent: 50 };
    } else if ( selectedEffect === "size" ) {
      options = { to: { width: 200, height: 60 } };
    }

    // Run the effect
    $( "#effect" ).toggle( selectedEffect, options, 500 );
  };

  // button
  $( "#button" ).on( "click", function() {
    runEffect();
  });
} );
