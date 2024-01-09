import { InputText } from 'primereact/inputtext';

export const Academica = () => {
    return (
        <form className="flex flex-col">
            <div className="flex flex-row justify-around my-2">
                <InputText  placeholder="Primaria" />
                <InputText  placeholder="Periodo" />
                <InputText  placeholder="Estado" />
            </div>
            <div className="flex flex-row justify-around my-2">
                <InputText  placeholder="Secundario" />
                <InputText placeholder="Periodo" />
                <InputText placeholder="Estado" />
            </div>
            <div className="flex flex-row justify-around my-2">
                <InputText  placeholder="Preparatoria" />
                <InputText  placeholder="Periodo" />
                <InputText  placeholder="Estado" />
            </div>
            <div className="flex flex-row justify-around my-2">
                <InputText  placeholder="Escuela técnica" />
                <InputText keyfilter="int" placeholder="Periodo" />
                <InputText keyfilter="int" placeholder="Estado" />
            </div>
            <div className="flex flex-row justify-around my-2">
                <InputText keyfilter="int" placeholder="Universidad" />
                <InputText keyfilter="int" placeholder="Periodo" />
                <InputText keyfilter="int" placeholder="Estado" />
            </div>
            <div className="flex flex-row w-1/4 m-auto justify-between my-2">
                <label>Licenciatura: </label>
                <InputText keyfilter="int" placeholder="Ingresar" />
            </div>
            <div className="flex flex-row w-1/4 m-auto justify-between my-2">
                <label>Grado Académico: </label>
                <InputText keyfilter="int" placeholder="Ingresar" />
            </div>
            <div className="flex flex-row w-1/4 m-auto justify-between my-2">
                <label>Especialización: </label>
                <InputText keyfilter="int" placeholder="Ingresar" />
            </div>
            <div className="flex flex-row w-1/4 m-auto justify-between my-2">
                <label>Diplomado en: </label>
                <InputText keyfilter="int" placeholder="Ingresar" />
            </div>
            <div className="flex flex-row w-1/4 m-auto justify-between my-2">
                <label>Posgrados: </label>
                <InputText keyfilter="int" placeholder="Ingresar" />
            </div>
            <div className="flex flex-row w-1/4 m-auto justify-between my-2">
                <label>Otros estudios: </label>
                <InputText keyfilter="int" placeholder="Ingresar" />
            </div>
        </form>
    )
}
