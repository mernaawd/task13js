var btns = document.getElementById("button")
btns.addEventListener("click", function(){
    var childWIN = window.open('', 'sub_Window', 'width=500,height=300');
    childWIN.document.write('<h1>Sub Window</h1>');
    setTimeout(function() {
        childWIN.close();
      }, 5000);
})