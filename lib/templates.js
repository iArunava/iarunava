const skillDetailsTemplate = (skillName) => {
    let statusNum = skillStatusDict[skillName];
    if (statusNum === undefined) statusNum = 2;

    let status = skillStatus[statusNum]
    let statusColor = skillColors[statusNum];
    let statusWidth = (statusNum / Object.keys(skillStatusDict).length) * 100;

    let template = `
        <div class='skill-details-section'>
            <h3 class='skill-details-name'> ${skillName} </h3>
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
            <div><p class='skill-status'> ${status} </p></div>
        </div>

        <div class='skill-details-section'>
            <p class='skill-details-subheader'> Projects </p>
            <hr class='skill-details-seperator'/>
            <ul></ul>
        </div>

        <div class='skill-details-section'>
            <p class='skill-details-subheader'> Other work </p>
            <hr class='skill-details-seperator'/>
            <ul></ul>
        </div>
    `;

    return template;
}
