function getLocalTimeForTimeZone(timeZone) {
    const now = new Date();
    const options = {
        timeZone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    };
    return new Intl.DateTimeFormat('en-GB', options).format(now);
}
export function makeClockWork(continent, city) {
    if (continent.includes("North")) {
        continent = continent.replace("North", "");
        continent.trim();
    }
    else if (continent.includes("South")) {
        continent = continent.replace("South", "");
        continent.trim();
    }
    const clockHeaderEL = document.getElementById('clock');
    const timeZone = `${continent}/${city}`;
    console.log(`Időzóna: ${timeZone}`);
    let interval;
    try {
        interval = setInterval(() => {
            console.clear();
            const localTime = getLocalTimeForTimeZone(timeZone);
            console.log(`Helyi idő (${timeZone}): ${localTime}`);
            clockHeaderEL.innerText = localTime.toString();
        }, 1000);
    }
    catch (error) {
        console.log('Error: ', error);
        clearInterval(interval);
    }
    interval;
}
