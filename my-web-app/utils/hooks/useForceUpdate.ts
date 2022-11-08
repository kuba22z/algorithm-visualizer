import {useCallback, useState} from "react";

export function useForceUpdate() {
    const [, forceUpdate] = useState(false);

    return useCallback(() => {
        forceUpdate(s => !s);
    }, []);
}