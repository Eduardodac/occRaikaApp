import { useEffect } from "react"
import { indexStepStore } from "../../store/curriculumStep"

type iconStepProps={
    index:number,
    icon:string,
    title: string,
}

export const StepIcon = ({index, icon, title}:iconStepProps) => {

    const indexStepSelected = indexStepStore((state)=> state.index)
    const changeIndexStep = indexStepStore((state)=> state.changeIndexStep)

    useEffect(()=>{
        console.log(indexStepSelected)
    },[indexStepSelected])

    return (
        <div className="flex flex-col justify-center content-start z-10 w-1/6">
            <div className="cursor-pointer table text-center transition-all m-auto w-10 h-10 border rounded-full bg-fondo" >
                <i className="table-cell align-middle not-italic">{icon}</i>
            </div>
            <span className="text-center transition-all my-2 mx-0 text-sm leading-4 font-medium">{title}</span>
        </div>
    )
}
