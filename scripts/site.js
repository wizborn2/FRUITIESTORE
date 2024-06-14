/*function ClearForm(){
    alert ('You clicked clear');
  }*/
// reset the value to an empty cell)
    // function ClearForm(){
    //     document.getElementById("fullname").value = '';    
    // }
    //In order not to keep repeating the function for each input
    function ClearForm(){
        document.getElementById("contactForm").reset = ''; 
    }
     //Both JQuery and Js code can be stored in Js file
     function hidePTags() {
        let ptags = document.getElementsByTagName("p");
        for (let item of ptags) {
          /*The two lines below are is for JavaScript
          /*item.style.visibility = "hidden"; //removes element, leaves space
          //item.style.display = "none"; //removes element and space
        }*/
          /* The two lines below are for jquery. The dollar sign denotes belonging to jquery:
          //item.style.visibility = "hidden"; //removes element, leaves space*/
          item.style.display = "none"; //removes element and space
        }
      }
      //This syntax below gives me less control. When hidden, it is hidden.
      //This is also done with minimal coding. Refresh the page to get the p lines back.

      $("#jquerybtn").click(function () {
        $("p").hide();
      })   
    