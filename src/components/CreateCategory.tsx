import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { Categories, categoryState } from "../atoms";

interface ICategory {
  category: string;
}

function CreateCategory() {
  //   const setCategory = useSetRecoilState(categoryState);
  // const setCategory = [...Categories];
  // const { register, handleSubmit, setValue } = useForm();
  // const categoryValid = ({ category }: ICategory) => {
  //   setCategory((oldCategory) => [...oldCategory, { category }]);
  //   // Categories[...setCategory,category];
  //   // Categories[...Categories,{category}];
  //   setValue("category", "");
  // };
  // return (
  //   <form onSubmit={handleSubmit(categoryValid)}>
  //     <input {...register("category")} placeholder="Write a category" />
  //     <button>Add</button>
  //   </form>
  // );
  return null;
}

export default CreateCategory;
