import { InputText } from 'primereact/inputtext';
import { useFormik } from 'formik';
import { perfilInternoFormType } from '../components/curriculum/types';
import { PerfilInternoValidation } from '../components/curriculum/validations/perfilInternoValidation';

const initialValues:perfilInternoFormType = {
    NombreCompleto: "",
    Colonia: "",
    CodigoPostal: "",
    Municipio: "",
    TelefonoFijo: "",
    Celular: "",
    email: "",
    CondicionVida: "",
    Sexo: "",
    FechaNacimiento: new Date(),
    EstadoCivil: "soltero",
    Nacionalidad: ""
}

export const PerfilInterno = () => {

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
        validate: PerfilInternoValidation
    });

    return (
        <div className=' py-5 mx-5 border border-slate-50 bg-white'>
            <form className="flex flex-col w-3/4 m-auto space-y-2" onSubmit={formik.handleSubmit}>
                <label htmlFor='Nombre Completo' className='text-sm mb-2'>Nombre Completo:</label>
                <InputText
                    className='p-inputtext-sm'
                    placeholder='Nombre Completo'
                    name='NombreCompleto'
                    value={formik.values['NombreCompleto']}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <div className='text-sm text-red-500'>
                    {formik.touched['NombreCompleto'] && <div>{formik.errors['NombreCompleto']}</div>}
                </div>
                <label htmlFor='Colonia' className='text-sm mb-2'>Colonia:</label>
                <InputText
                    className='p-inputtext-sm'
                    placeholder='Colonia'
                    name='Colonia'
                    value={formik.values['Colonia']}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <div className='text-sm text-red-500'>
                    {formik.touched['Colonia'] && <div>{formik.errors['Colonia']}</div>}
                </div>
                <label htmlFor='CodigoPostal' className='text-sm mb-2'>Código Postal:</label>
                <InputText
                    className='p-inputtext-sm'
                    placeholder='Código Postal.'
                    name='CodigoPostal'
                    value={formik.values['CodigoPostal']}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <div className='text-sm text-red-500'>
                    {formik.touched['CodigoPostal'] && <div>{formik.errors['CodigoPostal']}</div>}
                </div>
                <label htmlFor='Municipio' className='text-sm mb-2'>Municipio:</label>
                <InputText
                    className='p-inputtext-sm'
                    placeholder='Municipio'
                    name='Municipio'
                    value={formik.values['Municipio']}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <label htmlFor='TelefonoFijo' className='text-sm mb-2'>Teléfono Fijo:</label>
                <InputText
                    className='p-inputtext-sm'
                    placeholder='0000-0000-00'
                    name='TelefonoFijo'
                    value={formik.values['TelefonoFijo']}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <label htmlFor='Celular' className='text-sm mb-2'>Celular:</label>
                <InputText
                    className='p-inputtext-sm'
                    placeholder='0000-0000-00'
                    name='DireccionCapilla'
                    value={formik.values['Celular']}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <div className='text-sm text-red-500'>
                    {formik.touched['Celular'] && <div>{formik.errors['Celular']}</div>}
                </div>
                <label htmlFor='email' className='text-sm mb-2'>Correo Electrónico:</label>
                <InputText
                    className='p-inputtext-sm'
                    placeholder='ejemplo@gmail.com'
                    name='email'
                    value={formik.values['email']}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <div className='text-sm text-red-500'>
                    {formik.touched['email'] && <div>{formik.errors['email']}</div>}
                </div>
                <label htmlFor='CondicionVida' className='text-sm mb-2'>Condición de Vida:</label>
                <InputText
                    className='p-inputtext-sm'
                    placeholder='Condición de vida'
                    name='CondicionVida'
                    value={formik.values['CondicionVida']}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <div className='text-sm text-red-500'>
                    {formik.touched['CondicionVida'] && <div>{formik.errors['CondicionVida']}</div>}
                </div>
                <label htmlFor='Sexo' className='text-sm mb-2'>Sexo:</label>
                <InputText
                    className='p-inputtext-sm'
                    placeholder='Ingresa sexo'
                    name='Sexo'
                    value={formik.values['Sexo']}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <label htmlFor='EstadoCivil' className='text-sm mb-2'>Estado Civil:</label>
                <InputText
                    className='p-inputtext-sm'
                    placeholder='Estado Civil'
                    name='EstadoCivil'
                    value={formik.values['EstadoCivil']}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <label htmlFor='Nacionalidad' className='text-sm mb-2'>Nacionalidad:</label>
                <InputText
                    className='p-inputtext-sm'
                    placeholder='Nacionalidad'
                    name='Nacionalidad'
                    value={formik.values['Nacionalidad']}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />

                <button onClick={formik.submitForm} type="button" className='m-auto w-1/2 h-10 border border-blue-500 bg-blue-200 hover:bg-blue-400 transition duration-500 ease-in-out'>Guardar</button>
            </form>
        </div>
    )
}
