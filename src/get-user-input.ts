import { Infos } from './ImportantInfos.js';
import stateAndCapital from "./Clock/State-And-Capital.js";
import countryCodeAndRealName from "./Clock/CountryCode-And-RealName.js";
import { getTheValueViaKey } from "./Clock/Record-Iterator.js";
import { getCountryByCity } from "./Clock/Get-Country-By-City.js";
import { getContinentByCity } from "./Clock/Get-Continet-By-City-Name.js";
import { askTheClockMaker } from "./Clock/The-Actudal-Clcok-Of-The-Town.js";

export function getPlaceInput(inputPlace: HTMLInputElement)
{
    Infos.TownName = inputPlace.value; //Varos neve
    makeToWorkTheClok();
    
    const placeHeaderEL: HTMLHeadingElement = document.getElementById('place-header')! as HTMLHeadingElement;
    placeHeaderEL.innerText = inputPlace.value;
}

function makeToWorkTheClok()
{
    (async () => {
        const town: string = Infos.TownName;
        let counntry: NullAndString = await getCountryByCity(town); 

        if (counntry)
        {
            const fullNameOfCountry: NullAndString = getTheValueViaKey(countryCodeAndRealName, counntry);
            const capitalName: NullAndString = getTheValueViaKey(stateAndCapital, fullNameOfCountry ?? "");
            const cityContient: NullAndString = await getContinentByCity(capitalName);
            Infos.Continent = cityContient ?? '';

            if (cityContient && capitalName)
            {
                askTheClockMaker(cityContient, capitalName);
            }
            else
            {
                console.error('Some components are null');
            }
        }
        else
        {
            console.error('Failded to request the current clock of the town.');
        }
        
    })();
}