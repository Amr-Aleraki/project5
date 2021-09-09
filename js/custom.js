
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

$(document).ready(function (){
       
    let navsearch = $(".sear");
    navsearch.focus(function() {
           $(this).removeAttr('placeholder')
    }).blur(function() {
              $(this).attr('placeholder','search smartcode......')
    });

});



///////////////////////////
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  ///////////2/////////////
  function mytwo() {
    document.getElementById("myDrop").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.drop')) {
      var dropd = document.getElementsByClassName("dropd");
      var i;
      for (i = 0; i < dropd.length; i++) {
        var openDropd = dropd[i];
        if (openDropd.classList.contains('show')) {
          openDropd.classList.remove('show');
        }
      }
    }
  }


  ///////////////////3////////////////
  function mythree() {
    document.getElementById("myop").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.op')) {
      var dropd = document.getElementsByClassName("opd");
      var i;
      for (i = 0; i < dropd.length; i++) {
        var openopd = dropd[i];
        if (openopd.classList.contains('show')) {
          openopd.classList.remove('show');
        }
      }
    }
  }

///////////////////close icon//////////////
$("#k1").on('click', function() {
  $(this).show();
  $("#k2, #k3").show();
  $("#k1").show();
});

$("#k2").on('click', function() {
  $(this).show();
  $("#k1, #k3").show();
  $("#k2").show();
});

$("#k3").on('click', function() {
  $(this).show();
  $("#k1, #k2").show();
  $("#k3").show();
});


/***********carsoul******* */
