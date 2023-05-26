let projects = [
{
    "featured image": "./media-library/Snapshoot-Portfolio.png",
    "title": "Tonic",
    "categories": ["CANOPY", "FACEBOOK", "Back End Dev", "2015"],
    "description": "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    "technologies": ["HTML", "Ruby on rails", "CSS", "Javascript", "Bootstrap"],
    "live link": "#",
    "source link": "#"
},

{
    "featured image": "./media-library/Snapshoot-Portfolio1.png",
    "title": "Multi-Purpose Posts",
    "categories": ["CANOPY", "Back End Dev", "2015"],
    "description": "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    "technologies": ["HTML", "Ruby on rails", "CSS", "Javascript", "Bootstrap"],
    "live link": "#",
    "source link": "#"
},

{
    "featured image": "./media-library/Snapshoot-Portfolio2.png",
    "title": "Tonic",
    "categories": ["CANOPY", "Back End Dev", "2015"],
    "description": "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    "technologies": ["HTML", "Ruby on rails", "CSS", "Javascript", "Bootstrap"],
    "live link": "#",
    "source link": "#"
},

{
    "featured image": "./media-library/Snapshoot-Portfolio4.png",
    "title": "Tonic",
    "categories": ["CANOPY", "Back End Dev", "2015"],
    "description": "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    "technologies": ["HTML", "CSS", "Javascript", "Bootstrap"],
    "live link": "#",
    "source link": "#"
},

{
    "featured image": "./media-library/Snapshoot-Portfolio3.png",
    "title": "Multi-Purpose Posts",
    "categories": ["CANOPY", "Back End Dev", "2015"],
    "description": "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    "technologies": ["HTML", "Ruby on rails", "CSS", "Javascript", "Bootstrap"],
    "live link": "#",
    "source link": "#"
}
];

const numOfProject = document.querySelectorAll('.workSamples').length;

// PULLS AND SUPPLIES PROJECT DETAILS
function getProjectDetails(containerIndex, dataIndex){
    const image = document.querySelectorAll('.workImages')[containerIndex];
    image.src = projects[dataIndex]['featured image'];

    const titleText = document.querySelectorAll('.workTitles')[containerIndex];
    titleText.textContent = projects[dataIndex].title;

    const metaCategory = document.querySelectorAll('.workMetadatas')[containerIndex];
    const numOfCategories =  metaCategory.querySelectorAll('.metaCategories').length;

    let indexOfCat = 0;
    // FOR MODAL: skip first metadata in project one for modal
    if (containerIndex === numOfProject && dataIndex === 0){
        indexOfCat = 1;
    }

    for (let indexOfCategory = 0; indexOfCategory < numOfCategories; indexOfCategory++){
        metaCategory.querySelectorAll('.metaCategories')[indexOfCategory].textContent = projects[dataIndex].categories[indexOfCat];
        indexOfCat++;
    }

    const workDescription = document.querySelectorAll('.workDescriptions')[containerIndex];

    // FOR MODAL: display a monger text in description instead of project's description
    if (containerIndex === numOfProject){
        workDescription.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.";
    }
    else {
    workDescription.textContent = projects[dataIndex].description;
    }

    const workTag = document.querySelectorAll('.workTags')[containerIndex];
    const numOfTags =  workTag.querySelectorAll('li').length;
    for (let indexOfTag = 0; indexOfTag < numOfTags; indexOfTag++){

        // checks for empty lists and hides container
        if (!projects[dataIndex].technologies[indexOfTag]){
            workTag.querySelectorAll('li')[indexOfTag].style.display = "none";
        }
        else {
        workTag.querySelectorAll('li')[indexOfTag].querySelector('a').textContent = projects[dataIndex].technologies[indexOfTag];
        }
    }
}

// SUPPLIES INDEX FOR PROJECT CARD DETAILS IN ASCENDING ORDER
for (let index = 0; index < numOfProject; index++){
    getProjectDetails(index, index);
}

// HANDLES MODAL POPUP TOGGLE
function activateModalPopup(event){
    event.preventDefault();
    const modalWindow = document.querySelector('.modalSection');
    modalWindow.classList.add('modalActivated');

    const closest = event.currentTarget.closest('.workSamples');
    const workSamplesArray = document.querySelectorAll('.workSamples');
    if (closest) {
        
        for(let ind = 0; ind < numOfProject; ind++){
            if (workSamplesArray[ind] === closest){
                getProjectDetails(numOfProject, ind);
                break;
            }
        }
    }
}

function deactivateModalPopup(){
    const modalWindow = document.querySelector('.modalSection');
    modalWindow.classList.remove('modalActivated');
}

// CONTROLS THE MOBILE DROPDOWN MENU
function toggleMobileMenu() {
  const menuBg = document.querySelector('#menuiconContainer');
  menuBg.classList.toggle('menudropdown');
}


// VALIDATE CONTACT FORM EMAIL VALUE


// validate that email is in lowercase
function validateForm() {
    const errorEmail = document.forms["contactForm"]["email"].nextElementSibling;
    const emailValue = document.forms["contactForm"]["email"].value;
    const email = document.forms["contactForm"]["email"];
    if (emailValue !== emailValue.toLowerCase()) {
      errorEmail.className = "error active";
      errorEmail.textContent = "Oops! Email should be in lower case*";
      return false;
    }
  }



