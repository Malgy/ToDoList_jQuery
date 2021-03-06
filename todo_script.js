// jQuery starts here
$(document).ready(function(){ // calling the document and making sure it's ready for jQuery
  $('#button').click(function(){ // adding a click function to the button div
    // creating a jQuery variable to take the user input for objective
    var toAdd = $('input[name=checkListItem]').val();
    // creating a jQuery variable to take the user input for time
    var time = $('input[name=checkListTime]').val();
    // on click, add the objective and time to the list, titling is for the tooltip function (add title if need be)
    $('ol').append('<li>' + toAdd + ' - @' + time + '</li>');
    // on click, reset the textboxes so user has easier time adding more things to do
    $('input[name=checkListItem]').val('');
    $('input[name=checkListTime]').val('');
  });
  // $(document).tooltip({
  //   track:true,
  // }); // the title should show after each objective on the list
  $('#howitworks').accordion({collapsible: true, active: false}); // accordion effect on the how it works 'button'
  $(document).on('click', 'li', function(){ //on click of each objective, removes it from the list
    $(this).remove();
  });
  $('#printbutton').click(function(){ // on click of the print button, access the print function
    window.print();
  });
  //$('ol').selectable(); // expanding on this later. selecting the different objectives adds color and neatness
});
