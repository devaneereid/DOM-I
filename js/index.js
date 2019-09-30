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
    "h1": "DOM Is Awesome",
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
    "address" : "123 Way 456 Street Somewhere, USA",
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

// **NAV BAR
const anchorTags = document.querySelectorAll("a");
anchorTags[0].setAttribute('class', 'nav');
anchorTags[0].innerText = "Services"
anchorTags[1].setAttribute('class', 'nav');
anchorTags[1].innerText = "Product"
anchorTags[2].setAttribute('class', 'nav');
anchorTags[2].innerText = "Vision"
anchorTags[3].setAttribute('class', 'nav');
anchorTags[3].innerText = "Features"
anchorTags[4].setAttribute('class', 'nav');
anchorTags[4].innerText = "About"
anchorTags[5].setAttribute('class', 'nav');
anchorTags[5].innerText = "Contact"
anchorTags.forEach( element => {
  element.style.color= 'green';
}); 

// **CTA SECTION
let mainImg = document.querySelector("#cta-img");
mainImg.setAttribute('src', siteContent["cta"]["img-src"])

let mainTitle = document.querySelector('h1');
mainTitle.style.whiteSpace = 'pre';
mainTitle.textContent = 'DOM\nIs\nAwesome';

let button = document.querySelector('button')
button.textContent = "Get Started"

// **MAIN CONTENT
let midImg = document.querySelector("#middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let mainContent = document.querySelectorAll('.text-content')
mainContent[0].querySelector('h4').innerText = siteContent['main-content']['features-h4']
mainContent[0].querySelector('p').innerText = siteContent['main-content']['features-content']
mainContent[1].querySelector('h4').innerText = siteContent['main-content']['about-h4']
mainContent[1].querySelector('p').innerText = siteContent['main-content']['about-content']
mainContent[2].querySelector('h4').innerText = siteContent['main-content']['services-h4']
mainContent[2].querySelector('p').innerText = siteContent['main-content']['services-content']
mainContent[3].querySelector('h4').innerText = siteContent['main-content']['product-h4']
mainContent[3].querySelector('p').innerText = siteContent['main-content']['product-content']
mainContent[4].querySelector('h4').innerText = siteContent['main-content']['vision-h4']
mainContent[4].querySelector('p').innerText = siteContent['main-content']['vision-content']

// **Contact Section
let contactSection = document.querySelectorAll(".contact");
contactSection[0].querySelector('h4').innerHTML = siteContent['contact']['contact-h4']
contactSection[0].querySelector('p').innerText = siteContent['contact']['address']
contactSection[1].querySelector('p').innerText = siteContent['contact']['phone']
contactSection[2].querySelector('p').innerText = siteContent['contact']['address']

let footer = document.getElementById('footer')
footer.textContent= "Copyright Great Idea! 2018";
console.log(footer)

