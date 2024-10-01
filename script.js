const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
// image comes after hovering text
var loc = document.querySelector(".econt")
var fixed = document.querySelector(".fixed-image")
loc.addEventListener("mouseenter",function(){
    fixed.style.display = "block"

})
loc.addEventListener("mouseleave",function(){
    fixed.style.display = "none"

})
var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
      var image = e.getAttribute("data-image")
      fixed.style.backgroundImage = `url(${image})`
          
    })
})
// effect end here
document.getElementById("design-btn").addEventListener("click",function(event){
  event.preventDefault();
  document.getElementById("pic").src="images/pic1.AVIF";
  document.getElementById("text").innerText="Our team works with our clients to refine an idea  and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings."
})
document.getElementById("project-btn").addEventListener("click",function(event){
  event.preventDefault();
  document.getElementById("pic").src="images/pic2.AVIF";
  document.getElementById("text").innerText="Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need."
})
document.getElementById("execution-btn").addEventListener("click",function(event){
  event.preventDefault();
  document.getElementById("pic").src="images/pic3.AVIF";
  document.getElementById("text").innerText="We're with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience."
  
});
let swiper = new Swiper(".mySwiper", {
  watchSlidesProgress: true,
  slidesPerView: 3,
});