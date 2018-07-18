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
const NIL = 'NIL';

const FROM = 'From';
const TO = 'To';
const CERT_AUTH = 'Certification Authority';
const CERT_URL = 'Certification URL';
const LIC_NO = 'License No.';
const IMG_LINK = 'Image Link';
const COURSERA = 'Coursera';
const UDEMY = 'Udemy';
const NPTEL = 'NPTEL';
const UPGRAD = 'UpGrad';
const MS = 'Microsoft';

const DLSPZ1 = 'Neural Networks and Deep Learning';
const DLSPZ2 = 'Improving Deep Neural Networks : Hyperparameter tuning,' +
               ' Regularization and Optimization';
const AI2018UDEMY = 'Artificial Intelligence 2018: Build the Most Powerful AI';
const NPTELDSE = 'Data Science for Engineers';
const NPTELDBMS = 'Database Management System';
const DSUPGRADLW = 'Data Science Learning Week UpGrad';
const NPTELIAA = 'Introduction to Algorithms and Analysis';
const NPTELDAA = 'Design and Analysis of Algorithms';
const NPTELCPP = 'Programming in C++';
const MLCOURSERA = 'Machine Learning';
const NPAT = 'National Programming Aptitude Test (NPAT)';
const MSBAXB = 'Building Apps With Xamarin [Badge]';

const THEMECOLOR = '#8BC34A';

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

const certifications = {
    [DLSPZ2] : {
      [CERT_AUTH] : COURSERA,
      [LIC_NO] : 'YJUCTZ92SP38',
      [FROM] : 'July 2018',
      [TO] : NIL,
      [CERT_URL] : 'https://www.coursera.org/account/accomplishments/verify/YJUCTZ92SP38',
      [IMG_LINK] : './certs/DLSPZ2.png'
    },

    [AI2018UDEMY] : {
      [CERT_AUTH] : UDEMY,
      [LIC_NO] : 'UC-V4XIBNYT',
      [FROM] : 'Jun 2018',
      [TO] : NIL,
      [CERT_URL] : 'https://www.udemy.com/certificate/UC-V4XIBNYT/',
      [IMG_LINK] : './certs/AI2018UDEMY.jpg'
    },

    [DLSPZ1] : {
      [CERT_AUTH] : COURSERA,
      [LIC_NO] : 'E2HSQQHYEQRG',
      [FROM] : 'Jun 2018',
      [TO] : NIL,
      [CERT_URL] : 'https://www.coursera.org/account/accomplishments/verify/E2HSQQHYEQRG',
      [IMG_LINK] : './certs/DLSPZ1.png'
    },

    [NPTELDSE] : {
      [CERT_AUTH] : NPTEL,
      [LIC_NO] : 'NPTEL18CS28S1510736',
      [FROM] : 'May 2018',
      [TO] : NIL,
      [CERT_URL] : 'http://nptel.ac.in/noc/social_cert/noc18-cs15/NPTEL18CS15S35121151810060917.jpg',
      [IMG_LINK] : './certs/NPTELDSE.jpg'
    },

    [NPTELDBMS] : {
      [CERT_AUTH] : NPTEL,
      [LIC_NO] : 'NPTEL18CS15S3512115',
      [FROM] : 'May 2018',
      [TO] : NIL,
      [CERT_URL] : 'http://nptel.ac.in/noc/social_cert/noc18-cs15/NPTEL18CS15S35121151810060917.jpg',
      [IMG_LINK] : './certs/NPTELDBMS.jpg'
    },

    [DSUPGRADLW] : {
      [CERT_AUTH] : UPGRAD,
      [LIC_NO] : NIL,
      [FROM] : 'May 2018',
      [TO] : NIL,
      [CERT_URL] : 'https://www.credential.net/98k3yrut',
      [IMG_LINK] : './certs/DSUPGRADLW.png'
    },

    [MLCOURSERA] : {
      [CERT_AUTH] : COURSERA,
      [LIC_NO] : 'E6AJMBQU69C4',
      [FROM] : 'Feb 2018',
      [TO] : NIL,
      [CERT_URL] : 'https://www.coursera.org/account/accomplishments/verify/E6AJMBQU69C4',
      [IMG_LINK] : './certs/MLCOURSERA.png'
    },

    [NPTELIAA] : {
      [CERT_AUTH] : NPTEL,
      [LIC_NO] : 'NPTEL17CS20S2460595',
      [FROM] : 'Nov 2017',
      [TO] : NIL,
      [CERT_URL] : 'http://nptel.ac.in/noc/social_cert/noc17-cs20/NPTEL17CS20S2460595171014762.jpg',
      [IMG_LINK] : './certs/NPTELIAA.jpg'
    },

    [NPTELDAA] : {
      [CERT_AUTH] : NPTEL,
      [LIC_NO] : 'NPTEL17CS27S1450979',
      [FROM] : 'Oct 2017',
      [TO] : NIL,
      [CERT_URL] : 'http://nptel.ac.in/noc/social_cert/noc17-cs27/NPTEL17CS27S1450979171051878.jpg',
      [IMG_LINK] : './certs/NPTELDAA.jpg'
    },

    [NPTELCPP] : {
      [CERT_AUTH] : NPTEL,
      [LIC_NO] : 'NPTEL17CS24S2451065',
      [FROM] : 'Oct 2017',
      [TO] : NIL,
      [CERT_URL] : 'http://nptel.ac.in/noc/social_cert/noc17-cs24/NPTEL17CS24S2451065171051878.jpg',
      [IMG_LINK] : './certs/NPTELCPP.jpg'
    },

    [NPAT] : {
      [CERT_AUTH] : NPTEL,
      [LIC_NO] : NIL,
      [FROM] : 'Sep 2017',
      [TO] : NIL,
      [CERT_URL] : NIL,
      [IMG_LINK] : NIL
    },

    /*
    [MSBAXB] : {
      [CERT_AUTH] : MS,
      [LIC_NO] : NIL,

    }
    */
}
