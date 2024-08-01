import "../styles/resume.css";

export default function Resume({resumeRef}) {
    return (
        <section id="resume" ref={resumeRef}>
            <h2 className={"intro"}>Resume</h2>
            <button className={"resumebtn"}>View my resume here!</button>
        </section>
    )
}