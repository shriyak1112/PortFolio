import React, { useContext } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './TimelineSection.css';
import { themeContext } from '../../Context';
const TimelineSection = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (

        <VerticalTimeline className='portfolio' id='portfolio' style={{ color: darkMode ? "white" : "" }}>
            <VerticalTimelineElement
                className="vertical-timeline-element--work blue-border"
                contentStyle={{ color: '#000' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2024"
                iconStyle={{ color: '#fff' }}
                icon={<div className="icon"></div>}
            >
                <h3 className="vertical-timeline-element-title" style={{ color: "#8d73e6", fontWeight: "bold" }}>INTERN AT</h3>
                <h4 className="vertical-timeline-element-subtitle" style={{ color: "#8d73e6", fontWeight: "bold" }}>TRANSORG ANAYTICS</h4>
                <p>
                    <ul>
                        <li>Excelled in speech transcription at Trans Org Analytics, transforming spoken content into accurate written records.</li>
                        <li>Played a key role in speech diarization projects, optimizing data categorization and enhancing organizational efficiency through meticulous audio data structuring.</li>
                    </ul>
                </p>

            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work blue-border"
                contentStyle={{ color: '#000' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2024"
                iconStyle={{ color: '#fff' }}
                icon={<div className="icon"></div>}
            >
                <h3 className="vertical-timeline-element-title" style={{ color: "#8d73e6", fontWeight: "bold" }}>OUTREACH CONSULTANT AT</h3>
                <h4 className="vertical-timeline-element-subtitle" style={{ color: "#8d73e6", fontWeight: "bold" }}>EXCELERATE</h4>
                <p>
                    <ul>
                        <li>Conducted rigorous secondary research to identify law firms, private equity firms, and MNCs in Shanghai and Beijing suitable for collaboration with Grant Thornton.</li>
                        <li>Mapped use cases for Grant Thornton's forensic advisory services, aligning client needs with service offerings to enhance engagement strategies.</li>
                    </ul>
                </p>

            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work blue-border"
                contentStyle={{ color: '#000' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2024"
                iconStyle={{ color: '#fff' }}
                icon={<div className="icon"></div>}
            >
                <h3 className="vertical-timeline-element-title" style={{ color: "#8d73e6", fontWeight: "bold" }}>EXPENSE-TRACKER</h3>
                <p>
                    <ul>
                        <li>Developed an Expense Tracker app using React, GraphQL, and Passport.js for dynamic UIs, optimized data querying, and secure authentication.</li>
                        <li>Implemented Chart.js for intuitive pie charts, helping users visualize spending patterns and make informed financial decisions.</li>

                    </ul>
                </p>
                <button
                    className="button s-button"
                    onClick={() => window.open("https://expense-tracker-l8kz.onrender.com/", "_blank")}
                >
                    Visit Website
                </button>

            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work blue-border"
                contentStyle={{ color: '#000' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2023"
                iconStyle={{ color: '#fff' }}
                icon={<div className="icon"></div>}
            >
                <h3 className="vertical-timeline-element-title" style={{ color: "#8d73e6", fontWeight: "bold" }}>LISTINATOR</h3>

                <p>
                    <ul>
                        <li>Developed a scalable To-do list app using ReactJS, CSS, and ExpressJS, featuring secure user authentication and efficient storage.</li>
                        <li>Boosted user productivity and data security with a responsive, intuitive design, showcasing full-stack development and user-centric principles.</li>

                    </ul>
                </p>

                <button
                    className="button s-button"
                    onClick={() => window.open("https://listinator-frontend.vercel.app/", "_blank")}
                >
                    Visit Website
                </button>


            </VerticalTimelineElement>
        </VerticalTimeline>
    );
}
export default TimelineSection;