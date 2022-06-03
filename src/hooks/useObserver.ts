export type observableFunction = (update: string) => void


export const useObserver = () => {
    let subscribers = [] as observableFunction[];

    let changeString = 'Eita';

    function subscribe(toggleState: observableFunction) {
        if (subscribers.includes(toggleState)) { return; }
        subscribers.push(toggleState)
    }

    function unSubscribe(toggleState: observableFunction) {
        if (!subscribers.includes(toggleState)) { return; }

        let newSubs = subscribers.filter(functions => functions !== toggleState)
        subscribers = ([...newSubs])
    }

    function setChangeString(newString: string) {
        changeString = newString
        notifySubscribers()
    }

    function notifySubscribers() {
        subscribers.forEach(subs => {
            subs(changeString);
        })
    }

    return {
        subscribe,
        subscribers,
        unSubscribe,
        setChangeString,
        notifySubscribers
    }
}