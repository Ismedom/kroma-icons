//

const downloadSvgFile = async ({ iconName, type }: { iconName: string; type: string }) => {
    try {
        const response = await fetch(`/icons/${type}/${iconName}.svg`);
        if (!response.ok) throw new Error("Failed to fetch SVG file.");

        const svgText = await response.text();

        const blob = new Blob([svgText], { type: "image/svg+xml" });

        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = `${iconName}-copy.svg`;

        document.body.appendChild(link);
        link.style.display = "none";
        link.click();

        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);
    } catch (error) {
        throw new Error("error: " + error);
    }
};

export default downloadSvgFile;
