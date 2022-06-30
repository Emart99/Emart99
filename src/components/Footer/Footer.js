import {ReactComponent as TwitterLogo} from "./twitter.svg"
import {ReactComponent as GithubLogo} from "./github.svg"
import {ReactComponent as LinkedinLogo} from "./linkedin.svg"
import "./Footer.css"
export function Footer(){
    return (
        <footer className="Footer py-4 ">
            <ul className="nav col-md-12  list-unstyled d-flex gap-4">
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