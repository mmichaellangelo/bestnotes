import { getUserID } from '$lib/state/user.js'

export async function load({ fetch }) {
    const userID = getUserID();
    
    if (userID == -1) {
        return {
            user: null
        }
    } else {
        const response = await fetch(`localhost:3000/user/${userID}`);

        return {
            user: await response.json()
        };
    }
}