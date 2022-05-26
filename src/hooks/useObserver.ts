export const useObserver = () => {
    let subscribers = [] as (() => void)[];

    function subscribe(toggleState: () => void) {
        console.log(toggleState);

        // if (subscribers.includes(toggleState)) { return; }
        // setSubscribers([...subscribers, toggleState])

        subscribers.push(toggleState)
    }

    function unSubscribe(toggleState: () => void) {
        if (!subscribers.includes(toggleState)) { return; }

        let newSubs = subscribers.filter(functions => functions !== toggleState)
        subscribers = ([...newSubs])
    }

    function notifySubscribers() {
        console.log("notify");
        console.log("subscribers" + subscribers);

        subscribers.forEach(subs => {
            subs();
        })
    }

    return {
        subscribe,
        subscribers,
        unSubscribe,
        notifySubscribers
    }
}