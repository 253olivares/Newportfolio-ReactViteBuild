import {memo} from 'react';
import { projectStateType } from '../../../../../store/projectSlice';

const index = memo(({project}:{project:projectStateType}) => {
    const {id,projectName, imgURL, date} = project;
    console.log(imgURL);

  return (
    <div key={id} className='
    projectCSS
    '>
        <img className='
        w-[20.797rem] 
        h-[23.822rem] 
        rounded-[.756rem]' src={`http://localhost:5173/Newportfolio-ReactViteBuild/assets/screenshots/${imgURL}`} alt={projectName} />
        <div className='
        flex flex-col 
        gap-[0.688rem]
        w-full
        text-PrimaryWhite
        bg-GlassBackground
        absolute 
        bottom-0 left-0 
        py-[1.125rem]
        pl-[0.688rem]
        rounded-b-[.756rem]
        '>
            <h1 className='
             font-semibold
             text-[1.375rem]
             leading-none
            '>{projectName}</h1>
            <p className='
             font-semibold
             text-[1.031rem]
             leading-none
             opacity-80
            '>{date}</p>
        </div>
    </div>
  )
})

export default index