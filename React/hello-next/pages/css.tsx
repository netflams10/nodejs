// css.module.css is only available to particular component
// the naming structure above let it work without an error...
import style from './cascade.module.scss';

function Header (props) {
    return (
        <div>
            <h1 className="red">{props.heading}</h1>
        </div>
    )
}

export default function Css () {
    return (
        <div>
            <Header  heading="Header is Here" />

            <h5 className={style.blue}><span>Banger of Red Scss </span>Common another banger!!!</h5>
        </div>
    )
}