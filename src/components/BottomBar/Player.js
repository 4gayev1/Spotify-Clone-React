import { Icon } from "icons"
import {useAudio} from 'react-use';
import { secondsToTime } from "utils";
import CustomRange from "components/CustomRange";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setControls } from "stores/player";


const Player = () => {

  const dispatch = useDispatch();
  const {current} = useSelector(state => state.player)


  const [audio,state,controls,ref] = useAudio({
  src:current?.src 
})

useEffect(()=>{
  controls.play()
},[current])

const volumeIcon = useMemo(()=>{
  if(state.volume ===0 || state.muted){
    return 'volumemuted';
  }
  if(state.volume >0 && state.volume<0.33){
    return 'volumelow';
  }
  if(state.volume >0.33 && state.volume<0.66){
    return 'volumenormal';
  }
    return 'volumehigh';
  
})


  return (
    <div className="flex justify-between items-center h-full px-4">
      
      <div className="min-w-[11.25rem] w-[30%] ">

         <div className="flex items-center ">
          {current && (
            
          <div className="flex items-center mr-3">
            <div className="flex items-center">
              <div className="w-14 h-14 mr-3 flex items-center flex-shrink-0">
            <img src={current.image} />
            </div>
            <div className="mr-6">
              <h6>{current.title}</h6>
              <h6>{current.description}</h6>
              </div>
            </div>

        
          <button className="mr-3  ">
              <Icon name='fav' size={16}/>
            </button>
            
            <button>
              <Icon name='pic' size={16}/>
            </button>
       

          </div>
           
          )}
         </div>
      </div>
      
      <div className="flex flex-col items-center max-w-[45.125] w-[40%]">

        <div className="flex items-center gap-x-2">
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name="shuffle" size={16}/>
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name="prevmusic" size={16}/>
          </button>
          <button onClick={state?.playing ? controls.pause : controls.play} className="w-8 h-8 flex bg-white items-center justify-center text-black rounded-full hover:scale-[1.06]">
            
            <Icon name={state?.playing ? "pause" :'play'} size={16}/>
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name="nextmusic" size={16}/>
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name="repeat" size={16}/>
          </button>
        </div>

        <div className="w-full flex items-center gap-x-2">
          {audio}
          <div className="text-[0.688rem] tex-white text-opacity-70">
      {secondsToTime(state?.time)}
    </div>
       <CustomRange 
       step={0.1}
       min={0}
       max={state?.duration || 1}
       value={state?.time}
       onChange={value => controls.seek(value)}/>
          </div>
      </div>
      
      <div className="min-w-[11.25rem] w-[30%] flex items-center justify-end">
      <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name="mic" size={16}/>
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name="queue" size={16}/>
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name="connect" size={16}/>
          </button>
          <button onClick={controls[state.muted ? 'unmute':'mute']} className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name={volumeIcon} size={16}/>
          </button>
          <div className="w-24 h-8 flex items-center">
          <CustomRange 
            step={0.01}
       min={0}
       max={1}
       value={state.muted ? 0 : state?.volume}
       onChange={value =>{ 
       controls.unmute();
        controls.volume(value)}}/>
          </div>
      </div>
      
    </div>
  )
}

export default Player