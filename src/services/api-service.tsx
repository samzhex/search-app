import axios from 'axios';

export default class ApiService{

    _apiBase = 'https://swapi.dev/api';

    async getAllData(url: string) {
        return await axios.get(`${this._apiBase}${url}`)
            .then(res => res.data);
    }

    async getMatches(text: string) {
        const res = await this.getAllData(`${text}`);
        return res.results;
    }
}