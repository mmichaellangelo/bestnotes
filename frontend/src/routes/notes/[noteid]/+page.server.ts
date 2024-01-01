import { redirect } from "@sveltejs/kit";

export async function load({ params }) {
    try {
        const noteResponse = await fetch(`http://backend_node_api:3000/notes/${params.noteid}/`);
        const note = await noteResponse.json();
        return {
            note: note
        }
    } catch (error: any) {
        console.log(`${error.name}: ${error.message}`)
    }
}

export const actions = {
    delete: async (event) => {
        const noteid = event.params.noteid;
        const result = await fetch(`http://backend_node_api:3000/notes/${noteid}`, {
            method: "DELETE",
            mode: "cors",
            headers: {
                "Content-type": "application/json"
            }
        });
        console.log(result)
        if (result.status == 200) {
            return redirect(303, "/");
        }
    }
}
