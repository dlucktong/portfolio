import "../styles/about.css";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {motion} from "framer-motion";

export default function About({projectRef, resumeRef, contactRef}) {

    const container = {
        visible: {
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.4
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <section id="about">
            <div className={"socials"}>
                <a className={"socialIcon"} href={"https://github.com/dlucktong"} rel={"noreferrer"} target={"_blank"}><FontAwesomeIcon icon={faGithub} /></a>
                <a className={"socialIcon"} href={"https://linkedin.com/in/andrewlucktong"} rel={"noreferrer"} target={"_blank"}><FontAwesomeIcon icon={faLinkedin}/></a>
                <button className={"socialIcon"} onClick={() =>
                    window.scrollTo({
                        top: contactRef.current.offsetTop,
                        behavior: "smooth"
                    })}><FontAwesomeIcon icon={faEnvelope} /></button>
            </div>
            <div className={"aboutInfo"}>

                <motion.div className={"content"}>
                    <motion.h1
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
                       }}
                        className={"intro"}>Hi, my <br /> name is <b>Drew</b>.</motion.h1>
                    <div className={"text-container"}>
                        <motion.p
                            initial={{
                                opacity: 0,
                                x: 15,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0
                            }}
                            viewport={{
                                amount: "all",
                                once: true
                            }}
                        transition={{delay: 0.2}}>I'm an <strong>aspiring software engineer</strong> from Roanoke, Virginia.
                        </motion.p>
                    </div>
                    <div className={"buttonContainer"}>
                        <motion.div variants={container}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{margin:"-200px", once: true}} className={"buttonContainer"}>
                            <motion.div variants={item} id={"projectsButton"}
                                 className={"btn"}
                                 onClick={() =>
                                     window.scrollTo({
                                         top: projectRef.current.offsetTop,
                                         behavior: "smooth"
                                     })}>
                                Projects
                            </motion.div>
                            <motion.div variants={item} id={"resumeButton"}
                                 className={"btn"}
                                 onClick={() =>
                                     window.scrollTo({
                                         top: resumeRef.current.offsetTop,
                                         behavior: "smooth"
                                     })}>
                                Resume
                            </motion.div>
                            <motion.div variants={item} id={"contactButton"}
                                        className={"btn"}
                                        onClick={() => window.scrollTo({top: contactRef.current.offsetTop, behavior: "smooth"})}>
                                Contact
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
                    <motion.img
                        initial={{
                        opacity: 0,
                        x: 15,
                    }}
                        whileInView={{
                        opacity: 1,
                        x: 0
                    }}
                        viewport={{
                        amount: "all",
                        once: true
                    }} className={"profile-img"} src={require("../resources/DrewLucktong.png")} alt="Me"/>
            </div>
        </section>
    )
}