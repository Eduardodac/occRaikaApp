import { InputText } from 'primereact/inputtext';
import { useFormik } from 'formik';
import { perfilInternoFormType } from '../components/curriculum/types';
import { PerfilInternoValidation } from '../components/curriculum/validations/perfilInternoValidation';
import { Dropdown } from 'primereact/dropdown';
import { useState } from 'react';

const initialValues: perfilInternoFormType = {
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
    EstadoCivil: 'Soltero',
    Nacionalidad: ""
}

const estadoCivilOpciones = [
    { name: 'Soltero', code: 'Soltero' },
    { name: 'Casado/a', code: 'Casado' },
    { name: 'Separado/a', code: 'Casado' },
    { name: 'Viudo/a', code: 'Viudo' },
    { name: 'Union Libre', code: 'UnionLibre' },
];

const sexoOpciones = [
    { name: 'Masculino', code: 'Masculino' },
    { name: 'Femenino', code: 'Femenino' },

];

export const PerfilInterno = () => {
const [estadoCivil, setEstadoCivil] = useState('Soltero');
const [sexo, setSexo] = useState('masculino');


    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
        validate: PerfilInternoValidation
    });

    return (
        <div className=' py-5 mx-5 border border-slate-50 bg-white'>
            <form className="grid grid-cols-2 w-3/4 m-auto space-y-2" onSubmit={formik.handleSubmit}>

                <section className='px-5 pt-2 flex flex-col '>
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
                </section>
                <section className='px-5 flex flex-col'>
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
                </section>
                <section className='px-5 flex flex-col'>
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
                </section>
                <section className='px-5 flex flex-col'>
                    <label htmlFor='Municipio' className='text-sm mb-2'>Municipio:</label>
                    <InputText
                        className='p-inputtext-sm'
                        placeholder='Municipio'
                        name='Municipio'
                        value={formik.values['Municipio']}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </section>
                <section className='px-5 flex flex-col'>
                    <label htmlFor='TelefonoFijo' className='text-sm mb-2'>Teléfono Fijo:</label>
                    <InputText
                        className='p-inputtext-sm'
                        placeholder='0000-0000-00'
                        name='TelefonoFijo'
                        value={formik.values['TelefonoFijo']}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </section>
                <section className='px-5 flex flex-col'>
                    <label htmlFor='Celular' className='text-sm mb-2'>Celular:</label>
                    <InputText
                        className='p-inputtext-sm'
                        placeholder='0000-0000-00'
                        name='Celular'
                        value={formik.values['Celular']}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <div className='text-sm text-red-500'>
                        {formik.touched['Celular'] && <div>{formik.errors['Celular']}</div>}
                    </div>
                </section>
                <section className='px-5 flex flex-col'>
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
                </section>
                <section className='px-5 flex flex-col'>
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
                </section>
                <section className='px-5 flex flex-col'>
                    <label htmlFor='Sexo' className='text-sm mb-2'>Sexo:</label>
                    <Dropdown
                        value={sexo}
                        onChange={(e) => setSexo(e.value)}
                        options={sexoOpciones}
                        optionLabel="name"
                        placeholder="Selecciona una opción"
                        className=" md:w-14rem p-inputtext-sm" />
                </section>
                <section className='px-5 flex flex-col'>
                    <label htmlFor='EstadoCivil' className='text-sm mb-2'>Estado Civil:</label>
                    <Dropdown
                        value={estadoCivil}
                        onChange={(e) => setEstadoCivil(e.value)}
                        options={estadoCivilOpciones}
                        optionLabel="name"
                        placeholder="Selecciona una opción"
                        className=" md:w-14rem p-inputtext-sm" />
                </section>
                <section className='px-5 flex flex-col'>
                    <label htmlFor='Nacionalidad' className='text-sm mb-2'>Nacionalidad:</label>
                    <InputText
                        className='p-inputtext-sm'
                        placeholder='Nacionalidad'
                        name='Nacionalidad'
                        value={formik.values['Nacionalidad']}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </section>

            </form>
            <div className='w-full flex justify-center'>
                <button
                    onClick={formik.submitForm}
                    type="button"
                    className='mx-auto my-10 w-1/2 h-10 border border-blue-500 bg-blue-200 hover:bg-blue-400 transition duration-500 ease-in-out'>
                    Guardar
                </button>
            </div>

        </div >
    )
}
