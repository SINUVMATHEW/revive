$(".testimonial_slider_area").owlCarousel({
    autoplay: true,
    slideSpeed: 300,
    items:3,
    nav:true,
    navText:["<i class=\"fa-solid fa-arrow-left\"></i>","<i class='fa fa-arrow-right'></i>"],
    margin: 30,
    dots: false,
    center:true,
    dots:true,
    dotClass:"dot",
    dotsClass:"dots-container",
    rewind:true,
    loop:true,
    responsive:{
        320:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
})

$(".news_slider_area").owlCarousel({
    autoplay: true,
    slideSpeed: 300,
    items:3,
    margin: 30,
    dots: false,
    center:true,
    dots:true,
    dotClass:"dot",
    dotsClass:"dots-container",
    rewind:true,
    loop:true,
    responsive:{
        320:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
})


let emailform =document.getElementById("email-form");
emailform.addEventListener("submit",async function(e){
    e.preventDefault();
    let formData = new FormData(emailform);
    let email = formData.get("email");
    let mobile = formData.get("mobile");
    await fetch("https://busy-painted-glade.glitch.me/send-enquiry", {
        method: "POST",
        body: JSON.stringify({email,mobile}),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json()).then(data => {
        console.log(data);
        if(data.status === 200){
            alert("Thank you for subscribing to our newsletter");
        }
    })
})

