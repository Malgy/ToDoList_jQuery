$(document).ready(function(){
    $('#button').click(function(){
        var toAdd = $('input[name=checkListItem]').val();
        var time = $('input[name=checkListTime]').val();
        $('.list').append('<div class="item">' + toAdd + ' - @' + time + '</div>');
    });
    $('#printbutton').click(function(){
      window.print();
    });
});
