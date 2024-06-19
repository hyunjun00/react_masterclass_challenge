import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

export const Categories = ["TO_DO", "DOING", "DONE"];

export interface IToDo {
  text: string;
  id: number;
  category: Array<string>;
  // category: string;
}

// export interface ICategory {
//   category: Array<string>;
// }

export const categoryState = atom<Array<string>>({
  key: "category",
  default: Categories,
});

const { persistAtom } = recoilPersist({
  key: "toDoLocal",
  storage: localStorage,
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});

// export enum Categories {
//   "TO_DO" = "TO_DO",
//   "DOING" = "DOING",
//   "DONE" = "DONE",
// }
// export interface IToDo {
//   text: string;
//   id: number;
//   category: Categories;
// }

// export const categoryState = atom<Categories>({
//   key: "category",
//   default: Categories.TO_DO,
// });

// export const toDoState = atom<IToDo[]>({
//   key: "toDo",
//   default: [],
// });

// export const toDoSelector = selector({
//   key: "toDoSelector",
//   get: ({ get }) => {
//     const toDos = get(toDoState);
//     const category = get(categoryState);
//     return toDos.filter((toDo) => toDo.category === category);
//   },
// });
