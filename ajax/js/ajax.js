(function(){
   var btn = document.getElementById("request");
   var bio = document.getElementById("bio");

   //set up a request
   var request = new XMLHttpRequest();

   //keep track of the request
   request.onreadystatechange = function(){
       if(request.readyState ===4){
           bio.style.border = '1px solid black';
           if(request.status ===200){
               bio.innerHTML = request.response;
           }else{
               bio.innerHTML = 'An error is occurred' + request.status + " " + request.statusText;
           }
       }
   }

   //specify the type of request
   request.open('Get', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/Bio.txt');

   //register an event
   btn.addEventListener('click',function(){
       this.style.display ='none';
       request.send();
   });


})();