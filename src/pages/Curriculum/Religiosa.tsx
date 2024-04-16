import { useFormik } from "formik";
import { Dropdown } from "primereact/dropdown"
import { useState } from "react";
import { librosBiblia } from "../../components/curriculum/librosBiblia";
import { MultiSelect } from 'primereact/multiselect';

const initialValues = {
    Foto: '',
    SantoPatron: '',
    ZonaPerteneciente: '',
    Parroquia: '',
    Decanato: '',
    DesarrolloApostolado: '',
    DireccionCapilla: ''
}

export const Religiosa = () => {

    const [lectura, setLectura] = useState("");
    const opciones = [
        { name: 'Si', code: true },
        { name: 'No', code: false },
    ];

    const opcionesBiblia = librosBiblia;

    const formik = useFormik({
        initialValues: { initialValues },
        onSubmit: (values) => {
            console.log(values)
        }
    });

    return (
        <>
            <div className='mb-5'>Por favor rellena el formulario con tu información académica:</div>
            <form className=" ">
                <div className="pl-5 mb-5 opacity-90 text-xl">En Sagrada Escritura </div>
                <div className="flex flex-row w-5/5 items-center mb-2">
                    <label className="pr-2 w-3/5"> ¿Has leido la sagrada escritura en su totalidad?: </label>
                    <Dropdown
                        value={lectura}
                        onChange={(e) => setLectura(e.value)}
                        options={opciones}
                        optionLabel="name"
                        placeholder="Selecciona una opción"
                        className="w-2/5 md:w-14rem" />
                </div>

                <div className="flex flex-row w-5/5 items-center">
                    <label className="pr-2 w-3/5"> Libros de la sagrada escritura que he leído: </label>
                    <MultiSelect 
                        value={lectura} 
                        onChange={(e) => setLectura(e.value)} 
                        options={opcionesBiblia} 
                        optionLabel="name" 
                        filter 
                        placeholder="Libros" 
                        maxSelectedLabels={3} 
                        className="w-2/5 md:w-20rem" />
                </div>
                
                <div className="pl-5 my-5 opacity-90  text-xl">En Sagrada Tradición de la Iglesia </div>
                <div className="pl-5 my-5 opacity-90  text-xl">Magisterio de la Iglesia </div>
                <div className="pl-5 my-5 opacity-90  text-xl">Conocimiento sobre los tres grados del magisterio de la Iglesia </div>
                <div className="pl-5 my-5 opacity-90  text-xl">Conocimiento sobre Doctrina Social de la Iglesia </div>
                <div className="pl-5 my-5 opacity-90  text-xl">Historia de la Iglesia </div>
                <button onClick={formik.submitForm} type="button" className='m-auto mt-5 w-1/2 h-10 border border-blue-500 bg-blue-200 hover:bg-blue-400 transition duration-500 ease-in-out'>Guardar</button>

            </form >
        </>

    )
}
