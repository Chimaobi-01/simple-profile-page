
const nodes = document.querySelectorAll(`
    [data-testid='currentDay'], 
    [data-testid='currentTimeUTC'],
    .am-pm, 
    .menu,
    .copyCurrentTimeUTC,
    .copy-am-pm
    `)

const [
    currentDay, 
    currentUTCTime, 
    anteMeridiem,
    menu,
    copyTime,
    copyAM
] = nodes



// Make all links open in new tab
const links = document.querySelectorAll('a')
links.forEach(link => {
    link.setAttribute('target', '_blank')
})


 // Update day of the week
getCurrentDayOfTheWeek()

// Update the time immediately
getCurrentUTCTime()

 // Update the time every second
setInterval(() => getCurrentUTCTime(),1)

// toogle menu on click
menu.addEventListener('click', toggleMenu)








function getCurrentDayOfTheWeek() {
    const day = new Date().getDay()
    const daysOfTheWeek = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]
    daysOfTheWeek.map((e,index) => day === index ? currentDay.textContent = e: null
    )
}


function getCurrentUTCTime() {
    const date = new Date()
    const hour = date.getUTCHours() + 1
    const minutes = date.getUTCMinutes()
    const seconds = date.getUTCSeconds()
    const milliseconds = date.getUTCMilliseconds()
    const am = hour < 12 ? 'AM' : 'PM'
    
    currentUTCTime.textContent = `${hour < 10? `0${hour}`: hour}:${minutes < 10? `0${minutes}`: minutes}:${seconds < 10? `0${seconds}`: seconds}:${milliseconds}`
    currentUTCTime.setAttribute('datetime', date.toUTCString())

    anteMeridiem.textContent = am
    copyTime.textContent = currentUTCTime.textContent
    copyAM.textContent = anteMeridiem.textContent
}

function toggleMenu() {
    menu.classList.toggle('active')
}
