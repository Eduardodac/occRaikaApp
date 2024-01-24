import { useFormik } from 'formik';
import { InputText } from 'primereact/inputtext';

const initialValues = {
    Foto: '',
    SantoPatron: '',
    ZonaPerteneciente: '',
    Parroquia: '',
    Decanato: '',
    DesarrolloApostolado: '',
    DireccionCapilla: ''
}

export const Academica = () => {

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: (values) => {
            console.log(values)
        }
    });

    return (
        <>
            <div className='m-5'>Por favor rellena el formulario con tu información académica, porfavor:</div>
            <form className="flex flex-col">
                <div className="flex flex-row justify-around items-center my-2 m-5">
                    <span className='w-24'>Primaria:</span>
                    <InputText className='p-inputtext-sm' placeholder="Nombre" />
                    <span>de</span>
                    <InputText className='p-inputtext-sm' placeholder="Año inicio" />
                    <span>al</span>
                    <InputText className='p-inputtext-sm' placeholder="Año fin" />
                    <span>en</span>
                    <InputText className='p-inputtext-sm' placeholder="Estado" />
                </div>
                <div className="flex flex-row justify-around items-center my-2 m-5">
                    <span className='w-24'>Secundaria:</span>
                    <InputText className='p-inputtext-sm' placeholder="Primaria" />
                    <span>de</span>
                    <InputText className='p-inputtext-sm' placeholder="Año inicio" />
                    <span>al</span>
                    <InputText className='p-inputtext-sm' placeholder="Año fin" />
                    <span>en</span>
                    <InputText className='p-inputtext-sm' placeholder="Estado" />
                </div>
                <div className="flex flex-row justify-around items-center my-2 m-5">
                    <span className='w-24'>Preparatoria:</span>
                    <InputText className='p-inputtext-sm' placeholder="Primaria" />
                    <span>de</span>
                    <InputText className='p-inputtext-sm' placeholder="Año inicio" />
                    <span>al</span>
                    <InputText className='p-inputtext-sm' placeholder="Año fin" />
                    <span>en</span>
                    <InputText className='p-inputtext-sm' placeholder="Estado" />
                </div>
                <div className="flex flex-row justify-around items-center my-2 m-5">
                    <span className='w-24'>Escuela Técnica:</span>
                    <InputText className='p-inputtext-sm' placeholder="Primaria" />
                    <span>de</span>
                    <InputText className='p-inputtext-sm' placeholder="Año inicio" />
                    <span>al</span>
                    <InputText className='p-inputtext-sm' placeholder="Año fin" />
                    <span>en</span>
                    <InputText className='p-inputtext-sm' placeholder="Estado" />
                </div>
                <div className="flex flex-row justify-around items-center my-2">
                    <span className='w-24'>Universidad:</span>
                    <InputText className='p-inputtext-sm' placeholder="Primaria" />
                    <span>de</span>
                    <InputText className='p-inputtext-sm' placeholder="Año inicio" />
                    <span>al</span>
                    <InputText className='p-inputtext-sm' placeholder="Año fin" />
                    <span>en</span>
                    <InputText className='p-inputtext-sm' placeholder="Estado" />
                </div>
                <div className='flex flex-row justify-around mt-5'>
                    <div className="flex flex-col w-1/4">
                        <label> Licenciatura: </label>
                        <InputText className='p-inputtext-sm' placeholder="Ingresar licenciatura" />
                    </div>
                    <div className="flex flex-col w-1/4">
                        <label>Grado Académico: </label>
                        <InputText className='p-inputtext-sm' placeholder="Ingresar grado académico" />
                    </div>
                    <div className="flex flex-col w-1/4">
                        <label>Especialización: </label>
                        <InputText className='p-inputtext-sm' placeholder="Ingresar expecialización" />
                    </div>
                </div>
                <div className='flex flex-row justify-around  my-5'>
                    <div className="flex flex-col w-1/4">
                        <label>Diplomado en: </label>
                        <InputText className='p-inputtext-sm' placeholder="Ingresar" />
                    </div>
                    <div className="flex flex-col w-1/4">
                        <label>Posgrados: </label>
                        <InputText className='p-inputtext-sm' placeholder="Ingresar" />
                    </div>
                    <div className="flex flex-col w-1/4">
                        <label>Otros estudios: </label>
                        <InputText className='p-inputtext-sm' placeholder="Ingresar" />
                    </div>
                </div>
                <button onClick={formik.submitForm} type="button" className='m-auto w-1/2 h-10 border border-blue-500 bg-blue-200 hover:bg-blue-400 transition duration-500 ease-in-out'>Guardar</button>
            
            </form>
        </>
    )
}
