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
