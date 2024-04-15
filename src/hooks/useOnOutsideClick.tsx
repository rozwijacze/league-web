import { useEffect } from 'react';

/**
 * @hook useOnOutsideClick
 * @description executes a callback on click event on any element besides those included in exceptionRefArr
 *
 * @param exceptionRefArr array of RefObjects (useRef HTML elements) - click event on element included there doesn't trigger a callback function
 * @param callback function which is executed on click event on any element besides those included in exceptionRefArr
 *
 * @example
 * ```
 * const callback = () => someFunction();
 * const divRef = useRef<HTMLDivElement>(null);
 * const buttonRef = useRef<HTMLButtonElement>(null);
 * useOnClickOutside([divRef, buttonRef], callback);
 *
 * return (
 *  <div className="container">
 *      <div ref={firstRef}></div>
 *      <button ref={secondRef}></button>
 *  </div>
 * );
 * ```
 */
export default function useOnOutsideClick(
    exceptionRefArr: React.RefObject<HTMLElement>[],
    callback: (event: MouseEvent | TouchEvent) => void
) {
    useEffect(() => {
        function listener(event: MouseEvent | TouchEvent) {
            if (
                exceptionRefArr.some(
                    exception =>
                        !exception.current || exception.current.contains(event.target as Node)
                )
            )
                return;

            callback(event);
        }

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [exceptionRefArr, callback]);
}
