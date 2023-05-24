let projects = [
{
    "featured image": "./media-library/Snapshoot-Portfolio.png",
    "title": "Tonic",
    "categories": ["CANOPY", "FACEBOOK", "Back End Dev", "2015"],
    "description": "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    "technologies": ["HTML", "Ruby on rails", "CSS", "Javascript"],
    "live link": "#",
    "source link": "#"
},

{
    "featured image": "./media-library/Snapshoot-Portfolio1.png",
    "title": "Multi-Purpose Posts",
    "categories": ["CANOPY", "Back End Dev", "2015"],
    "description": "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    "technologies": ["HTML", "Ruby on rails", "CSS", "Javascript"],
    "live link": "#",
    "source link": "#"
},

{
    "featured image": "./media-library/Snapshoot-Portfolio2.png",
    "title": "Tonic",
    "categories": ["CANOPY", "Back End Dev", "2015"],
    "description": "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    "technologies": ["HTML", "Ruby on rails", "CSS", "Javascript"],
    "live link": "#",
    "source link": "#"
},

{
    "featured image": "./media-library/Snapshoot-Portfolio4.png",
    "title": "Tonic",
    "categories": ["CANOPY", "Back End Dev", "2015"],
    "description": "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    "technologies": ["HTML", "CSS", "Javascript"],
    "live link": "#",
    "source link": "#"
},

{
    "featured image": "./media-library/Snapshoot-Portfolio3.png",
    "title": "Multi-Purpose Posts",
    "categories": ["CANOPY", "Back End Dev", "2015"],
    "description": "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    "technologies": ["HTML", "Ruby on rails", "CSS", "Javascript"],
    "live link": "#",
    "source link": "#"
}
];
const numOfProject = document.querySelectorAll('.workSamples').length;
for (let index = 0; index < numOfProject; index++){
    const image = document.querySelectorAll('.workImages')[index];
    image.src = projects[index]['featured image'];

    const titleText = document.querySelectorAll('.workTitles')[index];
    titleText.textContent = projects[index].title;

    const metaCategory = document.querySelectorAll('.workMetadatas')[index];
    const numOfCategories =  metaCategory.querySelectorAll('.metaCategories').length;
    for (let indexOfCategory = 0; indexOfCategory < numOfCategories; indexOfCategory++){
        metaCategory.querySelectorAll('.metaCategories')[indexOfCategory].textContent = projects[index].categories[indexOfCategory];
    }

    document.querySelectorAll('.workDescriptions')[index].textContent = projects[index].description;

    const workTag = document.querySelectorAll('.workTags')[index];
    const numOfTags =  workTag.querySelectorAll('li').length;
    for (let indexOfTag = 0; indexOfTag < numOfTags; indexOfTag++){
        workTag.querySelectorAll('li')[indexOfTag].querySelector('a').textContent = projects[index].technologies[indexOfTag];
    }
}


// CONTROLS THE MOBILE DROPDOWN MENU
function toggleMobileMenu() {
  const menuBg = document.querySelector('#menuiconContainer');
  menuBg.classList.toggle('menudropdown');
}


