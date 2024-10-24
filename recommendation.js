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

// Function to get URL parameters
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
 }
 
 // Function to display recommended course
 function displayRecommendedCourse(courseId) {
    const courseInfoElement = document.getElementById('course-info');
    const recommendedCourseName = courseNames[courseId];
    
    // Create YouTube video iframe
    const youtubeVideoUrl = links[courseId][0];
    const youtubeVideoId = youtubeVideoUrl.split('v=')[1]; // Extract video ID from link
    const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeVideoId}`;
    
    const youtubeIframe = document.createElement('iframe');
    youtubeIframe.src = youtubeEmbedUrl;
    youtubeIframe.width = '560';
    youtubeIframe.height = '315';
    youtubeIframe.frameBorder = '0';
    youtubeIframe.allowFullscreen = true;
 
    // Append elements to the course info element
    courseInfoElement.innerHTML += `<h2>${recommendedCourseName}</h2>`;
    courseInfoElement.appendChild(youtubeIframe);
 
    // Create links for YouTube and Course Enrollment
    const youtubeLinkElement = document.createElement('a');
    youtubeLinkElement.href = links[courseId][0];
    youtubeLinkElement.target = '_blank'; // Open in new tab
    youtubeLinkElement.textContent = 'Watch on YouTube';
 
    const courseLinkElement = document.createElement('a');
    courseLinkElement.href = links[courseId][1];
    courseLinkElement.target = '_blank'; // Open in new tab
    courseLinkElement.textContent = 'Enroll in Course';
 
    // Append links to the info element
    courseInfoElement.appendChild(document.createElement('br')); // Add line break
    courseInfoElement.appendChild(youtubeLinkElement);
    
    courseInfoElement.appendChild(document.createElement('br')); // Add line break
    courseInfoElement.appendChild(courseLinkElement);
 
    // Change background video based on recommended course
    changeBackgroundVideo(courseId);
 }
 
 // Function to change background video based on recommended course ID
 function changeBackgroundVideo(courseId) {
    const backgroundVideoSourcePath = backgroundVideos[courseId];
 
    if (backgroundVideoSourcePath) {
        const videoTagSourceElemnt= document.querySelector('#background-video source');
        videoTagSourceElemnt.src= backgroundVideoSourcePath;
        document.getElementById('background-video').load(); // Reload video with new source
        document.getElementById('background-video').play(); // Play the new video if needed
    }
 }
 
 // Get course ID from URL and display it
 const courseIdFromUrl = getQueryParam('courseId');
 if (courseIdFromUrl) {
      displayRecommendedCourse(courseIdFromUrl);
 }
 
 // Back button functionality
 document.getElementById('back-button').addEventListener('click', () => {
      window.history.back(); // Go back to the previous page (quiz)
 });
 
 // Event listener for Streamlit button click
 document.getElementById('streamlit-button').addEventListener('click', () => {
      window.open("http://localhost:8501", "_blank"); // Open Streamlit app in a new tab
 });