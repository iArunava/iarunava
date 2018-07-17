/* HTML Elements */
let videoFrame;
let mpLowerUl;
let skillsList;
let aSkill;
let skillDetailsSection;

let selectedSkill;

let skillNameTypeIt;

let mpLowerUlList = [
    'Overview', 'Skills', 'Projects', 'Certifications', 'Contents', 'Publications',
    'Courses'
];

$(document).ready(() => {
    //videoFrame = document.getElementById('id--video-frame');
    mpLowerUl = $('#id--overview-lower-ul');
    skillsList = $('#id--skills-left ul');
    skillDetailsSection = document.getElementById('id--skills-right');

    /* Setup UI */
    fillMpLowerUl();
    setUpSkillsList();

    aSkill = document.querySelector('#id--skills-left ul li a');
    /* Setup other necesseties */
    // setIframe(videoFrame);
});

const skillClicked = (element) => {
    let skillName = element.innerText;
    let prevSkillNameLength = 0;

    // Changing the color
    element.style.color = '#8BC34A'
    if (selectedSkill !== undefined) {
        selectedSkill.style.color = 'inherit';
        prevSkillNameLength = selectedSkill.innerHTML.length;
    }
    selectedSkill = element;

    // Showing Details
    skillDetailsSection.innerHTML = skillDetailsTemplate(skillName);

    /*
    if (skillNameTypeIt === undefined) {
        console.log('a');
        skillNameTypeIt = new TypeIt('.abcd', {
            speed: 50,
            deleteSpeed: 25,
            autoStart: false
        }, false);
        skillNameTypeIt.type(skillName);
        skillNameTypeIt.init();
        setTimeout(() => {
            //skillNameTypeIt.freeze();
        }, 50);
        } else {
        console.log(prevSkillNameLength);
        skillNameTypeIt//.options({speed: 700})
            .delete(prevSkillNameLength).type(skillName);
    }

    /*
    new TypeIt('.skill-status', {
        speed: 80,
        breakLines: false,
        autoStart: false
    });
    */
}

const setUpSkillsList = () => {
    for (let skill of skills) {
        skillsList.append("<li><a onclick='skillClicked(this)'> " + skill + " </a></li>")
    }
}

const fillMpLowerUl = () => {
    let active = '';

    for (let li of mpLowerUlList) {
        if (li.toLowerCase() == 'overview') {
            active = 'is-active';
        } else active = '';
        mpLowerUl.append("<li class='" + active + "'>" +
                         "<a href='#id--" + li.toLowerCase() + "'> " + li + " </a></li>");
    }
}

const setIframe = (iframe) => {
    let width = window.innerWidth;
    let height = window.innerHeight;

    iframe.setAttribute('height', height);
    iframe.setAttribute('width', width);
}
