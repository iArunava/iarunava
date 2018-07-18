/* HTML Elements */
let videoFrame;
let mpLowerUl;
let skillsList;
let aSkill;
let skillDetailsSection;

let selectedSkill;
let skillsRightNs;
let skillsRightS;
let skillDetailsName;
let theBar;
let skillDetailStatus;
let skillProjectList;

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
    skillsRightS = $('#id--skills-right-s');
    skillsRightNs = $('#id--skills-right-ns');
    skillDetailsName = $('.skill-details-name');
    theBar = $('.the-bar');
    skillDetailStatus = $('.skill-status');
    skillProjectList = $('.skill-details-projects-list');

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

    let statusNum = skillStatusDict[skillName];
    if (statusNum === undefined) statusNum = 2;

    let status = skillStatus[statusNum]
    let statusColor = skillColors[statusNum];
    let statusWidth = (statusNum / Object.keys(skillStatus).length) * 100;

    if (selectedSkill === undefined) {
        skillsRightS.css('display', 'block');
        skillsRightNs.css('display', 'none');
    }

    // Changing the color
    element.style.color = '#8BC34A'
    if (selectedSkill !== undefined) {
        selectedSkill.style.color = 'inherit';
        prevSkillNameLength = selectedSkill.innerHTML.length;
    }
    selectedSkill = element;

    // Showing Details
    skillDetailsName.html(skillName);
    theBar.css('background-color', statusColor);
    theBar.css('width', statusWidth.toString() + '%');
    skillDetailStatus.html(status);
    skillProjectList.html(`
        ${returnProjectsFromSkill(skillName).join(0).split(0).map((item, i) => `
            <li><a> ${item} </a></li>
            `).join('')}
    `);

    skillNameTypeIt = new TypeIt(skillDetailsName, {
        speed : 50,
        autoStart : false
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
