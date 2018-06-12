

           // Get the modal
           var modal = document.getElementById('myModal');

           // Get the image and insert it inside the modal - use its "alt" text as a caption
           var modalImg = document.getElementById("img01");
           var captionText = document.getElementById("caption");

        //    var img = document.getElementById('index-img-01');
            var img = document.getElementsByClassName("card-image");
            var myvideo = document.getElementById("myvideo");
           console.log("img is:",img);
            // document.getElementsByTagName('img').onclick=function(){
                for(let i=0; i<img.length; i++){
                    img[i].onclick = function(){
                        modal.style.display = "block";
                        console.log("modal.style.display:",modal.style.display)
                        modalImg.src = this.src;
                        captionText.innerHTML = this.alt;
                        myvideo.style.display="none";
                    }
                }


           // Get the <span> element that closes the modal
           var span = document.getElementsByClassName("close")[0];

           // When the user clicks on <span> (x), close the modal
           span.onclick = function() { 
           modal.style.display = "none";
           myvideo.style.display="block";
           }   







