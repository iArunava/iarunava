/* HTML Elements */
let videoFrame;
let mpLowerUl;
let skillsList;
let aSkill;
let skillDetailsSection;

let selectedSkill;

let mpLowerUlList = [
    'Overview', 'Skills', 'Projects', 'Certifications', 'Contents', 'Publications',
    'Courses'
];

let skills = [
    'Machine Learning', 'Deep Learning', 'Algorithms', 'Python', 'Android Development',
    'Natural Language Processing', 'Computer Vision', 'Data Science',
    'Web Development', 'Mobile Applications', 'Data Structures',
    'Java', 'Bash', 'Linux', 'HTML5', 'Cascading Style Sheets (CSS)', 'JavaScript',
    'Node.js', 'JSON', 'C++', 'SQL', 'Bootstrap', 'jQuery', 'C', 'Ruby', 'Ruby on Rails',
    'Angular JS', 'React.js', 'Algirithm Analysis', 'Algorithm Design',
    'Search Algorithms', 'Android Studio', 'Express.js'
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

    // Changing the color
    element.style.color = '#8BC34A'
    if (selectedSkill !== undefined) selectedSkill.style.color = 'inherit';
    selectedSkill = element;

    // Showing Details
    skillDetailsSection.innerHTML = ``;
    skillDetailsSection.innerHTML = skillDetailsTemplate(skillName);

    new TypeIt('.skill-details-name', {
        speed: 80,
        breaklines: true,
        autostart: false
    });

    new TypeIt('.skill-status', {
        speed: 80,
        breakLines: false,
        autoStart: false
    });
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
