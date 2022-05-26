import { memo, useEffect, useState } from "react"
import { observableFunction } from "../hooks/useObserver";

interface ISwitchText {
    observable?: (observerFunction: observableFunction) => void
}

function SwitchText(props: ISwitchText) {
    const [text, setText] = useState('TTTTTT');
    const renameText: observableFunction = (update: string) => setText(update);

    useEffect(() => {
        if (!!props.observable) {
            props.observable(renameText)
        }
    }, [props.observable])

    return (
        <div>{text}</div>
    )
}

export default memo(SwitchText);