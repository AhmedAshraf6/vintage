/* Add active class on nav bar */
let currentlocation=location.href,    
    a =document.querySelectorAll('.nav-bar .nav-ul li a'),
    ul = document.querySelector('.nav-ul');

a.forEach(a =>{
    
   if(a.href===currentlocation){
       ul.querySelector('.active').classList.remove('active');
       a.classList='active';
   }
    
});

// Gallery Affect Onclick Image

document.addEventListener('click',(e)=>{
    
   if(e.target.className=='search-icon'||e.target.classList.contains('fa-search')){

          // Creat overlay Element
          let overlay = document.createElement('div');

          // Add class to overlay
          overlay.className='popup-overlay';

          // Append Overlay To body
          document.body.appendChild(overlay);  
       
          // creat Popup box
          let popupBox = document.createElement('div');

          // Add Class To The popup Box
          popupBox.className='popup-box';

          // create The img
          let popupImage = document.createElement('img');
       
          // check if it fontIcon
          if(e.target.classList.contains('fa-search')){
              popupImage.src = e.target.parentNode.parentNode.parentNode.children[0].children[0].src;
          }
          else{
                  popupImage.src = e.target.parentNode.parentNode.children[0].children[0].src;
          }
          // Append Image To popup Box
          popupBox.appendChild(popupImage);

          // Append popup Box to Body
          document.body.appendChild(popupBox);
   } 
    
   // Remove Overlay And Popup Box
    if(e.target.className=='popup-overlay'){
    e.target.remove();
    document.querySelector('.popup-box').remove();
    } 
    
});
 















