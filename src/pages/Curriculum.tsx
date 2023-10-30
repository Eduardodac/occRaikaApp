
import { useEffect, useState } from 'react';
import { Steps } from 'primereact/steps';

export function Curriculum() {
    const [activeIndex, setActiveIndex] = useState(1);
    const items = [
        {
            label: 'Perfil Interno',
            command: () => {}
        },
        {
            label: 'Apostolado',
            command: () => {
                
            }
        },
        {
            label: 'Form. Académica',
            command: () => {
                
            }
        },
        {
            label: 'Form. Religiosa',
            command: () => {
                
            }
        },
        {
            label: 'Vivencia Espiritual',
            command: () => {
                
            }
        },
        {
            label: 'Form. Filosófica',
            command: () => {
                
            }
        },
        {
            label: 'Form. Intelectual G',
            command: () => {
                
            }
        }
    ];

    useEffect(()=>{
        console.log("activo",activeIndex) 
    },[activeIndex])

    return (
        <div className="card">
            <Steps model={items} activeIndex={activeIndex} onSelect={(e) => setActiveIndex(e.index)} readOnly={false} />
            {
                activeIndex == 0? <div>Contenido del perfil interno</div> : <div>Contenido del apostolado</div>
            }
        </div>
    )
}
         