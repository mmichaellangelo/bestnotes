import { parseCookie } from "./util";
import type { Cookies } from "@sveltejs/kit";
export function setUserID(id: number) {
    
}

export function getUserID(): number {
    // const data = parseCookie(document.cookie);
    // return data['userID'] ? parseInt(data['userID']) : -1;
    return 1;
}



