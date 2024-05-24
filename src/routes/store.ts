import {writable} from 'svelte/store';


// Initial store state
const initPop: {
    msg: string,
    title: string,
    isPop: boolean
} = {
    msg: '',
    title: '',
    isPop: false
};
export const popStore = writable(initPop);
// @ts-ignore
export const pop = (message: string, title: string = 'Notification') => {
    setTimeout(() => {
        popStore.set({
            msg: message,
            title: title,
            isPop: true
        })
        setTimeout(() => {
            popStore.set({
                msg: '',
                title: '',
                isPop: false
            })
        }, 5000);
    }, 1);
};
