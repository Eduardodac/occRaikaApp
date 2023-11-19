import { useEffect, useState } from "react"
import { indexStepStore } from "../../store/curriculumStep"
import '../../styles/steps.css'

type iconStepProps={
    index:number,
    icon:string,
    title: string,
}

const active = {
    color:"#FFF",
    backgroundColor:"#3B82F6",
}

const inactive = {
    color:"#D7E2EE",
    backgroundColor:"#FFF",
}

const previous = {
    color:"#FFF",
    backgroundColor:"#00D27F",
}

const texActive = {
    color:"#3B82F6",
}

const textInactive = {
    color:"#D7E2EE",
}

const textPrevious = {
    color:"#00D27F",
}

export const StepIcon = ({index, icon, title}:iconStepProps) => {

    const [cssStep, setCssStep] = useState(inactive);
    const [cssText, setCssText] = useState(textInactive);

    const indexStepSelected = indexStepStore((state)=> state.index)
    const changeIndexStep = indexStepStore((state)=> state.changeIndexStep)

    useEffect(()=>{
        if(indexStepSelected === index){
            setCssStep(active);
            setCssText(texActive);
        }else if(indexStepSelected < index){
            setCssStep(inactive);
            setCssText(textInactive);
        }else{
            setCssStep(previous);
            setCssText(textPrevious);
        }
    },[indexStepSelected])

    return (
        <div className="flex flex-col justify-center content-start z-10 w-1/6">
            <div className="stepEmp__contenedorIcono" style={cssStep} onClick={()=>(changeIndexStep(index))}>
                <i className="stepEmp__icono not-italic">{icon}</i>
            </div>
            <span className="stepEmp__text" style={cssText}>{title}</span>
        </div>
    )
}
