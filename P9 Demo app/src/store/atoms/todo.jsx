import {atom,selector} from "recoil";

export const AtomTitle = atom({
    key:"titletodo",
    default:""
})

export const AtomDescription = atom({
    key:"descriptiontodo",
    default:""
})

export const filteredTodos = selector({
    key:"filteredTodos",
    get:(props)=>{
        const todos = props.get()
    }
})