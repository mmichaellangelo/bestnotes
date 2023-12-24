import { parseCookie } from "./util";

export function setUserID(id: number) {
    document.cookie = `userID=${id} path=/`;
}

export function getUserID(): number {
    const data = parseCookie(document.cookie);
    return data['userID'] ? parseInt(data['userID']) : -1;
}



