import React from "react";

const Overlay = ({ ...props }) => {
    return <div {...props} className="fixed inset-0 bg-black/45"></div>;
};

export default Overlay;
