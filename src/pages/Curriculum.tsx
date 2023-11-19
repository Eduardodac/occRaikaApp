
import { StepIcon } from '../components/curriculum/StepIcon';
import { useEffect, useState } from 'react';
import { indexStepStore } from '../store/curriculumStep';

export function Curriculum() {
    const [barWidth, setBarWidth] = useState("0%");
    const indexStepSelected = indexStepStore((state)=> state.index)
    
    useEffect(()=>{
        const barPercetaje = ((indexStepSelected-1)*20).toString()+"%";
        setBarWidth(barPercetaje);
    },[indexStepSelected])

    useEffect
    return (
        <div className="w-10/12 relative m-auto mb-10">
            <div className="flex flex-row justify-around content-center">
                <StepIcon index = {1} icon="1" title="Perfil Interno"></StepIcon>
                <StepIcon index = {2} icon="2" title="Form. Académica"></StepIcon>

                <StepIcon index = {3} icon="3" title="Form. Religiosa"></StepIcon>
                <StepIcon index = {4} icon="4" title="Vivencia Espiritual"></StepIcon>

                <StepIcon index = {5} icon="5" title="Form. Filosófica"></StepIcon>
                <StepIcon index = {6} icon="6" title="Form. Intelectual G."></StepIcon>

                <div className="absolute z-0 mx-1/20 h-0.5 w-10/12" style={{top:"28%"}}>
                    <span className="absolute z-0 transition-all h-full bg-progressBarInactive" id="barIndicator" style={{width:barWidth}}></span>
                </div>
            </div>
        </div>
    )
}
