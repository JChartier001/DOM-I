const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM\n Is\n Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street\n Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//adding text to nav links
const navLinks = document.querySelectorAll('a');
console.log(navLinks);
navLinks.forEach((element, i) => {
 element.textContent = siteContent.nav[`nav-item-${i+1}`];
});

//change text color to green
navLinks.forEach((element) => {
    element.style.color = "green";
});

//adding text to h1
const title = document.querySelector('.cta-text h1');
title.style.whiteSpace = "pre";
title.textContent = siteContent['cta']['h1'];

//adding text to button
const buttonText = document.querySelector('.cta-text button');

buttonText.textContent = siteContent.cta.button;

//changing image source
const ctaImage = document.querySelector('#cta-img');
ctaImage.src = siteContent.cta["img-src"];


//adding classes to h4
const middleText = document.querySelectorAll('h4');

middleText[0].classList.add("features");
middleText[1].classList.add("about");
middleText[2].classList.add("services");
middleText[3].classList.add("product")
middleText[4].classList.add("vision")

//adding title to h4
const featureTitle = document.querySelector(".features")
featureTitle.textContent = siteContent["main-content"]["features-h4"];

const aboutTitle = document.querySelector(".about");
aboutTitle.textContent = siteContent["main-content"]["about-h4"];

const servicesTitle = document.querySelector(".services")
servicesTitle.textContent = siteContent["main-content"]["services-h4"];

const productTitle = document.querySelector(".product")
productTitle.textContent = siteContent["main-content"]["product-h4"];

const visionTitle = document.querySelector(".vision")
visionTitle.textContent = siteContent["main-content"]["vision-h4"];

featureTitle.style.textDecorationLine = "underline";
featureTitle.style.textDecorationStyle = "wavy";
featureTitle.style.fontSize = "2.0rem";
featureTitle.style.paddingBottom = "3%";

aboutTitle.style.textDecorationLine = "underline";
aboutTitle.style.textDecorationStyle = "wavy";
aboutTitle.style.fontSize = "2.0rem";
aboutTitle.style.paddingBottom = "3%";


servicesTitle.style.textDecorationLine = "underline";
servicesTitle.style.textDecorationStyle = "wavy";
servicesTitle.style.fontSize = "2.0rem";
servicesTitle.style.paddingBottom = "3%";

productTitle.style.textDecorationLine = "underline";
productTitle.style.textDecorationStyle = "wavy";
productTitle.style.fontSize = "2.0rem";
productTitle.style.paddingBottom = "3%";

visionTitle.style.textDecorationLine = "underline";
visionTitle.style.textDecorationStyle = "wavy";
visionTitle.style.fontSize = "2.0rem";
visionTitle.style.paddingBottom = "3%";

//adding classes to middletext paragraph
const middleTextP = document.querySelectorAll('p');

middleTextP[0].classList.add("featuresParagraph");
middleTextP[1].classList.add("aboutParagraph");
middleTextP[2].classList.add("servicesParagraph");
middleTextP[3].classList.add("productParagraph");
middleTextP[4].classList.add("visionParagraph");

//adding text to middle text paragraphs
const featPara = document.querySelector(".featuresParagraph");
featPara.textContent = siteContent["main-content"]["features-content"];

const aboutPara = document.querySelector(".aboutParagraph");
aboutPara.textContent = siteContent["main-content"]["about-content"];

const servPara = document.querySelector(".servicesParagraph");
servPara.textContent = siteContent["main-content"]["services-content"];

const prodPara = document.querySelector(".productParagraph");
prodPara.textContent = siteContent["main-content"]["product-content"];

const visionPara = document.querySelector(".visionParagraph");
visionPara.textContent = siteContent["main-content"]["vision-content"];

//changed img source
const middleImg = document.querySelector(".middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];

//added text to contact h4
const contactTitle = document.querySelector('.contact h4');
contactTitle.textContent = siteContent.contact["contact-h4"];

//added text to contact paragraphs
const contactInfo = Array.from(document.querySelectorAll(".contact p"));
contactInfo[0].textContent = siteContent.contact.address;
contactInfo[1].textContent = siteContent.contact.phone;
contactInfo[2].textContent = siteContent.contact.email;

contactInfo[0].style.whiteSpace = "pre";

const footer = document.querySelector('footer p');
footer.textContent = "Copyright Great Idea! 2018";

//adding nav
const navNode = document.createElement('a');
const navText = document.createTextNode("Gallery");
navNode.appendChild(navText);
document.querySelector("nav").appendChild(navNode);

const nav = document.querySelector('nav');
const navText2 = document.createTextNode("Blog");
document.querySelector("nav").prepend(navText2);
