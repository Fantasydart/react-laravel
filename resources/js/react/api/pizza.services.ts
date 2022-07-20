import axios from "axios";
import {iPizza} from "../shared/types";

export default {
    async getPizzas() {
        try {
            // 👇️ const data: GetUsersResponse
            const { data } = await axios.get<iPizza[]>(
                'https://62d84db690883139358f2326.mockapi.io/pizzas',
                    {
                        headers: {
                            Accept: 'application/json',
                        },
                    },
            );

            return data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('error message: ', error.message);
                return [];
            } else {
                console.log('unexpected error: ', error);
                return [];
            }
        }
    }
}
