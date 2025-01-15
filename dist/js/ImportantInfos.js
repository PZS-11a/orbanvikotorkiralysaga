export class Infos {
    static get TownName() {
        return this.townName;
    }
    static set TownName(value) {
        this.townName = value;
    }
    static get Continent() {
        return this.continent;
    }
    static set Continent(value) {
        this.continent = value;
    }
}
Infos.townName = '';
Infos.continent = '';
