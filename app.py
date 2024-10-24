
import streamlit as st
import wikipedia
import google.generativeai as genai
import os

# Set your API key for Google Generative AI
API_KEY = 'AIzaSyANsR1Qadh-Sl-hqmrEWomknctS4l93zY0'  # Replace with your actual API key
os.environ["GEMINI_API_KEY"] = API_KEY
genai.configure(api_key=os.environ["GEMINI_API_KEY"])

# Define course allocations for each question and option
course_allocations = {
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
}

# Define course names
course_names = {
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
}

# Define questions and options
questions = {
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
}

options = {
    1: ["A) Analyzing large amounts of data to find patterns (Data Science and Analytics)",
        "B) Creating algorithms to mimic human intelligence (Artificial Intelligence and Machine Learning)",
        "C) Developing secure networks and systems (Cybersecurity)",
        "D) Building websites and online retail platforms (E-commerce)"],
    2: ["A) Healthcare and Biotech innovations (Healthcare and Biotech)",
        "B) Automotive technologies, including electric vehicles (Automotive and Electric Vehicles)",
        "C) Digital currencies and decentralized finance (Blockchain and Cryptocurrency)",
        "D) Agriculture and farming technologies (Agriculture and AgriTech)"],
    3: ["A) Designing visually appealing and user-friendly applications (UI/UX Design)",
        "B) Creating engaging and immersive video games (Game Development)",
        "C) Leading teams to develop and launch new products (Product Management)",
        "D) Protecting companies from cyber threats and attacks (Cybersecurity)"],
    4: ["A) Cloud computing and managing distributed systems (Cloud Computing)",
        "B) Enhancing communication through advanced telecom networks (Telecommunication)",
        "C) Managing logistics and improving supply chains (Supply Chain and Logistics)",
        "D) Writing efficient code to develop new software (Software Development)"],
    5: ["A) Conducting cutting-edge research in AI and machine learning (Artificial Intelligence and Machine Learning)",
        "B) Developing financial systems or working in fintech (Finance and Fintech)",
        "C) Creating marketing strategies to promote brands online (Digital Marketing)",
        "D) Serving in a government role or the military (Government Services / Army, Police, Navy)"],
    6: ["A) Designing online learning tools or creating educational programs (Education and E-learning)",
        "B) Helping companies streamline their retail operations (E-commerce and Retail)",
        "C) Innovating in vehicle design and smart transport (Automotive and Electric Vehicles)",
        "D) Supporting sustainable farming practices using modern technology (Agriculture and AgriTech)"],
    7: ["A) Revolutionizing how data is managed and processed (Data Science and Analytics)",
        "B) Designing secure and efficient blockchain systems (Blockchain and Cryptocurrency)",
        "C) Creating apps and tools that improve online shopping experiences (E-commerce and Retail)",
        "D) Building scalable systems for cloud-based applications (Cloud Computing)"],
    8: ["A) Building software that improves daily life (Software Development)",
        "B) Researching and implementing solutions to health problems (Healthcare and Biotech)",
        "C) Designing interactive experiences and interfaces (UI/UX Design)",
        "D) Managing supply chains for global logistics operations (Supply Chain and Logistics)"],
    9: ["A) Developing a new AI tool or machine learning model (Artificial Intelligence and Machine Learning)",
        "B) Creating a digital marketing campaign that goes viral (Digital Marketing)",
        "C) Launching an electric vehicle or innovative transportation system (Automotive and Electric Vehicles)",
        "D) Starting an educational platform for online learning (Education and E-learning)"],
    10: ["A) Working in financial systems and markets (Finance and Fintech)",
         "B) Serving in the army, police, or navy (Army, Police, Navy)",
         "C) Building secure, encrypted transaction systems (Cybersecurity)",
         "D) Improving communication infrastructures worldwide (Telecommunication)"]
}

# Define YouTube and learning resource links for each course
links = {
    1: ("https://www.youtube.com/watch?v=gDZ6czwuQ18", "https://www.coursera.org/specializations/introduction-data-science"),
    2: ("https://www.youtube.com/watch?v=5NgNicANyqM&t=1s", "https://www.coursera.org/learn/ai-for-everyone"),
    3: ("https://www.youtube.com/playlist?list=PLEiEAq2VkUUJfeP9bgWAEs-NbGJyYXc-v", "https://www.coursera.org/professional-certificates/ibm-full-stack-cloud-developer?"),
    4: ("https://www.youtube.com/watch?v=hXSFdwIOfnE", "https://www.coursera.org/learn/cybersecurity-for-everyone"),
    5: ("https://www.youtube.com/watch?v=W41F-IdjPlU", "https://skillshop.exceedlms.com/student/collection/654330-digital-marketing?locale=en-GB"),
    6: ("https://www.youtube.com/watch?v=cGQHXmCS94M", "https://www.coursera.org/specializations/blockchain"),
    7: ("https://www.youtube.com/watch?v=2LaAJq1lB1Q", "https://www.coursera.org/learn/introduction-to-cloud"),
    8: ("https://www.youtube.com/watch?v=qDHnCFMZ9HA&t=2s", "https://www.udemy.com/course/video-editing-101-learn-the-basics-of-video-editing/"),
    9: ("https://www.youtube.com/watch?v=zLaOpZrLg70", "https://www.udemy.com/course/online-business-hacks-ecommerce/"),
    10: ("https://www.youtube.com/watch?v=EJHPltmAULA", "https://www.edx.org/learn/financial-accounting/massachusetts-institute-of-technology-financial-accounting?utm_medium=partner-marketing&utm_source=sem&utm_campaign=mitx&utm_term=introduction%20to%20financial%20accounting&utm_content=mm-fin-fl24-aw-c&gad_source=1&gclid=Cj0KCQjwjY64BhCaARIsAIfc7YbruRqjGWXR-UmX3v5-_A7b9I1HwIIfm2IKz9QPWFWHrQCUEZMJ-UYaAlzaEALw_wcB"),
    11: ("https://www.youtube.com/watch?v=xZDB1naRUlk", "https://www.udemy.com/course/build-ranking-system-stock-market-pro-chatbot-using-aiml/"),
    12: ("https://www.youtube.com/watch?v=mEsleV16qdo", "https://www.udemy.com/course/a-gentle-introduction-to-generative-ai/"),
    13: ("https://www.youtube.com/watch?v=HXV3zeQKqGY", "https://www.udemy.com/course/unity-mysql-database-management/"),
    14: ("https://www.youtube.com/watch?v=T0oO_-JlOdA", "https://www.coursera.org/enroll/google-project-management/paidmedia?utm_medium=sem&utm_source=gg&utm_campaign=b2c_india_google-project-management_google_ftcof_professional-certificates_arte_apr-24_dr_pmax_gads_lg-all&campaignid=21154881336&adgroupid=&device=c&keyword=&matchtype=&network=x&devicemodel=&adposition=&creativeid=&hide_mobile_promo&gad_source=1&gclid=Cj0KCQjwjY64BhCaARIsAIfc7YaBAat_SQf-KcEai4NZK-FCcPm-DuB25vttWy49s3bsGEK18-gJf2IaArcdEALw_wcB"),
    15: ("https://www.youtube.com/watch?v=BU_afT-aIn0", "https://www.coursera.org/professional-certificates/ux-design?utm_medium=sem&utm_source=gg&utm_campaign=b2c_india_ux-design_microsoft_ftcof_professional-certificates_arte_july-24_dr_sem_rsa_gads_lg-all&campaignid=21462595620&adgroupid=168648486670&device=c&keyword=courses%20for%20ux%20design&matchtype=p&network=g&devicemodel=&adposition=&creativeid=705748735569&hide_mobile_promo&gad_source=1&gclid =Cj0KCQjwjY64BhCaARIsAIfc7YZExpkLw_QYqyJN1iM7GWgMupncdkBUnRVm5mnA0hwn8ACX7jXXyQ4aAof_EALw_wcB"),
    16: ("https://www.youtube.com/playlist?list=PL_qYi3X0_AN5IFMFTvQhwVQpKeWEruDIN", "https://alison.com/course/diploma-in-automotive-systems-training"),
    17: ("https://www.youtube.com/playlist?list=PLBh8phtAyHPUY9fqgs1w6aHJALJ3_fMSc", "https://www.coursera.org/specializations/game-design-and-development"),
    18: ("https://www.youtube.com/watch?v=hQcFE0RD0cQ&t=4s", "https://www.coursera.org/learn/intro-to-devops"),
    19: ("https://www.youtube.com/watch?v=VPvVD8t02U8", "https://www.coursera.org/professional-certificates/meta-android-developer"),
    20: ("https://www.youtube.com/watch?v=ZxKM3DCV2kE", "https://www.coursera.org/specializations/html-css-javascript-for-web-developers")
}

# Define function to recommend course
def recommend_course():
    # Dictionary to count occurrences of each course
    course_count = {i: 0 for i in range(1, 21)}

    # Iterate over each question and get the user's choice
    for question_number in range(1, 11):
        # Display the question
        st.write(f"Question {question_number}: {questions[question_number]}")

        # Display the options as radio buttons
        choice = st.radio("Choose an option:", options[question_number], key=question_number)

        # Extract the letter of the selected option
        choice_letter = choice.split(')')[0]

        # Update the count for each course in the selected option
        for course in course_allocations[question_number][choice_letter]:
            course_count[course] += 1

    # Find the course with the maximum count
    recommended_course_id = max(course_count, key=course_count.get)
    recommended_course_name = course_names[recommended_course_id]

    # Output the recommended course
    st.write(f"\nBased on your answers, we recommend the course: {recommended_course_name}")
    st.write(f"Here's a YouTube video to help you learn more about the topic: {links[recommended_course_id][0]}")
    st.write(f"And here's a link to a learning resource to get started: {links[recommended_course_id][1]}")

    # Display summary of the recommended course
    try:
        summary = wikipedia.summary(recommended_course_name, sentences=3)
        st.write(f"Here's a brief summary of {recommended_course_name}:")
        st.write(summary)
    except wikipedia.exceptions.DisambiguationError as e:
        st.write("The topic is ambiguous, try refining your search.")
    except wikipedia.exceptions.PageError:
        st.write("Could not find a summary for this course. Please check the course name and try again.")
    except Exception as e:
        st.write("An error occurred while fetching the summary.")

    # Prompt the user to select a duration for the roadmap
    st.write("\nPlease select a duration for the roadmap:")
    duration = st.selectbox("Duration", ["10 days", "30 days", "6 months", "1 year"])

    # Generate the roadmap based on the selected duration
    model = genai.GenerativeModel('gemini-pro')
    response = model.generate_content(f"Give a {duration} roadmap for {recommended_course_name}.")
    st.write(f"\nHere's a {duration} roadmap for {recommended_course_name}:")
    st.write(response.text)

# Display the user interface
st.title("Course Recommendation System")
st.write("Welcome to our course recommendation system! Answer the following questions to help us find the perfect course for you.")
recommend_course()