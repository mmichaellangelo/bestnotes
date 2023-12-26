import { getUserID } from '$lib/state/user.js'
export async function load({ fetch }) {
    const userID = getUserID();
    if (userID == -1) {
        return {
            user: null
        }
    } else {
        
        try {
            const response = await fetch(`http://backend_node_api:3000/user/${userID}`);
            const data = await response.json();
            console.log(data);
            return {
                user: data
            }
        } catch (error: any) {
            console.log(`ERRRRRRR: ${error.message}`);
        }

        return {
            
        };
    }
}