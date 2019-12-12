const DetectBreakpoint = (function() {
    const breakpointNames = ["xl", "lg", "md", "sm", "xs"]
    let breakpointValues = []
    for (const breakpointName of breakpointNames) {
        breakpointValues[breakpointName] = window.getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-' + breakpointName)
    }
    return {
        current: () => {
            for (const breakpointName of breakpointNames) {
                if(window.matchMedia("(min-width: " + breakpointValues[breakpointName] + ")").matches) {
                    return breakpointName
                }
            }
            return null
        }
    }
})();