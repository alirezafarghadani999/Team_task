a_element = document.querySelectorAll('a');
a_element.forEach(element => {
    url = element.getAttribute('href');
    if (!url.includes('http')){
        element.setAttribute('href', URL+url);
    }    
});

img_element = document.querySelectorAll('img');
img_element.forEach(element => {
    url = element.getAttribute('src');
    if (!url.includes('http')){
        element.setAttribute('src', URL+url);
    }    
});
form_element = document.querySelectorAll('form');
form_element.forEach(element => {
    url = element.getAttribute('action');
    if (!url.includes('http')){
        element.setAttribute('action', URL+url);
    }    
});

link_element = document.querySelectorAll('link');
link_element.forEach(element => {
    url = element.getAttribute('href');
    if (!url.includes('http')){
        element.setAttribute('href', URL+url);
    }    
});