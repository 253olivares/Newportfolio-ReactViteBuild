import  { memo, useContext } from 'react'
import { AppContext } from '../../../../contextRefs';
import { useAppSelector } from '../../../../../store/hook';
import { getWindowWidth } from '../../../../../store/sidebarSlice';

const ProfileImage = memo(() => {
    const appContext =  useContext(AppContext);
    const {profile} = appContext!;
    
    const width = useAppSelector(getWindowWidth);

  return (
    <div
        data-aos='slide-right'
        data-aos-duration='1250'
        data-aos-delay={
          width <1024 ?
              '1500'
              :
              '500'
            }
        className=' profilePart1ImageHolder '>
                <img className='
                profilePart1Image
                ' src={profile} alt="My_Profile_Image" /> 
    </div>
  )
})

export default ProfileImage