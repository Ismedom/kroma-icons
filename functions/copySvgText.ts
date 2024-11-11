//

const copySvg = async ({ iconName, type }: { iconName: string; type: string }) => {
    // return alert("Copy SVG");

    try {
        const response = await fetch(`/icons/${type}/${iconName}.svg`);
        if (!response.ok) throw new Error("Failed to fetch SVG file.");

        const svgText = await response.text();

        if (navigator.clipboard && navigator.clipboard.writeText) {
            try {
                await navigator.clipboard.writeText(svgText);
                return true;
            } catch (e) {}
        }

        const textarea = document.createElement("textarea");
        textarea.value = svgText;

        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        textarea.style.left = "-9999px";

        document.body.appendChild(textarea);

        if (navigator.userAgent.match(/ipad|iphone/i)) {
            const range = document.createRange();
            range.selectNodeContents(textarea);

            const selection = window.getSelection();
            if (selection) {
                selection.removeAllRanges();
                selection.addRange(range);
            }

            textarea.setSelectionRange(0, textarea.value.length);
        } else {
            textarea.select();
        }

        try {
            document.execCommand("copy");
            document.body.removeChild(textarea);
            return true;
        } catch (err) {
            document.body.removeChild(textarea);
            throw new Error("Failed to copy text");
        }
    } catch (error) {
        console.error("Copy failed:", error);
        throw error;
    }
};

export default copySvg;
