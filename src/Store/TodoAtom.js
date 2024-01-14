import { atom } from "recoil";

export const TodoAtomHai = atom({
  key: "TodoAtomKa",
  default: [
    {
      id: 0,
      task: "Do Code",
    },
  ],
});
