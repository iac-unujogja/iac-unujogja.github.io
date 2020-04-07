// untuk membuat lightbox

const lightBoxContainer=document.querySelector(".lightbox");
const lightboxImage=document.querySelector(".lightbox-img");
const counter=document.querySelector(".lightbox-counter");
const prevButton=document.querySelector(".prev");
const nextButton=document.querySelector(".next");
const lightboxText=document.querySelector(".lightbox-text");
const portfolioItems=document.querySelector(".portfolio-items").children;
let index;
let imgSrc;




 lightBoxContainer.addEventListener("click",function(){
 	if(event.target!==lightboxImage && event.target!==prevButton && event.target!==nextButton){
 		lightBox();
 	}

 })


 for(let i=0; i<portfolioItems.length; i++){
 	portfolioItems[i].querySelector(".fa").addEventListener("click",function(){
 		index=i;
 		changeImage();
 		lightBox();

 	})
 
 }

 function next(){
 	if(index==portfolioItems.length-1){
 		index=0
 	}
 	else{
 		index++;
 	}
 	changeImage();

 }

function prev(){
	if(index==0){
	   index=portfolioItems.length-1;
	}
	else{
		index--;
	}
	changeImage();
}


 
 function lightBox(){
    lightBoxContainer.classList.toggle("open");
 }

 function changeImage(){
  	imgSrc=portfolioItems[index].querySelector("img").getAttribute("src");
 	lightboxImage.src=imgSrc;
 	counter.innerHTML=(index+1)+" of "+ portfolioItems.length;
 	lightboxText.innerHTML=portfolioItems[index].querySelector("h5").innerHTML;

 }
 	