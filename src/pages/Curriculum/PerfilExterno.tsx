import { InputText } from 'primereact/inputtext';
import { useFormik } from 'formik';

const initialValues = {
    Foto: '',
    SantoPatron: '',
    ZonaPerteneciente: '',
    Parroquia: '',
    Decanato: '',
    DesarrolloApostolado: '',
    DireccionCapilla: ''
}

export const PerfilExterno = () => {

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: (values) => {
            console.log(values)
        }
    });

    return (
        <>
            <div className='m-5'>Por favor ingresa los siguientes datos, porfavor:</div>
            <form className="flex flex-col w-3/4 m-auto space-y-2" onSubmit={formik.handleSubmit}>
                <label htmlFor='SantoPatron' className='text-sm mb-2'>Mi Santo Patrón o Santa Patrona es:</label>
                <InputText
                    className='p-inputtext-sm'
                    placeholder='Ingresa Santo Patrón'
                    name='SantoPatron'
                    value={formik.values['SantoPatron']}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <div>
                    {formik.touched['SantoPatron'] && <div>{formik.errors['SantoPatron']}</div>}
                </div>
                <label htmlFor='ZonaPerteneciente' className='text-sm mb-2'>Pertenezco a la zona:</label>
                <InputText
                    className='p-inputtext-sm'
                    placeholder='Ejem: Zona urbana de la Aquidiósesis de Puebla'
                    name='ZonaPerteneciente'
                    value={formik.values['ZonaPerteneciente']}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <div>
                    {formik.touched['SantoPatron'] && <div>{formik.errors['SantoPatron']}</div>}
                </div>
                <label htmlFor='SantoPatParroquiaron' className='text-sm mb-2'>Mi parroquia es:</label>
                <InputText
                    className='p-inputtext-sm'
                    placeholder='Ingresa la parroquia.'
                    name='Parroquia'
                    value={formik.values['Parroquia']}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <div>
                    {formik.touched['Parroquia'] && <div>{formik.errors['Parroquia']}</div>}
                </div>
                <label htmlFor='Decanato' className='text-sm mb-2'>Mi Decanato es:</label>
                <InputText
                    className='p-inputtext-sm'
                    placeholder='Ingresa el decanato.'
                    name='Decanato'
                    value={formik.values['Decanato']}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <div>
                    {formik.touched['Decanato'] && <div>{formik.errors['Decanato']}</div>}
                </div>
                <label htmlFor='DesarrolloApostolado' className='text-sm mb-2'>Desarrollo mi postolado en:</label>
                <InputText
                    className='p-inputtext-sm'
                    placeholder='Ingresa dirección de postolado.'
                    name='DesarrolloApostolado'
                    value={formik.values['DesarrolloApostolado']}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <div>
                    {formik.touched['DesarrolloApostolado'] && <div>{formik.errors['DesarrolloApostolado']}</div>}
                </div>
                <label htmlFor='DireccionCapilla' className='text-sm mb-2'>Dirección de la capilla:</label>
                <InputText
                    className='p-inputtext-sm'
                    placeholder='Ingresa información.'
                    name='DireccionCapilla'
                    value={formik.values['DireccionCapilla']}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <div>
                    {formik.touched['DireccionCapilla'] && <div>{formik.errors['DireccionCapilla']}</div>}
                </div>

                <button onClick={formik.submitForm} type="button" className='m-auto w-1/2 h-10 border border-blue-500 bg-blue-200 hover:bg-blue-400 transition duration-500 ease-in-out'>Guardar</button>
            </form>
        </>
    )
}
