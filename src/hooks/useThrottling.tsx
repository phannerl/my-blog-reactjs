import { useEffect, useRef, useState } from 'react';

function useThrottle(value: string, limit: number) {
    const [throttledValue, setThrottledValue] = useState(value);
    const lastRan = useRef(Date.now());

    useEffect(
        () => {
            const handler = setTimeout(function () {
                if (Date.now() - lastRan.current >= limit) {
                    setThrottledValue(value);
                    lastRan.current = Date.now();
                }
            }, limit - (Date.now() - lastRan.current));

            return () => {
                clearTimeout(handler);
            };
        },
        [value, limit] // Add value here to update throttledValue whenever value changes
    );

    return throttledValue;
}

export default useThrottle;
