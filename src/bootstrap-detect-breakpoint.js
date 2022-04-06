/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/bootstrap-detect-breakpoint
 * License: MIT, see file 'LICENSE'
 */
const bootstrapDetectBreakpoint = function () {
    // cache some values on first call
    if (!this.breakpointValues) {
        this.breakpointNames = ["xxl", "xl", "lg", "md", "sm", "xs"]
        this.breakpointValues = []
        const isPriorBS5 = !!window.getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-sm')
        const prefix = isPriorBS5 ? "--breakpoint-" : "--bs-breakpoint-"
        for (const breakpointName of this.breakpointNames) {
            const value = window.getComputedStyle(document.documentElement).getPropertyValue(prefix + breakpointName)
            if(value) {
                this.breakpointValues[breakpointName] = value
            }
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
