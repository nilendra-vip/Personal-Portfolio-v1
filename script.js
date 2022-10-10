function slideCircle(){
    document.querySelectorAll(".slide .box")
        .forEach(function(slide){
            slide.addEventListener("mousemove", function(dets){
                var dim = slide.getBoundingClientRect();
                this.children[1].style.clipPath = `circle(15% at ${dets.clientX-dim.left}px ${dets.clientY-dim.top}px)`;
            });

            slide.addEventListener("mouseleave", function(dets){
                var dim = slide.getBoundingClientRect();
                this.children[1].style.clipPath = `circle(0% at ${dets.clientX-dim.left}px ${dets.clientY-dim.top}px)`;
            });
        })
}

function slidesSkewMaker(){
    
    var dim = document.querySelector(".slide")
    .getBoundingClientRect();

    var prev = dim.left;

    document.querySelector("#projects")
    .addEventListener("scroll", function(){
        var dim2 = document.querySelector(".slide")
        .getBoundingClientRect();
        var diff = prev - dim2.left;
        document.querySelectorAll(".slide")
        .forEach(function(elem){
            elem.style.transform = `skewX(${diff*.2}deg)`; 
        });
        prev = dim2.left;
    })
}

function loco(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });    
}

loco();
slidesSkewMaker();
slideCircle();


// ------------------------------------------------------------------------------

// function projects(){
//     var page2=[
//         {img1:"./image/img1.jpg" , img2:"./image/img1.jpg"},
//         {img1:"./image/img2.jpg" , img2:"./image/img2.jpg"},
//         {img1:"./image/img3.jpg" , img2:"./image/img3.jpg"},
//         {img1:"./image/img4.jpg" , img2:"./image/img4.jpg"},
//         {img1:"./image/img5.jpg" , img2:"./image/img5.jpg"},
//         {img1:"./image/img6.jpg" , img2:"./image/img6.jpg"},
//         {img1:"./image/img7.jpg" , img2:"./image/img7.jpg"},
//         {img1:"./image/img8.jpg" , img2:"./image/img8.jpg"},
//         {img1:"./image/img9.jpg" , img2:"./image/img9.jpg"},
//         {img1:"./image/img10.jpg" , img2:"./image/img10.jpg"},
//         {img1:"./image/img11.jpg" , img2:"./image/img11.jpg"},
//         {img1:"./image/img12.jpg" , img2:"./image/img2.jpg"},
//         {img1:"./image/img13.jpg" , img2:"./image/img14.jpg"},
//         {img1:"./image/img14.jpg" , img2:"./image/img14.jpg"},
//         {img1:"./image/img15.jpg" , img2:"./image/img15.jpg"}
//     ]
    
//     var clutter="";
//     page2.forEach(function(data){
//         clutter+=`<div class="slide">
//                         <img src="${data.img1}">
//                         <img src="${data.img2}.jpg">
//                     </div>`
//     })
//     document.querySelector("#page2 #projects").innerHTML=clutter;
// }
// projects();