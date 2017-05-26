// jQuery starts here
$(document).ready(function(){ // calling the document and making sure it's ready for jQuery
    $('#button').click(function(){ // adding a click function to the button div
        // creating a jQuery variable to take the user input for objective
        var toAdd = $('input[name=checkListItem]').val();
        // creating a jQuery variable to take the user input for time
        var time = $('input[name=checkListTime]').val();
        $('ol').append('<li>' + toAdd + ' - @' + time + '</li>'); // on click, add the objective and time to the list
    });
    $('#howitworks').accordion({collapsible: true, active: false}); // accordion effect on the how it works 'button'
    $('#printbutton').click(function(){ // on click of the print button, access the print function
      window.print();
    });
    $('ol').selectable(); // expanding on this later. selecting the different objectives adds color and neatness
});
