import {CSSProperties, ReactNode} from "react";
import classNames from "classnames";
import styles from '../../../styles/Rectangle.module.css'
import {TransitionStatus} from "react-transition-state";


export type RectangleProps =
    { cssProps?: CSSProperties, status?: TransitionStatus, children?: ReactNode }
    & typeof defaultProps;

const defaultProps: { cssProps: CSSProperties, children: ReactNode, status: TransitionStatus } = {
    cssProps: {
        background: "#00ffff",
        width: "100px",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    children: undefined,
    status: "unmounted"
};

export const Rectangle = (props?: RectangleProps) => {
    return (
        <div
            className={classNames(
                styles.rectangle, (props?.status === 'exiting' || props?.status == 'entering') && styles.exiting, (props?.status === 'exited' || props?.status === 'entered') && styles.exited
            )}
            style={props?.cssProps}>
            {props?.children}
        </div>
    )
};

Rectangle.defaultProps = defaultProps;