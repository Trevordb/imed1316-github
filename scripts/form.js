// A $( document ).ready() block.
$(document).ready(function () {
  //console.log("Trevor Barron Testing");
  //alert('test');

$(document).on('change', '#t-shirt', chkTshirt);
  
  //chkTshirt function
  function chkTshirt() {
    var tshirt = $('#t-shirt').val();
    //alert(tshirt);
    
    // begin if tshirt
    if (tshirt == 'CUSTOM') {
      //alert('works');
      $('#custom').removeAttr('disabled'); //remove disable
    $("#custom").attr('required', true);
    }//end if tshirt
    else {
      $("#custom").attr('disabled', true); //disabled again
      $("custom").val(''); //set value to empty
      $('#custom').removeAttr('required'); //remove required
    }
  } // end of chkTshirt function
  
});

