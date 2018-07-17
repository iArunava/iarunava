const returnProjectsFromSkill = (skill) => {
    let projectsWithSkill = [];
    for (let project in projects) {
        if (projects[project][SKILLS_USED].includes(skill))
            projectsWithSkill.push(project);
    }
    return projectsWithSkill.length > 0 ? projectsWithSkill : [NONE];
}
