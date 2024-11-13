//

const copySvg = async ({ iconName, type }: { iconName: string; type: string }) => {
    try {
        const response = await fetch(`/icons/${type}/${iconName}.svg`);
        if (!response.ok) throw new Error("Failed to fetch SVG file.");

        const svgText = await response.text();
        navigator.clipboard.writeText(svgText);
    } catch (error) {
        throw new Error("Failed to fetch SVG file");
    }
};

export default copySvg;
