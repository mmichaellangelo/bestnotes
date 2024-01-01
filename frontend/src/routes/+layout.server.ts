import { getUserID } from '$lib/state/user.js'
export async function load({ fetch }) {
    const userID = getUserID();
    if (userID == -1) {
        return {
            user: null
        }
    } else {
        
        try {
            const userResponse = await fetch(`http://backend_node_api:3000/users/${userID}`);
            const userData = await userResponse.json();
            const notesResponse = await fetch (`http://backend_node_api:3000/users/${userID}/notes`)
            const notesData = await notesResponse.json();
            return {
                user: userData,
                notes: notesData
            }
        } catch (error: any) {
            console.log(`FETCH ERROR: ${error.message}`);
        }

        return {
            
        };
    }
}