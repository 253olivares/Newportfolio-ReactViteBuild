
const Icons = ({pos:index,src1:k,src2:v}:{pos:number,src1:string,src2:string}) => {
  return (
    <a key={index} href={k} className="h-full" >
        <img 
        className="
        w-[1.108rem] 
        mobile:w-[1.642rem] 
        sMobile:w-[2.627rem] 
        mMobile:w-[3.153rem] 
        sLaptop:w-[2.125rem] 
        mLaptop:w-[2.5rem] 
        desktop:w-[3.125rem] 
        largeDesktop:w-[3.75rem] 
        cursor-pointer 
        hover:opacity-75" 
        src={v} 
        alt={`svg${index}`} />
    </a>
  )
}

export default Icons