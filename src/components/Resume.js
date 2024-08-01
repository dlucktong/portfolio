import "../styles/resume.css";

export default function Resume({resumeRef}) {
    return (
        <section id="resume" ref={resumeRef}>
            <h2 className={"intro"}>Resume</h2>
            <a href={"Resume_Andrew_Lucktong.pdf"} className={"resumebtn"}>View my resume here!</a>
        </section>
    )
}