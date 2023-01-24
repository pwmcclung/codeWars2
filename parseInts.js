function toTime(seconds) {
    let hours = 0
    let minutes = 0
    let secMin = seconds / 60
    let minHours = Math.floor(secMin / 60)
    let ttlSec = parseInt(Math.abs((minHours * 60) - secMin))
    return `${minHours} hour(s) and ${ttlSec} minute(s)`
    }