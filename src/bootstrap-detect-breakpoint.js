const bootstrapDetectBreakpoint = function () {
    // cache some values on first call
    if (!this.breakpointValues) {
        this.breakpointNames = ["xl", "lg", "md", "sm", "xs"]
        this.breakpointValues = []
        for (const breakpointName of this.breakpointNames) {
            this.breakpointValues[breakpointName] = window.getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-' + breakpointName)
        }
    }
    let i = this.breakpointNames.length
    for (const breakpointName of this.breakpointNames) {
        i--
        if (window.matchMedia("(min-width: " + this.breakpointValues[breakpointName] + ")").matches) {
            return {name: breakpointName, index: i}
        }
    }
    return null
}