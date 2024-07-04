const Loading = ({color}:{color:string}) => {
  return (
        <div className=" loadingHolder ">
            <div className={`bubble ${color} animate-[reversebounce_1s_infinite] animationDelay3s`} />
            <div className={`bubble ${color} animate-[reversebounce_1s_infinite] animationDelay2s`} />
            <div className={`bubble ${color} animate-[reversebounce_1s_infinite] animationDelay1s`} />
            <div className={`bubble ${color} animate-[reversebounce_1s_infinite]`} />
        </div>
  )
}

export default Loading;