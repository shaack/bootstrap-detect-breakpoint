const bootstrapDetectBreakpoint = function () {
    const breakpointNames = ["xl", "lg", "md", "sm", "xs"]
    let breakpointValues = []
    for (const breakpointName of breakpointNames) {
        breakpointValues[breakpointName] = window.getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-' + breakpointName)
    }
    let i = breakpointNames.length
    for (const breakpointName of breakpointNames) {
        i--
        if (window.matchMedia("(min-width: " + breakpointValues[breakpointName] + ")").matches) {
            return {name: breakpointName, index: i}
        }
    }
    return null
}