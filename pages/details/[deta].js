import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {IoMdArrowDroprightCircle} from 'react-icons/io'

const Details = () => {
  const [details, setDetails] = useState({});
  const router = useRouter();
  const { deta } = router.query;

  const fetchData = async () => {
    const key = process.env.NEXT_PUBLIC_API_KEY2;
    const api = await fetch(
      `https://api.spoonacular.com/recipes/${deta}/information?apiKey=${key}`
    );
    const data = await api.json();
    setDetails(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, [deta]);

  return (
    <div className=" flex justify-center  gap-20 mt-20 mb-20">
      <div>
        <div>
          <h1 className=" text-[40px] text-slate-600 font-extrabold text-left font-nav_fonts">
            {details.title}:
          </h1>
          <img
            src={details.image}
            alt="images"
            className=" mt-5 h-72 rounded-3xl shadow-xl "
          />
        </div>

        <div>
          <h1 className=" font-semibold font-nav_fonts text-slate-500 text-3xl mb-2 mt-10">
            Ingredients:
          </h1>
          <ul>
            {details.extendedIngredients.map((ingredient) => 
              <li className=" text-slate-500 flex font-medium font-normal_text my-[10px]" key={ingredient.id}><IoMdArrowDroprightCircle/> {ingredient.original}</li>
            )}
          </ul>
        </div>
      </div>

      <div>
        <h1 className=" font-semibold font-nav_fonts text-slate-500 text-3xl mb-2">
          Instruction:
        </h1>
        <div className=" max-w-2xl font-normal_text text-[19px] ">
          <h1
            className=" font-semibold"
            dangerouslySetInnerHTML={{ __html: details.summary }}
          ></h1>
          <div>
            <h1 className=" font-semibold font-nav_fonts text-slate-500 text-3xl mt-7 mb-2">
              {" "}
              Instructions:
            </h1>
            <h1
              className=" text-slate-700"
              dangerouslySetInnerHTML={{ __html: details.instructions }}
            ></h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
