import { LampComponentProps } from '../types/LampTypes'
import './LampComponent.css'

export function LampComponent(props:LampComponentProps) {
    return (
        <div id="lamp" className="">
            <input type="radio" name="switch" value={props.theme} />
            <input type="radio" name="switch" value={props.theme} defaultChecked={true} />
            <div className="lamp">
                <div className="gonna-give-light"></div>
            </div>
        </div>
    )
}