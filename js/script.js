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
            elem.style.transform = `skewX(${diff*.1}deg)`; 
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
//         {img1:"./image/img15.jpg" , img2:"./image/img15.jpg"},
//         {img1:"./image/img16.jpg" , img2:"./image/img16.jpg"}
//     ]
    
//     var clutter="";
//     page2.forEach(function(data){
//         clutter+=` <div class="slide">
//         <div class="box">
//             <img src="${data.img1}">
//             <img src="${data.img2}">
//         </div>
//         <a target="_blank" href="https://nilendrapatel1317.github.io/this-is-digital/">visit project  <i class="ri-share-forward-fill"></i></a>
//     </div>`
//     })
//     document.querySelector("#page2 #projects").innerHTML=clutter;
// }
// projects();





// page 5

var page5=[
    {image:"./gif/img1.gif",name:"3D Cube Rotation effect"},
    {image:"./gif/img2.gif",name:"Bubble moving effect"},
    {image:"./gif/img3.gif",name:"3D Cube Hover effect"}
]

var clutter="";
page5.forEach(function(data){
    clutter +=`<div class="box">
                    <div class="models">
                    <img src="${data.image}" alt="">
                    </div>
                    <div class="text">
                        <h2>${data.name}</h2>
                        <button>watch <i class="ri-share-forward-fill"></i></button>
                    </div>
                </div>`
})
document.querySelector("#page5 #bottom").innerHTML=clutter;