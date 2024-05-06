import { memo } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../store/hook";
import { addToFilter, changeResponsive, getResponsive, getSelectFiler, removeFromFilter } from "../../../../../store/projectSlice";

const index = memo(({tag,color}: {tag:string, color:string}) => {
  
    const dispatch = useAppDispatch();

    const selectedFilter = useAppSelector(getSelectFiler);
    const responsive = useAppSelector(getResponsive);

    let selected:boolean;

    if(tag !== 'Mobile'){
      if(selectedFilter.length <=0){
          selected = false;
      } else {
          const test = selectedFilter.find((tags) => tags === tag);
          if(test) {selected=true }
          else 
            {selected = false};
      }
    } else {
      selected = responsive;
    }

    // this function will check to see if our filter exists on the array already if it does then 
    // remove it if it doesnt add it.
    const clicked = () => {
      if(tag !== 'Mobile'){
        if(selected) {
          dispatch(removeFromFilter(tag));
        } else {
          dispatch(addToFilter(tag));
        }
      } else {
        dispatch(changeResponsive());
      }
    }

  return (
    <div 
    onClick={()=> clicked()}
    style={{background:color}} className={`
    ${selected ?'brightness-100' :'brightness-50 sLaptop:hover:brightness-[.75]'}

     block
     w-full

     px-[10%]
     sLaptop:px-[.809rem]
     mLaptop:px-[1rem]
     desktop:px-[1.215rem]
     largeDesktop:px-[1.519rem]
     
     py-[0.683rem]
     mobile:py-[0.911rem]
     sMobile:py-[1.458rem]
     mMobile:py-[1.75rem]
     sLaptop:py-[.695rem]
     mLaptop:py-[.866rem]
     desktop:py-[1.05rem]
     largeDesktop:py-[1.313rem]

     rounded-[0.195rem]
     mobile:rounded-[0.520rem]
     sMobile:rounded-[0.4166rem]
     mMobile:rounded-[.5rem]
     sLaptop:rounded-[.214rem]
     mLaptop:rounded-[.267rem]
     desktop:rounded-[.324rem]
     largeDesktop:rounded-[0.405rem]

     hover:cursor-pointer
    `}>
        <p className={`
        text-PrimaryWhite
        text-[1.562rem]
        mobile:text-[2.083rem]
        sMobile:text-[3.333rem]
        mMobile:text-[4rem]
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