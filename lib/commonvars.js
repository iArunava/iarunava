const DEEP_LEARNING = 'Deep Learning';
const MACHINE_LEARNING = 'Machine Learning';
const RL = 'Reinforcement Learning';
const COMPUTER_VISION = 'Computer Vision';
const ALGORITHMS = 'Algorithms';
const WEB_DEV = 'Web Development';
const ANDROID = 'Android Development';
const DATA_SCIENCE = 'Data Science';
const JAVASCRIPT = 'JavaScript';
const PYTHON = 'Python3'
const HTML5 = 'HTML5';
const CSSHEETS = 'Cascading Style Sheets';
const BULMA = 'Bulma';

const SKILLS_USED = 'Skills Used';

const NONE = 'None';

const skillColors = {
    1 : '#03A9F4',
    2 : '#2196F3',
    3 : '#7CB342',
    4 : '#F44336'
}

const skills = [
    MACHINE_LEARNING, DEEP_LEARNING, ALGORITHMS, PYTHON, ANDROID, RL,
    'Natural Language Processing', COMPUTER_VISION, DATA_SCIENCE,
    WEB_DEV, 'Mobile Applications', 'Data Structures',
    'Java', 'Bash', 'Linux', HTML5, CSSHEETS, JAVASCRIPT,
    'Node.js', 'JSON', 'C++', 'SQL', 'Bootstrap', 'jQuery', 'C', 'Ruby', 'Ruby on Rails',
    'Angular JS', 'React.js', 'Algirithm Analysis', 'Algorithm Design',
    'Search Algorithms', 'Android Studio', 'Express.js', BULMA
];

const skillStatus = {
    1 : 'Starting out',
    2 : 'I know the basics',
    3 : 'I know it and I am learning more',
    4 : 'I Bleed it!'
}

const skillStatusDict = {
    [MACHINE_LEARNING] : 3,
    [DEEP_LEARNING] : 3,
    [RL] : 1,
    [ANDROID] : 2,
    [COMPUTER_VISION]: 2,
    [ALGORITHMS] : 4,
    [CSSHEETS] : 3,
    [WEB_DEV] : 3
}

const projects = {
    'Blemger' : {
        [SKILLS_USED] : [COMPUTER_VISION, JAVASCRIPT, HTML5, CSSHEETS, BULMA,
                        WEB_DEV],
        'Code' : 'https://github.com/iArunava/Blemger',
        'Project' : 'https://iarunava.github.io/Blemger/'
    },

    'iSeeDigits' : {
        [SKILLS_USED] : [DEEP_LEARNING, MACHINE_LEARNING, JAVASCRIPT, PYTHON,
                         CSSHEETS, JAVASCRIPT, HTML5, WEB_DEV],
        'Code' : 'https://github.com/iArunava/iSeeDigits',
        'Project' : 'https://iarunava.github.io/iSeeDigits/'
    },
}
