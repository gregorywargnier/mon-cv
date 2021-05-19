import React, {Component} from 'react';
import ProgressBar from "./ProgressBar";
class Languages extends Component {
    state = {
        languages: [
            {id: 1, value: "html", xp: 1.5},
            {id: 2, value: "Css", xp: 1.5},
            {id: 3, value: "Php", xp: 1},
            {id: 4, value: "Javascript", xp: 1}
        ],
        frameworks: [
            {id: 1, value: "Bootstrap", xp: 1.5},
            {id: 2, value: "Sass", xp: 1.5},
            {id: 3, value: "Symfony", xp: 1},
            {id: 4, value: "React", xp: 0.5}
        ],
    }
    render() {
        let {languages, frameworks} = this.state;
        return (
            <div className="languagesFrameworks">
                <ProgressBar
                    languages={languages}
                    className="languagesDisplay"
                    title="languages"
                />
                <ProgressBar
                    languages={frameworks}
                    title="frameworks"
                    className="frameworksDisplay"
                />
            </div>
        );
    }
}

export default Languages;
