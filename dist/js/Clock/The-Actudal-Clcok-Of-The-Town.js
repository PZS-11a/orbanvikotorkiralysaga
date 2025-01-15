function makeTheActualClcok(continent, capital) {
    const timeZone = `${continent}/${capital.replace(/\s+/g, "_")}`;
    try {
        const formatter = new Intl.DateTimeFormat("en-US", {
            timeZone,
            timeStyle: "medium",
            hour12: false,
        });
        return formatter.format(new Date());
    }
    catch (error) {
        return `Invalid continent or capital: ${continent}/${capital}.`;
    }
}
export const askTheClockMaker = (contient, town) => {
    let intervall = setInterval(() => {
        let time = makeTheActualClcok(contient, town);
        const clockHeadingEL = document.getElementById('clock');
        clockHeadingEL.innerText = time;
        console.log(time);
    }, 1000);
    intervall;
};
