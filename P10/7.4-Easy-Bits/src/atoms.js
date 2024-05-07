import {atom, selector} from "recoil"

export const networkAtom = atom({
    key:"networkAtom",
    default:104
})
export const jobsAtom = atom({
    key:"jobsAtom",
    default:0
})
export const notificationsAtom = atom({
    key:"notificationsAtom",
    default:12
})
export const messsagingAtom = atom({
    key:"messsagingAtom",
    default:0
})
export const totalNotoficationsSelector = selector({
    key:"totalNotoficationsSelector",
    get:({get})=>{
        const networkAtomCount= get(networkAtom);
        const jobsAtomCount= get(jobsAtom)
        const notificationAtomCount= get(notificationsAtom)
        const messageAtomCount= get(messsagingAtom)

        return networkAtomCount+jobsAtomCount+notificationAtomCount+messageAtomCount;
    }
})