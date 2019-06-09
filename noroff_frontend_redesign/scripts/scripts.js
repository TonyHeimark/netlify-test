// contains the entire encryption animation process for it to be easier to use with any element and text.
const encryptionAnimation = (textToBeAnimated, targetElement, speed = 50) => {
    const container = document.getElementById(targetElement);
    let i = 0;
    let position = 0;
    const binary = '1010101010';

// runs the decryption process by decreasing the length of the binary string and increasing the length of the ordinary string.
    const encryption = (text) => {
        const headline = text;
        setTimeout(() =>{ 
            i++;
            let currentText = headline.substr(0, i);
            currentText += generateBinary(headline.length - i);

            container.innerHTML = currentText;
            position = i/headline.length;

            if(position < 1) {
                encryption(text)
            }
            else{
                clearTimeout();
            }
        },  speed);
    }

// creates at random binary string;
    const generateBinary = (charCount) => {
        let result = '';
    
        for(let i = 0; i < charCount; i++) {
            if(i % 5 == 0) {
                result += ' '
            } else {
                result += binary.charAt(Math.floor(Math.random() * binary.length));
            }
        }

        return result;
    }

    encryption(textToBeAnimated);
}

 // You can call this function with the text you want to appear with the encrypted animation,
 // and the id of the target HTML element that should contain the text.
 // you can provide a number as the third property to choose an animation speed, the default is 50ms

// encryptionAnimation("Frontend-Utvikling", "headline");
// encryptionAnimation("Frontend", "headline2", 150);
// encryptionAnimation("Lorem Ipy thitersions of Lorem Ipsum", "encrypt", 100);



 // Slideshow.
    let bannerStatus = 1;
    let bannerTimer = 15000;


    const bannerLoop = () => {
        if(bannerStatus === 1){
            document.getElementById("imgban2").style.opacity = "0";

            setTimeout(function (){
                document.getElementById("imgban1").style.right = "0px";
                document.getElementById("imgban1").style.zIndex = "9";
                document.getElementById("imgban2").style.right = "-100%";
                document.getElementById("imgban2").style.zIndex = "10";
                document.getElementById("imgban3").style.right = "100%";
                document.getElementById("imgban3").style.zIndex = "5";
            }, 200);

            setTimeout(function (){
                document.getElementById("imgban2").style.opacity = "1";

                //checking if it's the english page or not. calling the english heading if it is.
                if(location.pathname.includes("en-index")){
                    encryptionAnimation("Frontend-Development", "banner1-header");
                } else {
                    encryptionAnimation("Frontend-Utvikling", "banner1-header");
                }
                
                document.getElementById("banner2-header").innerHTML = " ";
            }, 1000);

            bannerStatus = 2;
        }

        else if(bannerStatus === 2){
            document.getElementById("imgban3").style.opacity = "0";

            setTimeout(function (){
                document.getElementById("imgban2").style.right = "0px";
                document.getElementById("imgban2").style.zIndex = "9";
                document.getElementById("imgban3").style.right = "-100%";
                document.getElementById("imgban3").style.zIndex = "10";
                document.getElementById("imgban1").style.right = "100%";
                document.getElementById("imgban1").style.zIndex = "5";
            }, 200);

            setTimeout(function (){
                document.getElementById("imgban3").style.opacity = "1";

                //checking if it's the english page or not. calling the english heading if it is.
                if(location.pathname.includes("en-index")){
                    encryptionAnimation("Programme objectives", "banner2-header");
                } else {
                    encryptionAnimation("Studiets Oppbygning", "banner2-header");
                }
        
                document.getElementById("banner3-header").innerHTML = " ";
            }, 1000);

            bannerStatus = 3;
        }

        else if(bannerStatus === 3){
            document.getElementById("imgban1").style.opacity = "0";

            setTimeout(function (){
                document.getElementById("imgban3").style.right = "0px";
                document.getElementById("imgban3").style.zIndex = "9";
                document.getElementById("imgban1").style.right = "-100%";
                document.getElementById("imgban1").style.zIndex = "10";
                document.getElementById("imgban2").style.right = "100%";
                document.getElementById("imgban2").style.zIndex = "5";
            }, 200);

            setTimeout(function (){
                document.getElementById("imgban1").style.opacity = "1";

                //checking if it's the english page or not. calling the english heading if it is.
                if(location.pathname.includes("en-index")){
                    encryptionAnimation("Job opportunities", "banner3-header");
                } else {
                    encryptionAnimation("Jobbmuligheter", "banner3-header");
                }

                document.getElementById("banner3-header").innerHTML = " ";
            }, 1000);

            bannerStatus = 1;
        }
    }

    window.onload = function() {
        bannerLoop();
    }

    const startBannerLoop = setInterval(() => {
        bannerLoop();
    }, bannerTimer);

    
 // Navigation  toggle dropdown and changing background color on scroll.
function toggleNav (x) {
                let menu = document.getElementById(x), maxH="100vh";
                if (menu.style.height == maxH) {
                    menu.style.height = "0vh";
                }
                else {
                    menu.style.height = maxH;
                } 
            }
            
            function changeMenuIcon(x) {
                    x.classList.toggle("change");
            }
            
            
                window.onscroll = function(){
                    if(window.pageYOffset > 1){
                        document.getElementById("main-nav").style.background = "#FF2F02";
                    }
                    else{
                        document.getElementById("main-nav").style.background = "transparent";
                    }
                    
                }

// toggle accordions.

const accordionOne = document.getElementById("accordion-one");
const accordionTwo = document.getElementById("accordion-two");
const topicList = document.getElementById("topic-list");
const learnList = document.getElementById("learn-list");

accordionOne.addEventListener("click", () => {
    if(topicList.style.display === "none"){
        topicList.style.display = "block";
    } else {
        topicList.style.display = "none";
    }
});

accordionTwo.addEventListener("click", () => {
    if(learnList.style.display === "none"){
        learnList.style.display = "block";
    } else {
        learnList.style.display = "none";
    }
});

// Google maps location toggle.

const goToStavanger = () =>{
    let location = "Noroff%20Stavanger";
    document.getElementById("gmap_canvas").src = "https://maps.google.com/maps?q="+ location +"&t=&ie=UTF8&iwloc=&output=embed"
}

const goToBergen = () =>{
    let location = "Noroff%20Bergen";
    document.getElementById("gmap_canvas").src = "https://maps.google.com/maps?q="+ location +"&t=&ie=UTF8&iwloc=&output=embed"
}

const goToKristiansand = () =>{
    let location = "Noroff%20Kristiansand";
    document.getElementById("gmap_canvas").src = "https://maps.google.com/maps?q="+ location +"&t=&ie=UTF8&iwloc=&output=embed"
}

const goToOslo = () =>{
    let location = "Noroff%20Oslo";
    document.getElementById("gmap_canvas").src = "https://maps.google.com/maps?q="+ location +"&t=&ie=UTF8&iwloc=&output=embed"
}
             
   
//check if the english page is open
