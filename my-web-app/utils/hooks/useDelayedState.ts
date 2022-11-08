import {useEffect, useState} from 'react'

export const Delayed = (set: (arr: any[]) => void, arr: any[], waitBeforeShow = 500) => {
    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsShown(true);
            set(arr);
        }, waitBeforeShow);

        return () => clearTimeout(timer);
    }, [arr, set, waitBeforeShow]);

    return isShown;
};