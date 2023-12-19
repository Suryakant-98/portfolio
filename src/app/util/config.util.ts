/**
 * 
 * @param state 
 * @param classes 
 */
export const addClassToObject = (state: { [key: string]: boolean }, classes: Array<string>) => {
    if (classes.length > 0) {
        state[classes.join(' ')] = true;
    }
}
