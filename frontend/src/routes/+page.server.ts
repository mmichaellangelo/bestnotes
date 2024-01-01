import type { Note, User } from '$lib/types/types.js';

export const actions = {
    // Create new note
    default: async (event) => {
        try { 
            const formData = await event.request.formData();
            const body = formData.get("textarea"); 
            console.log(body);
            try {
                const response = await fetch("http://backend_node_api:3000/notes", {
                    method: "POST",
                    mode: "cors",
                    body: JSON.stringify({
                        userid: 1,
                        title: "",
                        body: body
                    }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                });
                const res = response.status;
                console.log(`RESPONSE: ${res}`);
            } catch (error: any) {
            console.log(`${error.name}: ${error.message}`);
            }
            
        } catch (error: any) {
            console.log(`${error.name}: ${error.message}`)
        }
        
    }

}