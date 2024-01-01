export async function load({ params }) {
    try {
        const url = `http://backend_node_api:3000/users/${params.userid}`;
        const userResponse = await fetch(url);
        const userData = await userResponse.json();

        return {
            user: userData
        }
    } catch (error: any) {
        console.log(`${error.name}: ${error.message}`);
    }
}