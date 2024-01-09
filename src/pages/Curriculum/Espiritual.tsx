import { InputText } from 'primereact/inputtext';

export const Espiritual = () => {
  return (
    <>
            <div className='m-5'>Por favor rellena el formulario con información de tu vivencia espiritual, porfavor:</div>
            <form className="flex flex-col space-y-5">
                <div className="flex flex-row w-3/5 m-auto items-center justify-center">
                    <label className="pr-2"> 1. </label>
                    <InputText placeholder="Nombre del retiro" className="w-1/2 p-inputtext-sm" />
                    <label className="px-2">Duración: </label>
                    <InputText placeholder="duración del retiro" className="p-inputtext-sm" />
                </div>
                <div className="flex flex-row w-3/5 m-auto items-center justify-center">
                    <label className="pr-2"> 2. </label>
                    <InputText placeholder="Nombre del retiro" className="w-1/2 p-inputtext-sm" />
                    <label className="px-2">Duración: </label>
                    <InputText placeholder="duración del retiro" className="p-inputtext-sm" />
                </div>
                <div className="flex flex-row w-3/5 m-auto items-center justify-center">
                    <label className="pr-2"> 3. </label>
                    <InputText placeholder="Nombre del retiro" className="w-1/2 p-inputtext-sm" />
                    <label className="px-2">Duración: </label>
                    <InputText placeholder="duración del retiro" className="p-inputtext-sm" />
                </div>

                <span>Ingresa la frecuencia con la que realizas las siguientes actividades, por favor:</span>

                <div className="flex flex-row items-center justify-start ml-20">
                    <label className="pr-2 w-60">Sacramento Eucarístico: </label>
                    <InputText placeholder="Frecuencia" className="w-1/4 p-inputtext-sm" />
                </div>
                <div className="flex flex-row items-center justify-start ml-20">
                    <label className="pr-2 w-60">Reconciliación: </label>
                    <InputText placeholder="Frecuencia" className="w-1/4 p-inputtext-sm" />
                </div>
                <div className="flex flex-row items-center justify-start ml-20">
                    <label className="pr-2 w-60">Recibo: </label>
                    <InputText placeholder="Frecuencia" className="w-1/4 p-inputtext-sm" />
                </div>
                <div className="flex flex-row items-center justify-start ml-20">
                    <label className="pr-2 w-60">Lectura Espiritual: </label>
                    <InputText placeholder="Frecuencia" className="w-1/4 p-inputtext-sm" />
                </div>
                <div className="flex flex-row items-center justify-start ml-20">
                    <label className="pr-2 w-60">Rezo del santo rosario: </label>
                    <InputText placeholder="Frecuencia" className="w-1/4 p-inputtext-sm" />
                </div>
                <div className="flex flex-row items-center justify-start ml-20">
                    <label className="pr-2 w-60">Yo entiendo por oración: </label>
                    <InputText placeholder="Ingresa" className="w-1/4 p-inputtext-sm" />
                </div>
                
                <button type="button" className='m-auto mt-5 w-1/2 h-10 border border-blue-500 bg-blue-200 hover:bg-blue-400 transition duration-500 ease-in-out'>Guardar</button>

            </form >
        </>
  )
}
