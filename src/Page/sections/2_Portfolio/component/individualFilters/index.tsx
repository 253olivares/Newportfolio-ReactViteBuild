import { memo } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../store/hook";
import { addToFilter, getSelectFiler, removeFromFilter } from "../../../../../store/projectSlice";

const index = memo(({tag,color}: {tag:string, color:string}) => {
  
    const dispatch = useAppDispatch();

    const selectedFilter = useAppSelector(getSelectFiler);

    let selected:boolean;

    if(selectedFilter.length <=0){
        selected = false;
    } else {
        const test = selectedFilter.find((tags) => tags === tag);
        if(test) {selected=true }
        else 
          {selected = false};
    }

    // this function will check to see if our filter exists on the array already if it does then 
    // remove it if it doesnt add it.
    const clicked = () => {
      if(selected) {
        dispatch(removeFromFilter(tag));
      } else {
        dispatch(addToFilter(tag));
      }
    }

  return (
    <div 
    onClick={()=> clicked()}
    style={{background:color}} className={`
    ${selected ?'brightness-100' :'brightness-50 hover:brightness-[.75]'}
     block
     w-full
     sLaptop:px-[.809rem]
     mLaptop:px-[1rem]
     desktop:px-[1.215rem]
     largeDesktop:px-[1.519rem]
     sLaptop:py-[.695rem]
     mLaptop:py-[.866rem]
     desktop:py-[1.05rem]
     largeDesktop:py-[1.313rem]
     sLaptop:rounded-[.214rem]
     mLaptop:rounded-[.267rem]
     desktop:rounded-[.324rem]
     largeDesktop:rounded-[0.405rem]
     hover:cursor-pointer
    `}>
        <p className={`
        text-PrimaryWhite
        sLaptop:text-[1.207rem]
        mLaptop:text-[1.503rem]
        desktop:text-[1.8224rem]
        largeDesktop:text-[2.278rem]
        leading-none
        w-full
        font-semibold
        `}>{tag}</p>
    </div>
  )
})

export default index