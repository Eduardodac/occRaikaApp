import { useFormik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { academicaFormType } from '../../components/curriculum/types';

const initialValues: academicaFormType = {
    Primaria: {
        nombre: '',
        fechaInicio: '',
        fechaFin: '',
        estado: '',
    },
    Secundaria: {
        nombre: '',
        fechaInicio: '',
        fechaFin: '',
        estado: '',
    },
    Preparatoria: {
        nombre: '',
        fechaInicio: '',
        fechaFin: '',
        estado: '',
    },
    EscuelaTecnica: {
        nombre: '',
        fechaInicio: '',
        fechaFin: '',
        estado: '',
    },
    Universidad: {
        nombre: '',
        fechaInicio: '',
        fechaFin: '',
        estado: '',
    },
    Licenciatura: '',
    GradoAcademico: '',
    Especializacion: '',
    Diplomado: '',
    Postgrados: '',
    OtrosEstudios: ''
}

export const Academica = () => {

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: (values) => {
            alert(JSON.stringify(values));
        }
    });

    return (
        <>
            <div className='m-5'>Por favor rellena el formulario con tu información académica, porfavor:</div>
            <form className="flex flex-col">
                <div className="flex flex-row justify-around items-center my-2 m-5">
                    <span className='w-24'>Primaria:</span>
                    <InputText className='p-inputtext-sm' placeholder="Primaria" />
                    <span className='mx-1'>de</span>
                    <Calendar
                        className='p-inputtext-sm'
                        placeholder="Año inicio"
                        name='Primaria.fechaInicio'
                        value={formik.values.Primaria['fechaInicio']}
                        onChange={formik.handleChange} onBlur={formik.handleBlur}
                        dateFormat="dd/mm/yy"
                        view="month"
                    />
                    <span className='mx-1'>al</span>
                    <Calendar
                        className='p-inputtext-sm'
                        placeholder="Año inicio"
                        name='Primaria.fechaFin'
                        value={formik.values.Primaria['fechaFin']}
                        onChange={formik.handleChange} onBlur={formik.handleBlur}
                        dateFormat="dd/mm/yy"
                        view="month"
                    />
                    <span className='mx-1'>en</span>
                    <InputText className='p-inputtext-sm' placeholder="Estado" />
                </div>
                <div className="flex flex-row justify-around items-center my-2 m-5">
                    <span className='w-24'>Secundaria:</span>
                    <InputText className='p-inputtext-sm' placeholder="Secundaria" />
                    <span className='mx-1'>de</span>
                    <Calendar
                        className='p-inputtext-sm'
                        placeholder="Año inicio"
                        name='Secundaria.fechaInicio'
                        value={formik.values.Secundaria['fechaInicio']}
                        onChange={formik.handleChange} onBlur={formik.handleBlur}
                        dateFormat="dd/mm/yy"
                        view="month"
                    />
                    <span className='mx-1'>al</span>
                    <Calendar
                        className='p-inputtext-sm'
                        placeholder="Año inicio"
                        name='Secundaria.fechaFin'
                        value={formik.values.Secundaria['fechaFin']}
                        onChange={formik.handleChange} onBlur={formik.handleBlur}
                        dateFormat="dd/mm/yy"
                        view="month"
                    />
                    <span className='mx-1'>en</span>
                    <InputText className='p-inputtext-sm' placeholder="Estado" />
                </div>
                <div className="flex flex-row justify-around items-center my-2 m-5">
                    <span className='w-24'>Preparatoria:</span>
                    <InputText className='p-inputtext-sm' placeholder="Preparatoria" />
                    <span className='mx-1'>de</span>
                    <Calendar
                        className='p-inputtext-sm'
                        placeholder="Año inicio"
                        name='Preparatoria.fechaInicio'
                        value={formik.values.Preparatoria['fechaInicio']}
                        onChange={formik.handleChange} onBlur={formik.handleBlur}
                        dateFormat="dd/mm/yy"
                        view="month"
                    />
                    <span className='mx-1'>al</span>
                    <Calendar
                        className='p-inputtext-sm'
                        placeholder="Año inicio"
                        name='Preparatoria.fechaFin'
                        value={formik.values.Preparatoria['fechaFin']}
                        onChange={formik.handleChange} onBlur={formik.handleBlur}
                        dateFormat="dd/mm/yy"
                        view="month"
                    />
                    <span className='mx-1'>en</span>
                    <InputText className='p-inputtext-sm' placeholder="Estado" />
                </div>
                <div className="flex flex-row justify-around items-center my-2 m-5">
                    <span className='w-24'>Esc. Técnica:</span>
                    <InputText className='p-inputtext-sm' placeholder="Esc. Técnica" />
                    <span className='mx-1'>de</span>
                    <Calendar
                        className='p-inputtext-sm'
                        placeholder="Año inicio"
                        name='EscuelaTecnica.fechaInicio'
                        value={formik.values.EscuelaTecnica['fechaInicio']}
                        onChange={formik.handleChange} onBlur={formik.handleBlur}
                        dateFormat="dd/mm/yy"
                        view="month"
                    />
                    <span className='mx-1'>al</span>
                    <Calendar
                        className='p-inputtext-sm'
                        placeholder="Año inicio"
                        name='EscuelaTecnica.fechaFin'
                        value={formik.values.EscuelaTecnica['fechaFin']}
                        onChange={formik.handleChange} onBlur={formik.handleBlur}
                        dateFormat="dd/mm/yy"
                        view="month"
                    />
                    <span className='mx-1'>en</span>
                    <InputText className='p-inputtext-sm' placeholder="Estado" />
                </div>
                <div className="flex flex-row justify-around items-center my-2  m-5">
                    <span className='w-24'>Universidad:</span>
                    <InputText className='p-inputtext-sm' placeholder="Universidad" />
                    <span className='mx-1'>de</span>
                    <Calendar
                        className='p-inputtext-sm'
                        placeholder="Año inicio"
                        name='Universidad.fechaInicio'
                        value={formik.values.Universidad['fechaInicio']}
                        onChange={formik.handleChange} onBlur={formik.handleBlur}
                        dateFormat="dd/mm/yy"
                        view="month"
                    />
                    <span className='mx-1'>al</span>
                    <Calendar
                        className='p-inputtext-sm'
                        placeholder="Año inicio"
                        name='Universidad.fechaFin'
                        value={formik.values.Universidad['fechaFin']}
                        onChange={formik.handleChange} onBlur={formik.handleBlur}
                        dateFormat="dd/mm/yy"
                        view="month"
                    />
                    <span className='mx-1'>en</span>
                    <InputText className='p-inputtext-sm' placeholder="Estado" />
                </div>
                <div className='flex flex-row justify-around mt-5'>
                    <div className="flex flex-col w-1/4">
                        <label> Licenciatura: </label>
                        <InputText
                            className='p-inputtext-sm'
                            placeholder="Ingresar licenciatura"
                            name='Licenciatura'
                            value={formik.values.Licenciatura}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>

                    <div className="flex flex-col w-1/4">
                        <label>Grado Académico: </label>
                        <InputText
                            className='p-inputtext-sm'
                            placeholder="Ingresar licenciatura"
                            name='GradoAcademico'
                            value={formik.values.GradoAcademico}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            
                        />
                    </div>
                    <div className="flex flex-col w-1/4">
                        <label>Especialización: </label>
                        <InputText
                            className='p-inputtext-sm'
                            placeholder="Ingresar licenciatura"
                            name='Especializacion'
                            value={formik.values.Especializacion}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                </div>
                <div className='flex flex-row justify-around  my-5'>
                    <div className="flex flex-col w-1/4">
                        <label>Diplomado en: </label>
                        <InputText
                            className='p-inputtext-sm'
                            placeholder="Ingresar licenciatura"
                            name='Diplomado'
                            value={formik.values.Diplomado}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    <div className="flex flex-col w-1/4">
                        <label>Posgrados: </label>
                        <InputText
                            className='p-inputtext-sm'
                            placeholder="Ingresar licenciatura"
                            name='Postgrados'
                            value={formik.values.Postgrados}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    <div className="flex flex-col w-1/4">
                        <label>Otros estudios: </label>
                        <InputText
                            className='p-inputtext-sm'
                            placeholder="Ingresar licenciatura"
                            name='OtrosEstudios'
                            value={formik.values.OtrosEstudios}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                </div>
                <button onClick={formik.submitForm} type="button" className='m-auto w-1/2 h-10 border border-blue-500 bg-blue-200 hover:bg-blue-400 transition duration-500 ease-in-out'>Guardar</button>

            </form>
        </>
    )
}
