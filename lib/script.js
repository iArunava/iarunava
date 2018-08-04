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

let selectedCert;
let certList;
let certName;
let certAuth;
let certLicNo;
let certFrom;
let certTo;
let certURL;
let certVer;
let certImg;
let certSee;
let certModal;
let certFillUpEles;

let projList;
let projName;
let projDesc;
let projSkills;
let projCode;
let projProj;
let projDemo;
let projELes;
let projPrev;

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

    certList = $('#id--all-certs-list');
    certName = $('#id--cert-name');
    certAuth = $('#id--cert-auth');
    certLic = $('#id--license');
    certFrom = $('#id--cert-from');
    certTo = $('#id--cert-to');
    certURL = $('#id--cert-url');
    certVer = $('#id--cert-verify');
    certImg = $('#id--cert-image');
    certSee = $('#id--see-cert');
    certModal = $('#id--cert-modal');
    certClose = $('#id--cert-img-close');
    certFillUpEles = [certName, certAuth, certLic, certFrom, certTo, certURL];

    projNs = $('#id--proj-right-ns');
    projS = $('#id--proj-right-s');
    projList = $('#id--proj-list');
    projName = $('#id--proj-name');
    projDesc = $('#id--proj-desc');
    projSkills = $('#id--proj-skills');
    projCode = $('#id--see-code');
    projProj = $('#id--see-proj');
    projDemo = $('#id--see-demo');
    projELes = [projName, projDesc];

    /* Setup UI */
    fillMpLowerUl();
    setUpSkillsList();
    fillCertsList();
    fillProjectsList();

    aSkill = document.querySelector('#id--skills-left ul li a');
    /* Setup other necesseties */
    // setIframe(videoFrame);
    setUpOnClicks();
});

const projClicked = (element) => {
    let pName = element.innerText;
    let pDesc = projects[pName][DESP];
    let pSkills = projects[pName][SKILLS_USED];
    let pCode = projects[pName][CODE];
    let pProj = projects[pName][PROJECT];
    let pVid = projects[pName][VID];
    let pList = [pName, pDesc];

    if (projPrev === undefined) {
        projNs.css('display', 'none');
        projS.css('display', 'block');
    }

    toggleColors(element, projPrev);
    projPrev = element;

    for (let i = 0; i <= 1; ++i) {
        new TypeIt(projELes[i], {
            speed: 30,
            cursor: (i == 0 ? true : false),
            autoStart: false
        }).type(pList[i]);
    }

    projCode.attr('href', pCode);
    projProj.attr('href', pProj);
    //if (pVid === undefined && projDemo.hasClass('is-')) toggleSwitch(projDemo);
    console.log(pVid);
    if (pVid === undefined) {
        projDemo.removeAttr('href').attr('disabled', true);
    } else projDemo.removeAttr('disabled').attr('href', pVid);
}

const fillProjectsList = () => {
    for (let project in projects) {
        projList.append("<li><a onclick='projClicked(this)'> " + project + " </a></li>");
    }
}

const setUpOnClicks = () => {
    certSee.on('click', () => {
        certModal.addClass('is-active');
    });

    certClose.on('click', () => {
        certModal.removeClass('is-active');
    });

}

const certClicked = (element) => {
    let cName = element.innerText;
    let cAuth = certifications[cName][CERT_AUTH];
    let cLic = certifications[cName][LIC_NO];
    let cFrom = certifications[cName][FROM];
    let cTo = certifications[cName][TO];
    let cUrl = certifications[cName][CERT_URL];
    let cImg = certifications[cName][IMG_LINK];
    let cAllVals = [cName, cAuth, cLic, cFrom, cTo, cUrl];

    toggleColors(element, selectedCert);
    selectedCert = element;

    for (let i = 0; i <= cAllVals.length; ++i) {
        new TypeIt(certFillUpEles[i], {
            speed: 30,
            cursor: false,
            autoStart: false
        }).type(cAllVals[i]);
    }

    certVer.attr('href', cUrl);
    certVer.attr('target', '_blank');
    certImg.attr('src', './assets/' + cImg);
}

const fillCertsList = () => {
    for (let cert in certifications) {
        certList.append("<li><a onclick='certClicked(this)'> " + cert + " </a></li>");
    }
}

const skillClicked = (element) => {
    let skillName = element.innerText;

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
    toggleColors(element, selectedSkill);
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

const toggleColors = (ele1, ele2) => {
    ele1.style.color = THEMECOLOR;
    if (ele2 !== undefined) {
        ele2.style.color = 'inherit';
    }
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
