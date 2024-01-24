
import { StepIcon } from '../../components/curriculum/StepIcon';
import { useEffect, useState } from 'react';
import { indexStepStore } from '../../store/curriculumStep';
import { Outlet, useNavigate } from 'react-router-dom';

export function Curriculum() {

    const navigate = useNavigate();
    const [barWidth, setBarWidth] = useState("0%");
    const indexStepSelected = indexStepStore((state) => state.index)

    useEffect(() => {
        const barPercetaje = ((indexStepSelected - 1) * 20).toString() + "%";
        setBarWidth(barPercetaje);
        console.log(indexStepSelected)

        switch (indexStepSelected) {
            case 1:
                console.log(indexStepSelected)
                navigate('perfil-externo');
                break;
            case 2:
                console.log(indexStepSelected)
                navigate('form-academica');
                break;
            case 3:
                navigate('form-religiosa');
                break;
            case 4:
                navigate('vivencia-espiritual');
                break;
            case 5:
                navigate('form-filosofica');
                break;
            case 6:
                navigate('form-intelectual');
                break;
            default:
                console.log('aqui', indexStepSelected)
                navigate('perfil-interno');
        }
    }, [indexStepSelected])


    return (
        <div className=' py-5 mx-5 border border-slate-50 bg-white'>
            <div className="w-10/12 relative m-auto mb-10">
                <div className="flex flex-row justify-around content-center">
                    <StepIcon index={1} icon="1" title="Perfil Externo"></StepIcon>
                    <StepIcon index={2} icon="2" title="Form. Académica"></StepIcon>

                    <StepIcon index={3} icon="3" title="Form. Religiosa"></StepIcon>
                    <StepIcon index={4} icon="4" title="Vivencia Espiritual"></StepIcon>

                    <StepIcon index={5} icon="5" title="Form. Filosófica"></StepIcon>
                    <StepIcon index={6} icon="6" title="Form. Intelectual G."></StepIcon>

                    <div className="absolute z-0 mx-1/20 h-0.5 w-10/12" style={{ top: "28%" }}>
                        <span className="stepEmp__indicador" id="barIndicator" style={{ width: barWidth }}></span>
                    </div>
                </div>
            </div>
            <div className=" w-4/5 m-auto px-5 text-black">
                <Outlet></Outlet>
            </div>
        </div>
    )
}
