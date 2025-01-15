var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function getCountryByCity(city) {
    return __awaiter(this, void 0, void 0, function* () {
        const API_KEY = '9dce43d6f9c9dd0aa623390f1f7343c8';
        const baseUrl = 'http://api.openweathermap.org/geo/1.0/direct';
        try {
            const response = yield fetch(`${baseUrl}?q=${city}&limit=1&appid=${API_KEY}`);
            if (!response.ok) {
                throw new Error(`Hiba történt: ${response.statusText}`);
            }
            const data = yield response.json();
            if (data && data.length > 0) {
                return data[0].country;
            }
            else {
                console.error('Nem található település.');
                return null;
            }
        }
        catch (error) {
            console.error('Hiba történt:', error);
            return null;
        }
    });
}
