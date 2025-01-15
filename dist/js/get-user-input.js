var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Infos } from './ImportantInfos.js';
import stateAndCapital from "./Clock/State-And-Capital.js";
import countryCodeAndRealName from "./Clock/CountryCode-And-RealName.js";
import { getTheValueViaKey } from "./Clock/Record-Iterator.js";
import { getCountryByCity } from "./Clock/Get-Country-By-City.js";
import { getContinentByCity } from "./Clock/Get-Continet-By-City-Name.js";
import { askTheClockMaker } from "./Clock/The-Actudal-Clcok-Of-The-Town.js";
export function getPlaceInput(inputPlace) {
    Infos.TownName = inputPlace.value;
    makeToWorkTheClok();
    const placeHeaderEL = document.getElementById('place-header');
    placeHeaderEL.innerText = inputPlace.value;
}
function makeToWorkTheClok() {
    (() => __awaiter(this, void 0, void 0, function* () {
        const town = Infos.TownName;
        let counntry = yield getCountryByCity(town);
        if (counntry) {
            const fullNameOfCountry = getTheValueViaKey(countryCodeAndRealName, counntry);
            const capitalName = getTheValueViaKey(stateAndCapital, fullNameOfCountry !== null && fullNameOfCountry !== void 0 ? fullNameOfCountry : "");
            const cityContient = yield getContinentByCity(capitalName);
            Infos.Continent = cityContient !== null && cityContient !== void 0 ? cityContient : '';
            if (cityContient && capitalName) {
                askTheClockMaker(cityContient, capitalName);
            }
            else {
                console.error('Some components are null');
            }
        }
        else {
            console.error('Failded to request the current clock of the town.');
        }
    }))();
}
