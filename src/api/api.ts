import axios from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:3004"
})

interface ICounterResponse {
    value: number
    maxValue: number
    delta: number
}

const api = {
    counter: {
        async getValue(): Promise<ICounterResponse> {
            let res = await instance.get<ICounterResponse>("/counter");
            return res.data;
        },
        changeValue(newValue: number): Promise<number> {
            return instance.patch<ICounterResponse>("/counter", {value: newValue})
                .then(res => res.data.value);
        }
    }
}

export default api;