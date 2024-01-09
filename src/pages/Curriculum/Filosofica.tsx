import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';

export const Filosofica = () => {
    return (
        <>
            <div className='m-5'>Por favor rellena el formulario con tu información ponderada, porfavor:</div>
            <form className="flex flex-col space-y-5">

                <div className="flex flex-row items-center justify-center">
                    <label className="pr-2 w-1/2">Mi conocimiento introductorio a los pensamientos filosóficos: </label>
                    <InputText placeholder="Calificación" className="w-1/4 p-inputtext-sm" />
                </div>
                <div className="flex flex-row items-center justify-center">
                    <label className="pr-2 w-1/2">Mi conocimiento de lógica formal: </label>
                    <InputText placeholder="Calificación" className="w-1/4 p-inputtext-sm" />
                </div>
                <div className="flex flex-row items-center justify-center">
                    <label className="pr-2 w-1/2">Mi conocimiento de ontología: </label>
                    <InputText placeholder="Calificación" className="w-1/4 p-inputtext-sm" />
                </div>
                <div className="flex flex-row items-center justify-center">
                    <label className="pr-2 w-1/2">Mi conocimiento de metafísica: </label>
                    <InputText placeholder="Calificación" className="w-1/4 p-inputtext-sm" />
                </div>
                <div className="flex flex-row items-center justify-center">
                    <label className="pr-2 w-1/2">Mi conocimiento de epistemología: </label>
                    <InputText placeholder="Calificación" className="w-1/4 p-inputtext-sm" />
                </div>
                <div className="flex flex-row items-center justify-center">
                    <label className="pr-2 w-1/2">Mi conocimiento de ética: </label>
                    <InputText placeholder="Calificación" className="w-1/4 p-inputtext-sm" />
                </div>
                <div className="flex flex-row items-center justify-center">
                    <label className="pr-2 w-1/2">Mi conocimiento de estética: </label>
                    <InputText placeholder="Calificación" className="w-1/4 p-inputtext-sm" />
                </div>
                <div className="flex flex-row items-center justify-center">
                    <label className="pr-2 w-1/2">Mi conocimiento de psicología: </label>
                    <InputText placeholder="Calificación" className="w-1/4 p-inputtext-sm" />
                </div>
                <div className="flex flex-row items-center justify-center">
                    <label className="pr-2 w-1/2">Mi conocimiento de Antropología: </label>
                    <InputText placeholder="Calificación" className="w-1/4 p-inputtext-sm" />
                </div>

                <div className="flex flex-col items-center justify-start">
                    <label className="pr-2 w">Libros, escritos, videos estudiados, leídos o vistos sobre estas ciencias: </label>
                    <InputTextarea placeholder="Ingresa" className="w-1/2 p-inputtext-sm" />
                </div>


                <button type="button" className='m-auto mt-5 w-1/2 h-10 border border-blue-500 bg-blue-200 hover:bg-blue-400 transition duration-500 ease-in-out'>Guardar</button>

            </form >
        </>
    )
}
