import "../styles/contact.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

export default function Contact({contactRef}) {
    return (
        <section id="contact" ref={contactRef}>
            <h2 className={"intro"}>Contact</h2>
            <p>Shoot me an email if you want to connect! You can also find me on <a className={"blue link"}
                                                                                    href={"https://linkedin.com/in/andrewlucktong"}
                                                                                    rel={"noreferrer"}
                                                                                    target={"_blank"}>Linkedin</a>.</p>
            <h4 className={"email"} onClick={() => {
                navigator.clipboard.writeText("dlucktong@gmail.com").then(document.getElementById("copyMessage").classList.add("show")).finally(setTimeout(() => {
                    document.getElementById("copyMessage").classList.remove("show")
                }, 2000))
            }}>
                <FontAwesomeIcon icon={faEnvelope} /> dlucktong@gmail.com
                <small id={"copyMessage"}>Copied to clipboard!</small>
            </h4>
        </section>
    )
}