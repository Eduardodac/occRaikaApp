import { SubmitHandler, useForm } from "react-hook-form"
import { InputText } from 'primereact/inputtext';

interface IFormInput {
    domicilio: string,
    colonia: string,
    codigoPostal: string,
    municipio: string,
    estado: string,
    telefono: number,
    celular: number,
    correo: string,
    condicionVida: string,
    sexo: string,
    fechaNacimiento: string,
    estadoCivil: string,
    nacionalidad: string,
}

export const PerfilInterno = () => {

    return (
        <form className="flex flex-col">
            <div className="flex flex-row justify-around my-2">
                <InputText placeholder="Calle" />
                <InputText placeholder="Colonia" />
                <InputText placeholder="Codigo Postal" />
            </div>
            <div className="flex flex-row justify-around my-2">
                <InputText placeholder="Municipio" />
                <InputText  placeholder="Estado" />
                <InputText  placeholder="Teléfono" />
            </div>
            <div className="flex flex-row justify-around my-2">
                <InputText placeholder="Celular" />
                <InputText  placeholder="Correo Electrónico" />
                <InputText  placeholder="Estado o condición de vida" />
            </div>
            <div className="flex flex-row justify-around my-2">
                <InputText  placeholder="Sexo" />
                <InputText  placeholder="Estado Civil" />
                <InputText keyfilter="int" placeholder="Nacionalidad" />
            </div>
        </form>
    )
}
