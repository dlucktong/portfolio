import "../styles/projects.css";
import Project from "./Project";
import {useRef, useState} from "react";
import * as fmData from "../resources/fm.json";
import * as ddData from "../resources/dd.json"
import * as sbData from "../resources/sb.json"
import * as jeData from "../resources/je.json"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUpRightFromSquare, faCode, faDownload} from "@fortawesome/free-solid-svg-icons";
import {motion} from "framer-motion";

export default function Projects({projectRef}) {

    const dialogRef = useRef(null);
    const infoRef = useRef(null);
    const [video, setVideo] = useState("");
    function toggleDialog() {
        if(!dialogRef.current) {
            return;
        }
        setVideo("");
        dialogRef.current.hasAttribute("open")
            ? dialogRef.current.close()
            : dialogRef.current.showModal();
    }

    return (
        <section id="projects" ref={projectRef}>

            <motion.h2
                initial={{
                    opacity: 0,
                    x: -15,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0
                }}
                viewport={{
                    amount: "all",
                    once: true
                }}>Projects
            </motion.h2>

            <motion.div
                className={"proj-container"}>
                <Project
                    data={{
                        idx: 0,
                        img: require("../resources/fm.png"),
                        animationData: fmData,
                        title: "FlavorMatch",
                        date: "Jan 2024 - Present",
                        description: "FlavorMatch is a full stack web application designed to match users with recipes based on preferences and dietary restrictions.",
                        detailed: "FlavorMatch is a recipe recommendation platform that personalizes culinary discovery using the Tasty API. Users are shown recipes that are specifically tailored to their dietary restrictions and preferences and can choose to either 'like' or 'dislike' based on what they think looks good. \n\n" +
                            "Built with a backend in PHP and a frontend using HTML, CSS, and JavaScript, the site delivers a dynamic and engaging user experience. The integration of AJAX and jQuery ensures smooth, real-time interactions, enhancing the overall usability of the platform. \n\n" +
                            "Key features include personalized recipe recommendations, user profile management, and a dynamic section showcasing trending recipes.",
                        tech: ["PHP", "HTML", "CSS","jQuery", "JavaScript", "MySQL", "PostgreSQL", "APIs"],
                        video: "https://youtube.com/embed/EyOXFAZExzo",
                        links: [{label: "Website", url: "https://www.flavormatch.co", icon: <FontAwesomeIcon icon={faArrowUpRightFromSquare} />}]
                }} toggleDialog={toggleDialog} setVideo={setVideo}/>
                <Project data={{
                    idx: 1,
                    img: require("../resources/dd.png"),
                    animationData: ddData,
                    title: "Dine and Dash",
                    date: "Jan 2024 - Present",
                    description: "Dine and Dash is a high-speed driving game where you take on the role of a delivery driver racing through the city to deliver food to customers.",
                    detailed: "Dine and Dash is a fast-paced arcade style driving game where you play as a delivery driver, racing across the city to pick up and deliver food to customers. Make quick deliveries to earn tips and upgrade your vehicle as orders stack up. Each day, you’ll have to fulfill more deliveries, so be sure to drive fast because as soon as you miss a delivery, the game is over!\n\n" +
                    "Dine and Dash was developed in Unity using C#. In the future, I'd like to add traffic, weather, and other obstacles to make the game more engaging and difficult as well as rebalancing and reworking core game mechanics to give the game a more polished feel.",
                    tech: ["Unity", "C#", "Blender"],
                    video: "https://youtube.com/embed/obWGwzrKWqw",
                    links: [{label: "Code", url: "https://github.com/dlucktong/dine-and-dash", icon: <FontAwesomeIcon icon={faCode} />}, {
                        label: "Download",
                        url: "#",
                        icon: <FontAwesomeIcon icon={faDownload} />
                    }]
                }} toggleDialog={toggleDialog} setVideo={setVideo}/>
                <Project data={{
                    idx: 3,
                    img: require("../resources/je.png"),
                    animationData: jeData,
                    title: "Journal Database Search Engine",
                    date: "Jun 2023 - Jul 2023",
                    description: "The Journal Database Search Engine is a project to store and search 18th and 19th century journal narratives in a database system.",
                    detailed: "*NOTE* This project was developed for a summer class and was never hosted. The project should run locally.\n\n" +
                    "The Journal Database Search Engine is a project designed to interface a database of 18th and 19th century journal narratives. These narratives were previously organized in an excel document, and the goal of the project was to store narratives in a more user friendly way. The search engine allows users to search for narratives based on multiple filters to help the user find the most relevant information.\n\n" +
                    "This project was developed using Python and Django, maintaining a SQLite Database. I worked primarily on the search and filter functionality, but assisted in database design and csv to database entry conversion.",
                    tech: ["Django", "Python", "HTML", "CSS", "Bootstrap", "SQLite", "RDBMS"],
                    links: [{label: "Code", url: "https://github.com/lommoberry/database-sisters", icon: <FontAwesomeIcon icon={faCode} />}]
                }} toggleDialog={toggleDialog}/>
                <Project data={{
                    idx: 2,
                    img: require("../resources/sb.png"),
                    animationData: sbData,
                    title: "Study Buddy",
                    date: "Aug 2022 - Dec 2022",
                    description: "Study Buddy is a web application developed using Python and Django to help UVA students find study partners in their classes.",
                    detailed: "*NOTE* This site is no longer hosted due to the removal of Heroku Free Tier\n\n" +
                    "Study Buddy is a website developed for the CS3240 class to help University of Virginia students find study partners in their classes. The site fetches classes from a custom API and users are able to select their classes to add to a profile. The main functionality of the site focuses on finding partners to study with in your classes. Users can find users with similar schedules, chat with users and set up meetings at a specific time and location.\n\n" +
                    "Study Buddy was developed using a Python and Django backend with a frontend designed using Bootstrap. The site features Google Login functionality and leverages a PostgreSQL database to enable profile management and asynchronous chat rooms.",
                    tech: ["Django", "Python", "HTML", "CSS", "Bootstrap", "PostgreSQL", "APIs"],
                    links: [{label: "Code", url: "https://github.com/dlucktong/UVAstudybuddyfinder", icon: <FontAwesomeIcon icon={faCode} />}]
                }} toggleDialog={toggleDialog}/>
            </motion.div>
            <dialog className={"video"} ref={dialogRef} onClick={(e) => {
                if (e.currentTarget === e.target) {
                    toggleDialog();
                }
            }}>
                <button className={"close"} onClick={toggleDialog}>x</button>
                <iframe src={video} title={video} allowFullScreen={true}></iframe>
            </dialog>
            <dialog ref={infoRef}>

            </dialog>
        </section>
)
}