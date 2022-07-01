import {ReactComponent as TwitterLogo} from "./twitter.svg"
import {ReactComponent as GithubLogo} from "./github.svg"
import {ReactComponent as LinkedinLogo} from "./linkedin.svg"
import "./MediaButtons.css"
export function MediaButtons(){
    return (
        <footer className="py-4 ">
            <ul className="nav col-md-12  list-unstyled d-flex MediaButtons-icons gap-4">
                <a rel="noreferrer" href="https://twitter.com" target="_blank">
                    <TwitterLogo className="white-icon" />
                </a>
                <a rel="noreferrer" href="https://github.com/Emart99" target="_blank">
                    <GithubLogo className="white-icon"/>
                </a>
                <a rel="noreferrer" href="https://linkedin.com" target="_blank">
                    <LinkedinLogo className="white-icon"/>
                </a>
            </ul>
        </footer>
        
    )
}