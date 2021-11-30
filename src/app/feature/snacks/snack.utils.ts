import { Snack, TypedSnack } from "./snack";

const toTypedSnacks = (snacks: Snack[]): TypedSnack[] => {
    const types = snacks.map(snack => snack.type).filter((elem, index, array) => array.indexOf(elem) === index);
    return types.map(type => {
        return {
            type: type,
            snacks: snacks.filter(snack => snack.type === type)
        }
    })
}

export {
    toTypedSnacks
}
