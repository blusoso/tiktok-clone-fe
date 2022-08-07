import { atom } from "recoil";
import { KEY } from "../keys";

export type CommentState = {
    number: number,
    isOpen: boolean
}

const commentState = atom<Partial<CommentState>>({
    key: KEY.COMMENT,
    default: {
        number: 0,
        isOpen: false
    },
});

export default commentState;