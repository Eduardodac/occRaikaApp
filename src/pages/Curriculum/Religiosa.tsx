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
            <div className='m-5'>Por favor rellena el formulario con tu información académica, porfavor:</div>
            <form className=" ">
                <div className="flex flex-row w-2/5 items-center">
                    <label className="pr-2"> ¿Has leido la sagrada escritura en su totalidad?: </label>
                    <Dropdown
                        value={lectura}
                        onChange={(e) => setLectura(e.value)}
                        options={opciones}
                        optionLabel="name"
                        placeholder="Selecciona una opción"
                        className="w-1/4 md:w-14rem" />
                </div>

                <div className="flex flex-row w-2/5 items-center">
                    <label className="pr-2"> Libros de la sagrada escritura que he leído: </label>
                    <MultiSelect 
                        value={lectura} 
                        onChange={(e) => setLectura(e.value)} 
                        options={opcionesBiblia} 
                        optionLabel="name" 
                        filter 
                        placeholder="Libros" 
                        maxSelectedLabels={3} 
                        className="w-1/4 md:w-20rem" />
                </div>
                
                <button onClick={formik.submitForm} type="button" className='m-auto mt-5 w-1/2 h-10 border border-blue-500 bg-blue-200 hover:bg-blue-400 transition duration-500 ease-in-out'>Guardar</button>

            </form >
        </>

    )
}
