import { atom } from "jotai";

const savedLikes = localStorage.getItem("likes-video");
export const likesAtom = atom(savedLikes ? JSON.parse(savedLikes) : []);

