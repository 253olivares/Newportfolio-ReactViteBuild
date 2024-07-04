

const InformationCard = ({keyInfo,valueInfo}:{keyInfo:string,valueInfo:string}) => {
  return (
    <div className='
    informationCardHolder
    '>
        <h3 className='
        informationCardHolderKey

        '>{keyInfo}</h3>
        
        <p className='
        informationCardHolderValue
        '>{valueInfo}</p>
    </div>
  )
}

export default InformationCard