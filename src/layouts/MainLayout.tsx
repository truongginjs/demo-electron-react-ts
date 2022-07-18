import React from "react";

type Props = {
    title: string,
    children: JSX.Element,
};

const MainLayout = ({
    title,
    children,
}: Props) => {
    return (
        <div>
            <h1>{title}</h1>
            {children}
        </div>);
}

export default MainLayout;