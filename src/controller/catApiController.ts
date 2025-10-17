import axios from "axios";


const CAT_FACT_API = 'https://catfact.ninja/fact';
const API_TIMEOUT = 5000;

export async function getCatFact(): Promise<string> {
    try {
        const response = await axios.get(CAT_FACT_API, {
            timeout: API_TIMEOUT,
        });
        return response.data.fact;
    } catch (error) {
        console.error('Error fetching cat fact:', error instanceof Error ? error.message : 'Unknown error');
        return 'Cats are wonderful creatures full of mystery and charm.';
    }
}

