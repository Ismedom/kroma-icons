"use client";

import { useState } from "react";

const CopySvgIcon = ({ iconName }: { iconName: string }) => {
    const [copyStatus, setCopyStatus] = useState("");

    const copySvgFile = async () => {
        try {
            const response = await fetch(`/icons/outline/${iconName}.svg`);
            if (!response.ok) throw new Error("Failed to fetch SVG file.");

            const svgText = await response.text();

            const blob = new Blob([svgText], { type: "image/svg+xml" });

            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = `${iconName}-copy.svg`;

            document.body.appendChild(link);
            link.click();

            document.body.removeChild(link);
            URL.revokeObjectURL(link.href);

            setCopyStatus("SVG copied successfully!");
        } catch (error) {
            setCopyStatus("Failed to copy SVG file.");
            console.error(error);
        }
    };

    return (
        <div>
            <button onClick={copySvgFile}>Copy {iconName} Icon</button>
            {copyStatus && <p>{copyStatus}</p>}
        </div>
    );
};

export default CopySvgIcon;
