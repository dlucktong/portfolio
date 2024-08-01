import "../styles/project.css";
import Lottie from 'react-lottie'
import {useRef, useState} from "react";
import {faYoutube} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {motion} from "framer-motion"

export default function Project({data, toggleDialog, setVideo}) {

    const dialogRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    function moreInfo() {
        if(!dialogRef.current) {
            return;
        }

        if(dialogRef.current.hasAttribute("open")) {
            dialogRef.current.style.display = "none"
            dialogRef.current.removeAttribute("open");
        }
        else {
            dialogRef.current.style.display = "flex";
            dialogRef.current.setAttribute("open", "")
        }

    }

    const defaultOptions = {
        loop: false,
        autoplay: false,
        animationData: data.animationData
    };

    const container = {
        hidden: { opacity: 1},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
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
        <motion.div
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            viewport={{
                amount: "all",
                once: true
            }}
            onViewportEnter={() => setIsVisible(!isVisible)}
            className={"project"}>
            <div className={"overview"}>
                <h3>{data.title}</h3>
                <h4>{data.date}</h4>
            </div>
            <div className={"container"}>
                <div className={"anim"}>
                    <Lottie options={defaultOptions} isPaused={!isVisible} style={{width: "100%", height: "unset"}}/>
                </div>
                <div className={"info"}>

                    <p>{data.description} <button className={"more"} onClick={moreInfo}>Learn more ></button></p>
                    <h4>Languages & technologies:</h4>
                    <motion.div className={"tag-container"}
                                variants={container}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{margin:"-200px", once: true}}>
                        {data.tech?.map(function (obj) {
                            return <motion.span variants={item}>{obj}</motion.span>
                        })}
                    </motion.div>
                    <div className={"links"}>
                        { data?.video ? <button className={"link"}
                                onClick={(e) => {
                                    toggleDialog();
                                    setVideo(data.video);
                                    e.stopPropagation()
                                }
                                }>{data.video ? <FontAwesomeIcon icon={faYoutube} /> : ""}
                        </button> : null}
                        {data.links?.map(function (obj) {
                            return <a className={"link"}
                                      href={obj.url}
                                      onClick={(e) => {
                                      }}
                                      target={"_blank"}
                                      rel={"noreferrer"}>{obj.icon}</a>
                        })}
                    </div>
                </div>
            </div>
            <div className={"modal"} ref={dialogRef} onClick={(e) => {
                if (e.currentTarget === e.target) {
                    moreInfo();
                }}}>
                <div className={"additional"} >
                    <img src={data.img} alt={data.title + " cover"}></img>
                    <div>
                        <h3>{data.title}</h3>
                        <h5 className={"desc"}>{(data.tech?.join(" - "))}</h5>
                        <p className={"desc"}>{data.detailed}</p>
                        <h4>Links:</h4>
                        <div className={"links"}>
                            {data?.video ? <button className={"link"}
                                                   onClick={(e) => {
                                                       toggleDialog();
                                                       setVideo(data.video);
                                                       e.stopPropagation()
                                                   }
                                                   }>{data.video ? <FontAwesomeIcon icon={faYoutube}/> : ""}
                                {data.video ? " Video" : ""}
                            </button> : null}
                            {data.links?.map(function (obj) {
                                return <a className={"link"}
                                          href={obj.url}
                                          onClick={(e) => {
                                          }}
                                          target={"_blank"}
                                          rel={"noreferrer"}>{obj.icon} {obj.label}</a>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
