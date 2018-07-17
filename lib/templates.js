const skillDetailsTemplate = (skillName) => {
    let statusNum = skillStatusDict[skillName];
    if (statusNum === undefined) statusNum = 2;

    let status = skillStatus[statusNum]
    let statusColor = skillColors[statusNum];
    let statusWidth = (statusNum / Object.keys(skillStatus).length) * 100;

    let template = `
        <div class='skill-details-section'>
            <h3 class='skill-details-name typeit'> ${skillName} </h3>
            <hr class='skill-details-seperator'/>
        </div>

        <div class='skill-details-section'>
            <p class='skill-details-subheader'> Status </p>
            <hr class='skill-details-seperator'/>
            <div class='progress-bar'>
                <div style='background-color:${statusColor}; width:${statusWidth}%'
                    class='the-bar'>
                </div>
            </div>
            <p class='skill-status'> ${status} </p>
        </div>

        <div class='skill-details-section'>
            <p class='skill-details-subheader'> Projects </p>
            <hr class='skill-details-seperator'/>
            <ul>
                ${returnProjectsFromSkill(skillName).join(0).split(0).map((item, i) => `
                    <li><a> ${item} </a></li>
                    `).join('')}
            </ul>
        </div>

        <div class='skill-details-section'>
            <p class='skill-details-subheader'> Other work </p>
            <hr class='skill-details-seperator'/>
            <ul></ul>
        </div>
    `;

    return template;
}
