export function getTheValueViaKey(searchingRacord, searchingKey) {
    for (const [key, value] of Object.entries(searchingRacord)) {
        if (key === searchingKey) {
            return value;
        }
    }
    return null;
}
