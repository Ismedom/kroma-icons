/**

 * @returns {boolean} 
 */
export function isMobileDevice() {
    //
    const platform = navigator.platform.toLowerCase();
    const mobilePlatforms = ["android", "iphone", "ipad", "ipod"];
    if (mobilePlatforms.some((ptf) => platform.includes(ptf))) {
        return true;
    }

    const userAgent = navigator.userAgent.toLowerCase();
    const mobileKeywords = ["android", "webos", "iphone", "ipad", "ipod", "blackberry", "windows phone"];

    if (!mobileKeywords.some((keyword) => userAgent.includes(keyword))) return false;

    if (!!!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) return false;

    if (!(navigator.maxTouchPoints > 0 && window.innerWidth <= 800)) return false;

    return true;
}

/**

 * @returns {Object}
 */
export function getMobileDeviceInfo() {
    return {
        isMobile: isMobileDevice(),
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
        touchCapable: "ontouchstart" in window || navigator.maxTouchPoints > 0,
        deviceType: (() => {
            if (window.innerWidth <= 480) return "smartphone";
            if (window.innerWidth <= 800) return "tablet";
            return "desktop";
        })(),
    };
}
