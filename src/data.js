import highSchool from "./images/high-school.jpg"
import kau from "./images/KAU_logo.png"
import jazanu from "./images/jazanUniversity.jpg"
import computer from "./images/computer.jpg"
import graduate from "./images/graduate.jpg"

const myTimeline = [
    {
        id: 1,
        year: 2011,
        event : "Graduated High School",
        image: <img src={highSchool} alt="high school pic" />
    },
    {
        id: 2,
        year: 2011,
        event: "Admitted to King Abdulaziz Universtiy",
        image: <img src={kau} alt="King Abdulaziz university" />
    },
    {
        id: 3,
        year: 2013,
        event: "Left King Abdulaziz University and Admitted to Jazan University",
        college: "Engineering College",
        image: <img src={jazanu} alt="Jazan university" />
    },
    {
        id: 4,
        year: 2015,
        event: "Transferred for Engineering College to IT and Computer Science College",
        image: <img src={computer} alt="Computer Sciene" />
    },
    {
        id: 5,
        year: 2020,
        event: "Graduated as A Computer and Netwroks Engineer",
        image: <img src={graduate} alt="Graduation"/>
    }
]


export default myTimeline;