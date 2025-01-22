import List from './Components/ListComponent.jsx'
import Heading from './Components/Header.jsx'
import Title from './Components/Title.jsx'

export default function App() {
  const name = "Isaac Chan"
  const contactInfo = ["(437) 838-8788", "isaacchan721@gmail.com", "https://github.com/IsaacChan721", "https://www.linkedin.com/in/isaacchan721"]

  // Skills
  const skillsHeading = "Skills"
  const skillsBullets = [
    "Languages: Python, Java, HTML, CSS, JavaScript, C, Bash", 
    "Libraries/Frameworks: OpenCV, MatPlotLib, Numpy, TensorFlow, TailwindCSS, React",
    "Software Applications: Linux, Git/Github, AWS, VSCode"
  ]

  // Projects
  const projectsHeading = "Projects"
  const projects = [
    "Valorant Manager - Ben Tenz (VCT Hackathon - AWS Hackathon Finalist)",
    "Floppy Fingers", 
    "Money Moves (DEI Fidelity Winner - Hack the North)", 
    "AI Powered Security Camera", 
    "Youtube Academy (GDSC Hackathon Project)"
  ]
  const projectBullets = [
    [
      "Competed against 1000+ participants in creating a custom LLM agent designed to generate Valorant esport teams in AWS",
      "Customized agent with knowledge bases, agentic workflows, and action groups to optimize cost, response time, and accuracy",
      "Stored and modified web-scraped JSON data using S3 buckets and AWS Lambda functions for customized agent responses"
    ],
    [
      "Collaborated with 1 other individual on a full-stack website drawing game based on AI hand-tracking",
      "Utilized Google’s Mediapipe API to integrate hand landmark and gesture detection for users to draw on a canvas",
      "Programmed the setup and game page using React and Tailwind CSS for configurable player settings and game logic"
    ],
    [
      "Developed a stock market analysis website by web-scraping and identifying sentiment of news articles with 2 individuals",
      "Designed and implemented a user interface using React and Tailwind CSS for a positive user experience",
      "Trained a custom NLP model using Tensorflow, Pandas, and NumPy to identify the sentiment of parsed strings accurately"
    ],
    [
      "Created a security camera used to identify familiar and unfamiliar individuals and vehicles and notify the user",
      "Highlighted objects using OpenCV with bounding boxes based on set thresholds to differentiate people and vehicles",
      "Analyzed confusion matrix, adjusted epochs, and annotated 500+ images to enhance training accuracy"
    ],
    [
      "Created a program to enhance education by combining relevant video snippets based on user requests",
      "Integrated YouTube API to search for trending videos and transcripts that are passed to the LLM",
      "Employed Google’s LLM Gemini to tokenize user input and identify key timestamps in videos for relevant videos"
    ]
  ]
  const projectDates = [
    "September 2024 - November 2024",
    "July 2024 - September 2024",
    "September 2024",
    "June 2024",
    "February 2024"
  ]

  // Experiences
  const experienceHeading = "Experience"
  const experiences = [
    "Coding Instructor"
  ]
  const experienceBullets = [
    [
      "Educated over 50 children on the basics of coding and problem-solving using Minecraft Education Edition",
      "Managed and taught a classroom of children from ages 5 to 12",
      "Cooperated with over 10 instructors to design and create lesson plans"
    ]
  ]
  const experienceDates = [
    "June 2023 - August 2023"
  ]

  // Education
  const educationHeading = "Education"
  const educations = [
    "McMaster University"
  ]
  const educationBullets = [
    [
      "Software Engineering CO-OP",
      "GPA: 11.8/12.0",
      "$3000 Entrance Scholarship with Free Choice",
      "Relevant Courses: OOP, Development Basics"
    ]
  ]
  const educationDates = [
    "September 2023 - Present"
  ]

  //Activities/Achievements
  const ActivitiesHeading = "Activities/Achievements"
  const ActivitiesBullets = [
    [
      "Participated in DeltaHacks X and DeltaHacks XI",
      "AWS Cloud Practitioner Certificate",
      "Competed in SumoBots and GDSC Hackathon"
    ]
  ]
  const ActivitiesDates = [
    "2024-2025",
    "2025",
    "2024"
  ]

  return (
    <div className="font-serif flex-row max-w-4xl px-8 py-10 border-black border-4 mx-auto my-20">
      <Title name={name} contactInfo={contactInfo} />
      
      {/* Skills */}
      <Heading heading={skillsHeading} />
      <List bullets={skillsBullets} />

      {/* Projects */}
      <Heading heading={projectsHeading} />
      {
        projects.map((project, i) => (
          <List event={project} bullets={projectBullets[i]} date={projectDates[i]}></List>
        ))
      }

      {/* Experiences */}
      <Heading heading={experienceHeading} />
      {
        experiences.map((experience, i) => (
          <List event={experience} bullets={experienceBullets[i]} date={experienceDates[i]}></List>
        ))
      }

      {/* Education */}
      <Heading heading={educationHeading} />
      {
        educations.map((education, i) => (
          <List event={education} bullets={educationBullets[i]} date={educationDates[i]} columns={2}></List>
        ))
      }

      {/* Acitivies/Achievements */}
      <Heading heading={ActivitiesHeading} />
      {ActivitiesBullets.map((bullet, i) => (
        <List key={i} bullets={bullet} bulletDate={ActivitiesDates}/>
      ))}
    </div>
  )
}