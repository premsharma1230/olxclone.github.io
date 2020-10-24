$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    //autoplay: true,
    nav:true,
    autoplayTimeout: 2000,
    smartSpeed: 1500,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

// scroll top

var mybutton = document.querySelector(".myBtn");
window.onscroll = function() {
    matrixFunction()
};

function matrixFunction() {
    if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

/// disable inspect

// window.oncontextmenu = function(){
//     return false;
// }


function myFnt() {
  var x = document.getElementById("Box_frst");
  if (x.style.display === "block") {
    x.style.display = "none";
    //  x.style.transform ="scale(1.2)";
    x.style.transition ="all .3s ease-in-out";
  } else {
    x.style.transition ="all .3s ease-in-out";
    x.style.display = "block";   //  x.style.transform ="scale(0)";
  }
}

//\

function mDropbox() {
  var b = document.getElementById("Categories");
  if (b.style.display === "block") {
    b.style.display = "none";
    b.style.transition ="all .3s ease-in-out";
  } else {
    b.style.transition ="all .3s ease-in-out";
    b.style.display = "block"; 
  }
}
function inpClick() {
  var b = document.getElementById("mDrpbx");
  if (b.style.display === "block") {
    b.style.display = "none";
    b.style.transition ="all .3s ease-in-out";
  } else {
    b.style.transition ="all .3s ease-in-out";
    b.style.display = "block"; 
  }
}


//popup/

 function myPopup() {
    var x = document.getElementById("main01");
    if (x.style.display === "block") {
      x.style.display = "none";
      //  x.style.transform ="scale(1.2)";
      x.style.transition ="all .3s ease-in-out";
    } else {
      x.style.transition ="all .3s ease-in-out";
      x.style.display = "block";
    }
  }

  // sticky
  window.onscroll = function() {
    mFun()
};
var header = document.querySelector(".myHeader");
var sticky = header.offsetTop;

function mFun() {
    if (window.pageYOffset > 200) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
};



// chatbox

function openForm() {
  document.getElementById("myForm").style.display = "block"; 
  document.getElementById("i").style.display ="none";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById("i").style.display ="block";
}



// prodcut//

function openProduct(productName) {
  var i;
  var x = document.getElementsByClassName("product");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(productName).style.display = "block";  
}

