import { memo, useEffect, useState } from "react"

interface ISwitchText {
    observable?: (observerFunction: () => void) => void
}

function SwitchText(props: ISwitchText) {
    const [text, setText] = useState('TTTTTT');
    const renameText = () => setText('WWWWWWW');

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