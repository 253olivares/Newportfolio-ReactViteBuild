import heroDrawing from '/assets/hero_Drawing.svg'


const HeroCharacter = () => {
    return <img 
        data-aos='fade'
        data-aos-duration='1250'
        data-aos-delay='800'
        className={`heroCharacter`} src={heroDrawing} alt="" />
}

export default HeroCharacter