import React, { useState } from "react";
import '../../styles/TimeLine/TimeLine.css';

function TimeLine() {

    const [timeLineOffset, setTimeLineOffset] = useState(0);

    function incrementQuestion(rank) {
        if (rank === timeLineOffset) {
            const newOffset = timeLineOffset + 1;
            let pipeline = document.getElementById("TimeLineSegment");
            pipeline.style.backgroundPosition = `100% ${100 - (newOffset * (100 / 6))}%`;
            setTimeLineOffset(newOffset);
        }
    }

    function resetTimeline() {
        let pipeline = document.getElementById("TimeLineSegment");
        pipeline.style.backgroundPosition = `100% 100%`;
        setTimeLineOffset(0);
    }

    return (
        <div className="InnerShowcaseContainer">
            <p className="InnerShowcaseHeader">Time Line Component</p>
            <div className="TimeLineWrapper">
                <div className="TimeLineColumnWrapper">
                    <div className="TimeLinePipeLine" id="TimeLineSegment"></div>
                    <button onClick={() => resetTimeline()}>Reset</button>
                </div>
                <div className="TimeLineColumnWrapper">
                    <p className="TimeLineQuestion">Are you over the age of 18?</p>
                    <div className="TimeLineButtonWrapper">
                    <button className="TimeLineButton" onClick={() => incrementQuestion(0)} >Yes</button>
                    <button className="TimeLineButton" onClick={() => incrementQuestion(0)} >No</button>
                    </div>
                    <p className="TimeLineQuestion">Will you require VISA sponsorship?</p>
                     <div className="TimeLineButtonWrapper">
                    <button className="TimeLineButton" onClick={() => incrementQuestion(1)} >Yes</button>
                    <button className="TimeLineButton" onClick={() => incrementQuestion(1)} >No</button>
                    </div>
                    <p className="TimeLineQuestion">Will you need relocation assistance?</p>
                     <div className="TimeLineButtonWrapper">
                    <button className="TimeLineButton" onClick={() => incrementQuestion(2)} >Yes</button>
                    <button className="TimeLineButton" onClick={() => incrementQuestion(2)} >No</button>
                    </div>
                    <p className="TimeLineQuestion">Are you comfortable being in office 2-3 times per week?</p>
                     <div className="TimeLineButtonWrapper">
                    <button className="TimeLineButton" onClick={() => incrementQuestion(3)} >Yes</button>
                    <button className="TimeLineButton" onClick={() => incrementQuestion(3)} >No</button>
                    </div>
                    <p className="TimeLineQuestion">Are you or have you ever been a government official?</p>
                     <div className="TimeLineButtonWrapper">
                    <button className="TimeLineButton" onClick={() => incrementQuestion(4)} >Yes</button>
                    <button className="TimeLineButton" onClick={() => incrementQuestion(4)} >No</button>
                    </div>
                    <p className="TimeLineQuestion">Do you certify that all of your responses are true?</p>
                     <div className="TimeLineButtonWrapper">
                    <button className="TimeLineButton" onClick={() => incrementQuestion(5)} >Yes</button>
                    <button className="TimeLineButton" onClick={() => incrementQuestion(5)} >No</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TimeLine;
