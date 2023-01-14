import {CSSProperties, ReactNode} from "react";

export type RectangleContainerProps = { cssProps?: CSSProperties, children?: ReactNode } & typeof defaultProps;

const defaultProps: { cssProps: CSSProperties, children: ReactNode } = {
    cssProps: {
        width: "100%",
        display: "flex",
        minHeight: "150px",
        gap: "16px",
        flexWrap: "wrap"
    },
    children: undefined
};

export const RectangleContainer = (props: RectangleContainerProps) => {
    return (
        <div className={"rectangleContainer"} style={props.cssProps}>
            {props.children}
        </div>
    )
}
RectangleContainer.defaultProps = defaultProps;
