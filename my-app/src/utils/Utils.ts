export function getStateText(state: string): string {
    let text: string = "";

    switch (state) {
        case "A_POTENTIAL":
            text = "Potencionální";
            break;
        case "B_ACTUAL":
            text = "Aktuální";
            break;
        case "C_DEFERRED":
            text = "Odložený";
            break;
        case "D_UNATTRACTIVE":
            text = "Nezajímavý";
            break;
        default: break;
    }

    return text;
}

export function getRoleText(role: string): string {
    let text: string = "";

    switch (role) {
        case "A_SUBSCRIBER":
            text = "Odběratel";
            break;
        case "B_PARTNER":
            text = "Partner";
            break;
        case "C_SUPPLIER":
            text = "Dodavatel";
            break;
        case "D_RIVAL":
            text = "Konkurent";
            break;
        case "E_OWN":
            text = "Vlastní firma";
            break;
        default: break;
    }

    return text;
}