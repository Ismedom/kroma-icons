//

const copySvg = async ({ iconName, type }: { iconName: string; type: string }) => {
    try {
        const response = await fetch(`/icons/${type}/${iconName}.svg`);
        if (!response.ok) throw new Error("Failed to fetch SVG file.");

        const svgText = await response.text();

        if (navigator.userAgent.match(/ipad|iphone/i)) return alert(svgText);

        await navigator.clipboard.writeText(svgText);
    } catch (error) {
        throw new Error("Failed to fetch SVG file");
    }
};

export default copySvg;
