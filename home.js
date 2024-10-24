const courseAllocations = {
    1: {'A': [1, 17, 19, 3, 10], 'B': [2, 8, 16, 18, 11], 'C': [4, 7, 14, 13, 19], 'D': [9, 15, 6, 5, 12]},
    2: {'A': [8, 18, 5, 11, 13], 'B': [16, 14, 17, 3, 15], 'C': [4, 6, 7, 1, 2], 'D': [20, 19, 9, 10, 12]},
    3: {'A': [15, 1, 10, 19, 20], 'B': [17, 5, 7, 9, 11], 'C': [14, 3, 8, 18, 16], 'D': [4, 13, 12, 2, 6]},
    4: {'A': [7, 15, 6, 4, 5], 'B': [19, 9, 11, 8, 1], 'C': [18, 2, 10, 13, 20], 'D': [3, 12, 14, 16, 17]},
    5: {'A': [2, 1, 6, 3, 17], 'B': [10, 12, 9, 14, 4], 'C': [5, 16, 7, 8, 18], 'D': [11, 13, 20, 15, 19]},
    6: {'A': [12, 3, 15, 2, 1], 'B': [9, 5, 18, 10, 14], 'C': [16, 7, 4, 6, 19], 'D': [20, 8, 11, 13, 17]},
    7: {'A': [1, 2, 8, 17, 11], 'B': [6, 4, 13, 19, 3], 'C': [9, 5, 18, 14, 15], 'D': [7, 10, 12, 16, 20]},
    8: {'A': [3, 2, 16, 7, 11], 'B': [8, 1, 12, 20, 13], 'C': [15, 17, 4, 9, 6], 'D': [18, 10, 5, 19, 14]},
    9: {'A': [2, 1, 3, 6, 19], 'B': [5, 9, 18, 10, 14], 'C': [16, 7, 4, 13, 11], 'D': [12, 15, 8, 20, 17]},
    10: {'A': [10, 5, 9, 14, 18], 'B': [13, 11, 20, 8, 12], 'C': [4, 6, 3, 1, 2], 'D': [19, 7, 16, 15, 17]}
};

const courseNames = {
    1: "Data Science and Analytics",
    2: "Artificial Intelligence and Machine Learning",
    3: "Software Development",
    4: "Cybersecurity",
    5: "Digital Marketing",
    6: "Blockchain and Cryptocurrency",
    7: "Cloud Computing",
    8: "Photo and Video Editing",
    9: "E-commerce",
    10: "Finance and Fintech",
    11: "Large Language Modelling",
    12: "Generative AI",
    13: "Database Management",
    14: "Product Management",
    15: "UI/UX Design",
    16: "Automotive and Electric Vehicles",
    17: "Game Development",
    18: "DevOps",
    19: "App Development",
    20: "Web Development"
};

const questions = {
    1: "What type of problems do you enjoy solving the most?",
    2: "Which of these industries excites you the most?",
    3: "How would you prefer to spend your workday?",
    4: "Which of the following technologies do you find most interesting?",
    5: "How do you see your role in a future career?",
    6: "What motivates you to work in a specific field?",
    7: "Which of these areas would you like to innovate in?",
    8: "What type of projects do you find the most rewarding?",
    9: "If you were to create something new, which field would it be in?",
    10: "Which career path best aligns with your personal goals?"
};

const options = {
    1: ["A) Analyzing large amounts of data to find patterns ",
        "B) Creating algorithms to mimic human intelligence ",
        "C) Developing secure networks and systems ",
        "D) Building websites and online retail platforms "],
    
    2: ["A) Designing visually appealing and user-friendly applications ",
        "B) Developing financial systems or working in fintech ",
        "C) Creating engaging and immersive video games ",
        "D) Writing efficient code to develop new software "],
    
    3: ["A) Cloud computing and managing distributed systems ",
        "B) Building secure, encrypted transaction systems ",
        "C) Designing secure and efficient blockchain systems ",
        "D) Launching an electric vehicle or innovative transportation system "],
    
    4: ["A) Creating a digital marketing campaign that goes viral ",
        "B) Developing user-friendly mobile applications ",
        "C) Designing innovative software solutions ",
        "D) Managing online retail operations "],  
    
    5: ["A) Revolutionizing how data is managed and processed ",
        "B) Designing interactive experiences and interfaces ",
        "C) Implementing cloud-based solutions ",  
        "D) Building scalable systems for cloud-based applications "],
    
    6: ["A) Conducting cutting-edge research in AI and machine learning ",
        "B) Creating marketing strategies to promote brands online ",
        "C) Developing educational tools for online learning ",
        "D) Creating apps and tools that improve online shopping experiences "],
    
    7: ["A) Building responsive websites ",
        "B) Designing online learning tools or creating educational programs ",
        "C) Innovating in vehicle design and smart transport ",
        "D) Developing software that improves daily life "],
    
    8: ["A) Building a new AI tool or machine learning model ",
        "B) Managing online retail operations ",  
        "C) Designing secure applications for data management ",
        "D) Enhancing user experiences in mobile apps "],
    
    9: ["A) Creating digital content for social media ",
        "B) Developing large language models ",
        "C) Creating interactive tools for education ",
        "D) Building and maintaining databases "],

    10: ["A) Working in innovative transportation systems ",
          "B) Serving in technology leadership roles ",
          "C) Protecting against cyber threats and data breaches ",
          "D) Creating engaging user interfaces for websites "]
};

const links = {
    1: ["https://www.youtube.com/watch?v=gDZ6czwuQ18", "https://www.coursera.org/specializations/introduction-data-science"],
    2: ["https://www.youtube.com/watch?v=5NgNicANyqM&t=1s", "https://www.coursera.org/learn/ai-for-everyone"],
    3: ["https://www.youtube.com/live/Ubg3PenEdNw?si=1BSb5wbO5KGKim8b", "https://www.coursera.org /professional-certificates/ibm-full-stack-cloud-developer"],
    4: ["https://www.youtube.com/watch?v=hXSFdwIOfnE", "https://www.coursera.org/learn/cybersecurity-for-everyone"],
    5: ["https://www.youtube.com/watch?v=W41F-IdjPlU", "https://skillshop.exceedlms.com/student/collection/654330-digital-marketing?locale=en-GB"],
    6: ["https://www.youtube.com/watch?v=cGQHXmCS94M", "https://www.coursera.org/specializations/blockchain"],
    7: ["https://www.youtube.com/watch?v=2LaAJq1lB1Q", "https://www.coursera.org/learn/introduction-to-cloud"],
    8: ["https://www.youtube.com/watch?v=qDHnCFMZ9HA&t=2s", "https://www.udemy.com/course/video-editing-101-learn-the-basics-of-video-editing/"],
    9: ["https://www.youtube.com/watch?v=zLaOpZrLg70", "https://www.udemy.com/course/online-business-hacks-ecommerce/"],
    10: ["https://www.youtube.com/watch?v=EJHPltmAULA", "https://www.edx.org/learn/financial-accounting/massachusetts-institute-of-technology-financial-accounting?utm_medium=partner-marketing&utm_source=sem&utm_campaign=mitx&utm_term=introduction%20to%20financial%20accounting&utm_content=mm-fin-fl24-aw-c&gad_source=1&gclid=Cj0KCQjwjY64BhCaARIsAIfc7YbruRqjGWXR-UmX3v5-_A7b9I1HwIIfm2IKz9QPWFWHrQCUEZMJ-UYaAlzaEALw_wcB"],
    11: ["https://www.youtube.com/watch?v=xZDB1naRUlk", "https://www.udemy.com/course/build-ranking-system-stock-market-pro-chatbot-using-aiml/"],
    12: ["https://www.youtube.com/watch?v=mEsleV16qdo", "https://www.udemy.com/course/a-gentle-introduction-to-generative-ai/"],
    13: ["https://www.youtube.com/watch?v=HXV3zeQKqGY", "https://www.udemy.com/course/unity-mysql-database-management/"],
    14: ["https://www.youtube.com/watch?v=T0oO_-JlOdA", "https://www.coursera.org/enroll/google-project -management/paidmedia?utm_medium=sem&utm_source=gg&utm_campaign=b2c_india_google-project-management_google_ftcof_professional-certificates_arte_apr-24_dr_pmax_gads_lg-all&campaignid=21154881336&adgroupid=&device=c&keyword=&matchtype=&network=x&devicemodel=&adposition=&creativeid=&hide_mobile_promo&gad_source=1&gclid=Cj0KCQjwjY64BhCaARIsAIfc7YaBAat_SQf-KcEai4NZK-FCcPm-DuB25vttWy49s3bsGEK18-gJf2IaArcdEALw_wcB"],
    15: ["https://www.youtube.com/watch?v=BU_afT-aIn0", "https://www.coursera.org/professional-certificates/ux-design?utm_medium=sem&utm_source=gg&utm_campaign=b2c_india_ux-design_microsoft_ftcof_professional-certificates_arte_july-24_dr_sem_rsa_gads_lg-all&campaignid=21462595620&adgroupid=168648486670&device=c&keyword=courses%20for%20ux%20design&matchtype=p&network=g&devicemodel=&adposition=&creativeid=705748735569&hide_mobile_promo&gad_source=1&gclid=Cj0KCQjwjY64BhCaARIsAIfc7YZExpkLw_QYqyJN1iM7GWgMupncdkBUnRVm5mnA0hwn8ACX7jXXyQ4aAof_EALw_wcB"],
    16: ["https://youtu.be/qIfjibyt6pY", "https://alison.com/course/diploma-in-automotive-systems-training"],
    17: ["https://youtu.be/6UlU_FsicK8?si=Nabx7c3bdWNjGmJk", "https://www.coursera.org/specializations/game-design-and-development"],
    18: ["https://www.youtube.com/watch?v=hQcFE0RD0cQ&t=4s", "https://www.coursera.org/learn/intro-to-devops"],
    19: ["https://www.youtube.com/watch?v=VPvVD8t02U8", "https://www.coursera.org/professional-certificates/meta-android-developer"],
    20: ["https://www.youtube.com/watch?v=ZxKM3DCV2kE", "https://www.coursera.org/specializations/html-css-javascript-for-web-developers"]
};


const backgroundVideos = {
    1: "Data.mp4",
    2: "AI.mp4",
    3: "cloud_computing.mp4",
    4:"cyber.mp4",
    5:"Data.mp4",
    6:"Block.mp4",
    7:"cloud_computing.mp4",
    8:"Data.mp4",
    9:"Data.mp4",
    10:"Data.mp4",
    11:"Block.mp4",
    12:"Block.mp4",
    13:"AI.mp4",
    14:"AI.mp4",
    15:"Data.mp4",
    16:"Block.mp4",
    17:"cyber.mp4",
    18:"Block.mp4",
    19:"Block.mp4",
    20:"Block.mp4",


    // Add paths for other courses...
 };


// Function to display questions
function displayQuestions() {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = '';
    
    for (let i = 1; i <= Object.keys(questions).length; i++) {
        const questionElement = document.createElement('p');
        questionElement.textContent = `${i}. ${questions[i]}`;
        
        const optionContainer = document.createElement('div');
        options[i].forEach((option, index) => {
            const optionElement = document.createElement('input');
            optionElement.type = 'radio';
            optionElement.name = `question-${i}`;
            optionElement.id = `option-${i}-${index + 1}`;
            optionElement.value = option.split(')')[0];
            
            const labelElement = document.createElement('label');
            labelElement.textContent = option;
            labelElement.htmlFor = `option-${i}-${index + 1}`;
            
            optionContainer.appendChild(optionElement);
            optionContainer.appendChild(labelElement);
            optionContainer.appendChild(document.createElement('br'));
        });
        
        questionElement.appendChild(optionContainer);
        questionContainer.appendChild(questionElement);
    }
    
    document.getElementById('questions').style.display = 'block';
    document.getElementById('start-quiz').style.display = 'none';
}

// Function to get answers from user input
function getAnswers() {
    const answers = {};
    
    for (let i = 1; i <= Object.keys(questions).length; i++) {
        const radioButtons = document.getElementsByName(`question-${i}`);
        
        for (let j = 0; j < radioButtons.length; j++) {
            if (radioButtons[j].checked) {
                answers[i] = radioButtons[j].value;
                break;
            }
        }
    }
    
    return answers;
}

// Function to get recommended course based on answers
function getRecommendedCourse(answers) {
    const courseCount = {};
    
    for (let i in courseAllocations) {
        for (let answer in answers) {
            const selectedOption = answers[answer];
            if (courseAllocations[answer][selectedOption]) {
                for (let course of courseAllocations[answer][selectedOption]) {
                    courseCount[course] = (courseCount[course] || 0) + 1;
                }
            }
        }
    }
    
    const recommendedCourseId = Object.keys(courseCount).reduce((a, b) => courseCount[a] > courseCount[b] ? a : b);
    
    return recommendedCourseId; // Return only the ID of the recommended course
}

// Event listener for starting the quiz
document.getElementById('start-quiz').addEventListener('click', displayQuestions);

// Event listener for submitting answers
document.getElementById('submit-answers').addEventListener('click', () => {
   const answers = getAnswers();
   if (Object.keys(answers).length === Object.keys(questions).length) { // Ensure all questions are answered
       const recommendedCourseId = getRecommendedCourse(answers);
       window.location.href = `recommendation.html?courseId=${recommendedCourseId}`; // Redirect to recommendation page
   } else {
       alert("Please answer all questions before submitting."); // Alert if not all questions are answered
   }
});