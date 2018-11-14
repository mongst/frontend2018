

// greeting and welcoming alerts
alert("Hello! How are you?");

alert("Welcome to my <Code> Louisville Project!");


// hide|show js element

$( function() {
  function runEffect() {
    var selectedEffect = "slide";

    var options = {};
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
