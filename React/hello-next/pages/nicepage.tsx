import { builtinModules } from "node:module"
import { prependOnceListener } from "node:process"

function Heading (props) {
    const variables = Math.random() > 0.5 ? 'red' : 'blue';
    return (
        <div>
            <h1>{props.heading}</h1>
            <style jsx>
                {`
                    h1 {
                        // color: red;
                        color: ${variables};
                    }
                `}
            </style>
        </div>
    )
}

export default function Nicepage () {
    return (
    <div>
        <Heading heading="Heading" />
        <h1 className="" onClick={() => alert("hello")}>
            This is amazingly surprise and okay by me sha!!!
        </h1>
    </div>)
}