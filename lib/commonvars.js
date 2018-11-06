const AI = 'Artificial Intelligence'
const DEEP_LEARNING = 'Deep Learning';
const MACHINE_LEARNING = 'Machine Learning';
const NLP = 'Natural Language Processing';
const RL = 'Reinforcement Learning';
const CV = 'Computer Vision';
const OPENCV = 'Open CV';
const ALGORITHMS = 'Algorithms';
const TF = 'TensorFlow';
const WEB_DEV = 'Web Development';
const ANDROID = 'Android Development';
const DATA_SCIENCE = 'Data Science';
const JAVASCRIPT = 'JavaScript';
const PYTHON = 'Python3'
const HTML5 = 'HTML5';
const CSSHEETS = 'Cascading Style Sheets';
const BULMA = 'Bulma';
const JUPYTER = 'Jupyter';
const WEBEXT = 'Web Extensions';
const BOOTSTRAP = 'Bootstrap';
const JQUERY = 'jQuery';
const ELECTRON = 'Electron';
const AJS = 'Angular JS';
const NODEJS = 'Node.js';
const RAILS = 'Ruby on Rails';
const RUBY = 'Ruby';
const JAVA = 'Java';
const ANDSTD = 'Android Studio';
const ANIMATE = 'Animate.css';
const EXPJS = 'Express JS';
const MOZADD = 'Mozilla Addon';
const CHROMEEXT = 'Chrome Extensions';

const DESP = 'Description';
const VID = 'Video';
const SKILLS_USED = 'Skills Used';
const CODE = 'Code';
const PROJECT = 'Project';
const STATUS = 'Status';
const UDEV = 'Under Development';
const PDEV = 'Development Paused';
const RELEASED = 'Released';
const NOPEN = 'Not Open Sourced';

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
const DLSPZ3 = 'Structuring Machine Learning Projects';
const DLSPZ4 = 'Convolutional Neural Networks';
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
    AI, MACHINE_LEARNING, DEEP_LEARNING, ALGORITHMS, PYTHON, TF, ANDROID, RL,
    NLP, CV, DATA_SCIENCE,
    WEB_DEV, 'Mobile Applications', 'Data Structures',
    JAVA, 'Bash', 'Linux', HTML5, CSSHEETS, JAVASCRIPT, MOZADD, CHROMEEXT,
    NODEJS, 'JSON', 'C++', 'SQL', BOOTSTRAP, JQUERY, 'C', RUBY, RAILS,
    AJS, 'React.js', 'Algirithm Analysis', 'Algorithm Design',
    'Search Algorithms', ANDSTD, 'Express.js', BULMA, JUPYTER, WEBEXT, BOOTSTRAP,
    ELECTRON, ANIMATE,
];

const skillStatus = {
    1 : 'Starting out',
    2 : 'I know the basics',
    3 : 'I know it and I am learning more',
    4 : 'I Bleed it!'
}

const skillStatusDict = {
    [MACHINE_LEARNING] : 3,
    [DEEP_LEARNING] : 3, [AI] : 3,
    [RL] : 1,
    [ANDROID] : 2,
    [CV]: 2,
    [ALGORITHMS] : 4,
    [CSSHEETS] : 3,
    [WEB_DEV] : 3,
    [HTML5] : 4, [JQUERY] : 4, [TF] : 3
}

const projects = {
    'Postie' : {
        [SKILLS_USED] : [WEB_DEV, JAVASCRIPT, CSSHEETS, HTML5, MOZADD, CHROMEEXT, WEBEXT],
        [DESP] : 'Postie is an Extension developed using WebExtension that helps users save Linkedin Posts. \
                  Users can save posts with just one click. This extension modifies the Linkedin content \
                  in place to give an option to save the post within the post itself. \
                  So you can save posts while browsing, without even moving to another window/tab.',
        [STATUS] : RELEASED,
        [VID] : 'https://www.youtube.com/watch?v=bGKqO2_3VKM',
        [CODE] : 'https://github.com/iArunava/Postie',
        //TODO: Make the [PROJECT] key into a list that stores all the published sites
        // For now I am listing the chrome site (as it has more users, make sure to list the mozilla site)
        [PROJECT] : 'http://bit.ly/postie_chrome',

    },

    'Neural Net Style Transfer with OpenCV' : {
        [SKILLS_USED] : [DEEP_LEARNING, OPENCV, PYTHON, AI, CV],
        [DESP] : 'This project shows how to perform Neural Style Transfer using OpenCV. \
                    This project uses the pretrained models by Justin Johnson \
                    The code closely follows the pyimagesearch blog by Adrian Rosebrock \
                    that you can find here: https://www.pyimagesearch.com/2018/08/27/neural-style-transfer-with-opencv/',
        [STATUS] : RELEASED,
        [VID] : NIL,
        [CODE] : 'https://github.com/iArunava/Neural-Style-Transfer-with-OpenCV',
        [PROJECT] : NIL

    },

    'Flower Classifier using MobileNets' : {
        [SKILLS_USED] : [DEEP_LEARNING, PYTHON, TF, AI, CV],
        [DESP] : 'This project uses a MobileNet [ mobilenet_1.0_244 ] to \
                 classify 5 different flowers. This project uses Transfer Learning \
                 to retrain MobileNet models trained on ImageNet dataset.',
        [STATUS] : RELEASED,
        [VID] : 'https://youtu.be/AzmCYs5fAn0',
        [CODE] : 'https://github.com/iArunava/Flower-Classifier-using-MobileNets',
        [PROJECT] : NIL
    },

    'IMDB Sentiments' : {
        [SKILLS_USED] : [DEEP_LEARNING, PYTHON, NLP, TF, AI],
        [DESP] : 'My First Sentiment Analysis Project using the IMDB Movie Reviews Dataset.\
                 In this project, I have used tensorflow to build a Multi-Layer Perceptron \
                 model to classify the sentiments of the reviews in the dataset.\
                The model has got a 90% accuracy!\
                Developed a Tkinter app that can be used to predict the sentiments of the user!',
        [STATUS] : RELEASED,
        [VID] : 'https://youtu.be/6DsL5ydffwg',
        [CODE] : 'https://github.com/iArunava/IMDB-Sentiments',
        [PROJECT] : NIL
    },

    'Blemger' : {
        [SKILLS_USED] : [CV, JAVASCRIPT, HTML5, CSSHEETS, BULMA,
                        WEB_DEV],
        [DESP] : 'Blemger is a Web Application that can be used to create a nice blend of two images. \
                The blending works on color images that are Images with 3 planes \
                Red, Green, and Blue with the ability to control freely the ratio of how \
                each plane would affect the resulting blended image.',
        [STATUS] : RELEASED,
        [VID] : 'https://youtu.be/138IrZBKEbw',
        'Code' : 'https://github.com/iArunava/Blemger',
        'Project' : 'https://iarunava.github.io/Blemger/'
    },

    'iSeeDigits' : {
        [SKILLS_USED] : [DEEP_LEARNING, MACHINE_LEARNING, JAVASCRIPT, PYTHON,
                         CSSHEETS, JAVASCRIPT, HTML5, WEB_DEV, AI],
        [DESP] : 'iSeeDigits is a simple Digit Recognizer. I used a simple 3-layer Neural Network to train the model. Which I fed into JavaScript. \
                    No ML / DL libraries are used. The Neural Network is coded from scratch. \
                    I just used math.js to perform the matrix multiplications on the web. \
                    It uses the MNIST DataSet.',
        [STATUS] : RELEASED,
        [VID]: 'https://youtu.be/Te97D-9jr4o?t=56',
        'Code' : 'https://github.com/iArunava/iSeeDigits',
        'Project' : 'https://iarunava.github.io/iSeeDigits/'
    },

    'Python - The No Theory Guide' : {
        [SKILLS_USED] : [ PYTHON, JUPYTER],
        [DESP] : 'The project consists of jupyter notebooks separated into different \
                    topics focused on learning the Python programming language. \
                    Each such notebook consists of code snippets for performing various tasks, that \
                    one can just run in their browser and practice in while editing and seeing results. \
                    The project, for now, just focuses on the basics of Python.',
        [STATUS] : RELEASED,
        'Code' : 'https://github.com/iArunava/Python-TheNoTheoryGuide'
    },

    'Assistant Reminder' : {
        [SKILLS_USED] : [HTML5, JAVASCRIPT, JQUERY, CSSHEETS, WEBEXT, BOOTSTRAP, WEB_DEV],
        [DESP] : 'Assistant Reminder is a firefox addon compatible with firefox 57+ \
                    With assistant reminder one can set up reminders and get \
                    notified and view all ongoing and upcoming reminders. Currently at v2.0.',
        [STATUS] : RELEASED,
        'Code' : 'https://github.com/iArunava/Assistant-Reminder',
        'Project' : 'https://addons.mozilla.org/en-US/firefox/addon/assistant-reminder/'
    },

    'Passwordz' : {
        [SKILLS_USED] : [BOOTSTRAP, HTML5, JAVASCRIPT, CSSHEETS, WEB_DEV],
        [DESP] : 'Passwordz is a web application. It is a random password generator. \
                It comes in with a handful of customizations to make the generated \
                password more useful for the user.',
        [STATUS] : RELEASED,
        'Code' : 'https://github.com/iArunava/Passwordz',
        'Project' : 'https://iarunava.github.io/Passwordz/',

    },

    'UVa Desktop' : {
        [SKILLS_USED] : [ELECTRON, PYTHON, HTML5, CSSHEETS, JAVASCRIPT, AJS,
                        NODEJS],
        [DESP] : 'A Cross Platform Desktop Application to access all of UVa problems and user statistics offline.',
        [STATUS] : PDEV,
        'Code' : 'https://github.com/iArunava/UVa-Desktop',
    },

    'Key' : {
        [SKILLS_USED] : [ELECTRON, JAVASCRIPT, CSSHEETS, HTML5, NODEJS],
        [DESP] : 'Key is a cross platform desktop application. \
                    Key is a password manager that allows users to manage \
                    passwords for their different sites.',
        [STATUS] : PDEV,
        'Code' : 'https://github.com/iArunava/Key',

    },

    'TwitchBuzz' : {
        [SKILLS_USED] : [JAVASCRIPT, HTML5, CSSHEETS, JQUERY, BOOTSTRAP],
        [DESP] : 'TwitchBuzz is a web application that is developed to show \
                    which channels are currently streaming and which are not, \
                    from a handful of users, on TwichTV. Additionally, one can see \
                    the total views and followers a channel has.\
                    Also, if a user is streaming, one can see the number of viewers \
                    of that stream.',
        [STATUS] : RELEASED,
        [CODE] : 'https://codepen.io/iArunava/pen/wqMXqq',
        [PROJECT] : 'https://codepen.io/iArunava/full/wqMXqq/'
    },

    'aPage' : {
        [SKILLS_USED] : [RAILS, RUBY, HTML5, JAVASCRIPT],
        [DESP] : 'A Ruby on Rails Application.',
        [STATUS] : RELEASED,
        [CODE] : 'https://github.com/iArunava/aPage',
        [PROJECT] : 'https://apage.herokuapp.com'
    },

    'Take a Note' : {
        [SKILLS_USED] : [JAVA, ANDROID, ANDSTD],
        [DESP] : 'Take A Note is an Android Application.\
                    Take A Note allows one to efficiently take notes with a \
                    highly interactive user interface.',
        [STATUS] : PDEV,
        [CODE] : NOPEN,
        [PROJECT] : NIL
    },

    'Hover Pad' : {
        [SKILLS_USED] : [JAVASCRIPT, HTML5, CSSHEETS, BOOTSTRAP, JQUERY, ANIMATE, WEB_DEV],
        [DESP] : 'Hover Pad is a Web Application.\
                The application features a pad which is, by default, a 25x25 pad, and each of the squares it contains changes its colors to a chosen color on being hovered.\
                The application provides features to tweak the pad, such as, to show the borders, make all the boxes circles and also to the change the height/width of the pad.\
                The application allows the user to choose from a range of colors, with a special option of "Rainbow".',
        [STATUS] : RELEASED,
        [CODE] : 'https://github.com/iArunava/Hover-Pad/',
        [PROJECT] : 'https://iarunava.github.io/Hover-Pad/'
    },

    'Quoter' : {
        [SKILLS_USED] : [HTML5, CSSHEETS, JAVASCRIPT, BOOTSTRAP, ANIMATE, JQUERY],
        [DESP] : 'Quoter is a webapp.\
                    That generates random quotes on the click of a button.\
                    And allows user to share any quote of their choice on social media platforms.',
        [STATUS] : RELEASED,
        [CODE] : 'https://codepen.io/iArunava/pen/YQapEN',
        [PROJECT] : 'https://codepen.io/iArunava/full/YQapEN/'
    },

    'Wiikie' : {
        [SKILLS_USED] : [JQUERY, BOOTSTRAP, AJS, HTML5, JAVASCRIPT, CSSHEETS],
        [DESP] : 'Wiikie is a Web Application.\
                The project is a search engine for wikipedia pages. So, one can search for something he/she is\
                looking for on Wiikie and the application will come up with a bunch of results related to the query.\
                And the user can choose the best option, which will direct them to that Wikipedia article.\
                The application also has a "I\'m feeling lucky" button, which takes the user to a random Wikipedia article.',
        [STATUS] : RELEASED,
        [CODE] : 'https://codepen.io/iArunava/pen/RgOzrg',
        [PROJECT] : 'https://codepen.io/iArunava/full/RgOzrg/',
    },

    'aWeather' : {
        [SKILLS_USED] : [],
        [DESP] : ' aWeather is a Web Application.\
                    The project displays the local weather details of the user \
                    of the application. It shows the sunrise time, sunset time, \
                    current pressure, current temperature which one can switch \
                    between Celcius and Farenheit, and many other weather related details.',
        [STATUS] : RELEASED,
        [CODE] : 'https://codepen.io/iArunava/pen/awQeQz',
        [PROJECT] : 'https://codepen.io/iArunava/full/awQeQz/',
    },

    'Ada Lovelace' : {
        [SKILLS_USED] : [HTML5, CSSHEETS, JAVASCRIPT, BOOTSTRAP, JQUERY],
        [DESP] : 'A website to give tribute to our First ever Computer Programmer, Ada Lovelace.\
                    The project was made as a part of the freeCodeCamp\'s Full Stack Web Development Course.',
        [STATUS] : RELEASED,
        [CODE] : 'https://codepen.io/iArunava/pen/rwwReQ',
        [PROJECT] : 'https://codepen.io/iArunava/full/rwwReQ/',
    },

    'Arunava' : {
        [SKILLS_USED] : [BOOTSTRAP, ANIMATE, JQUERY, HTML5, CSSHEETS, JAVASCRIPT],
        [DESP] : 'My first Personal Portfolio Page.',
        [STATUS] : RELEASED,
        [CODE] : 'https://codepen.io/iArunava/pen/qjPqzJ',
        [PROJECT] : 'https://codepen.io/iArunava/full/qjPqzJ/',
    },

    'Google Homepage' : {
        [SKILLS_USED] : [HTML5, JAVASCRIPT, CSSHEETS],
        [DESP] : 'An implementation of the official Google homepage. Though, it \
                is quite simple to achieve this task if one pops open the developer \
                tools. But, that is not the case here.\
                The project is made from scratch as an effort learn and to get \
                familiar with converting a design (say, provided by a web designer) \
                into pure HTML and CSS.\
                The project was given by TheOdinProject.',
        [STATUS] : RELEASED,
        [CODE] : 'https://github.com/iArunava/google-homepage/',
        [PROJECT] : 'https://iarunava.github.io/google-homepage/',
    },

    'Ctrl+V' : {
        [SKILLS_USED] : [NODEJS, HTML5, JAVASCRIPT, CSSHEETS, EXPJS, BOOTSTRAP],
        [DESP] : 'Ctrl+V is a Web Application. This Project does just what it sounds like. Users can paste information and the information is saved on the App. The paste, or as the app calls it, ctrl+v, can be made Anonymously or the user can make the ctrl+v officially. A Ctrl+V can also be made without logging in.\
                    The project has the back-end coded in Node.js.\
                    The project was made as a part of the IMAD course by NPTEL.\
                    The project is open sourced and can be found at https://github.com/LearningDroidArunava/Ctrl-V.\
                    Initially, the project was developed at this repository, https://github.com/ArunavaDW/imad-app-v2.',
        [STATUS] : RELEASED,
        [CODE] : 'https://github.com/iArunava/Ctrl-V',
        [PROJECT] : 'https://control-v.herokuapp.com/',
    },

    'Learn A Word' : {
        [SKILLS_USED] : [ANDROID, JAVA, ANDSTD],
        [DESP] : `
            Learn A Word is a Android Application. <br/>
            It was developed as a part of the Oxford API competition 2017. <br/>
            The application was developed with the idea of a Vocabulary Enhancer Application. <br/>
            But, as it would turn to be very helpful for the users if the app served as a Dictionary also,
            so the app is also integrated with the Dictionary feature. The application is Lightweight,
            and is about 1.8MB.`,
        [STATUS] : RELEASED,
        [CODE] : NOPEN,
        [PROJECT] : 'https://www.amazon.com/dp/B06Y2S7CZ9/',
    },

    'QuakeReporter' : {
        [SKILLS_USED] : [ANDROID, JAVA, ANDSTD],
        [DESP] : `
                The Project was provided by the Udacity course Android Basics: Networking.
                It is an Android Application that fetches all the earthquakes that took place
                in a user provided time period.
                The application was improved more than the requirements provided by the course.
                These improvements provides the user a more flexible application, i.e, one
                can make more flexible requests depending on one's requirements.`,
        [STATUS] : RELEASED,
        [CODE] : 'https://github.com/iArunava/QuakeReporter',
        PROJECT : NIL,
    },

    'Miwok' : {
        [SKILLS_USED] : [ANDROID, JAVA, ANDSTD],
        [DESP] : `
            Miwok is a Language Learning Android Application. That helps one get started with very basics of the Miwok language.
            This project was made to get hands-on experience with Android Development.
            The project was given by Udacity course - Android Basics Multiscreen Apps.
            Changes were made to make the app experience better.`,
        [STATUS] : RELEASED,
        [CODE] : 'https://github.com/iArunava/Miwok',
        [PROJECT] : NIL,
    }
}

const certifications = {
    [DLSPZ4] : {
        [CERT_AUTH] : COURSERA,
        [LIC_NO] : '3YJNR5NBPTML',
        [FROM] : 'October 2018',
        [TO] : NIL,
        [CERT_URL] : 'https://www.coursera.org/account/accomplishments/verify/3YJNR5NBPTML',
        [IMG_LINK] : './certs/DLSPZ4.png'
    },

    [DLSPZ3] : {
        [CERT_AUTH] : COURSERA,
        [LIC_NO] : 'TCG26AXQFESS',
        [FROM] : 'August 2018',
        [TO] : NIL,
        [CERT_URL] : 'https://www.coursera.org/account/accomplishments/verify/TCG26AXQFESS',
        [IMG_LINK] : './certs/DLSPZ3.png'
    },

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
