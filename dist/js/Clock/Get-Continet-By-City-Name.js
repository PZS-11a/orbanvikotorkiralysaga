var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export const getContinentByCity = (city) => __awaiter(void 0, void 0, void 0, function* () {
    const apiKey = 'b56615eb035c4135b259729965782e55';
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(city !== null && city !== void 0 ? city : "")}&key=${apiKey}`;
    try {
        const response = yield fetch(url);
        if (!response.ok) {
            throw new Error('API request failed');
        }
        const data = yield response.json();
        if (data.results.length === 0) {
            return null;
        }
        const continent = data.results[0].components.continent;
        return continent || null;
    }
    catch (error) {
        console.log('Error occurred: ' + error.message);
        return null;
    }
});
