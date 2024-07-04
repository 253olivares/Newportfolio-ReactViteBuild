import { memo } from "react";
import InformationCard from "./InformationCard";


const Education = memo(() => {

    const customStyling = ['customStyling1','customStyling2'];

    const information = {
        'Bachelors:' : 'Informatics & MAS',
        'School:' : 'IUPUI 2018-2022'
    }

  return <div className='
  educationHolder
  '> 

    {
        customStyling.map(x=> 
        <CustomStyling clsName={x} />
            )
    }

    {
        Object.entries(information).map(([k,v],_)=> 
            <InformationCard keyInfo={k} valueInfo={v} />
        )
    }
    
  </div>
})

const CustomStyling = ({clsName}: {clsName:string}) => {
    return <div className={clsName} />
}

export default Education