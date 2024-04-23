import { useFormik } from "formik";
import { Dropdown } from "primereact/dropdown"
import { useState } from "react";
import { librosBiblia } from "../../components/curriculum/librosBiblia";
import { MultiSelect } from 'primereact/multiselect';
import { InputText } from "primereact/inputtext";

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

    const [opcion, setOpcion] = useState("");
    const [lectura, setLectura] = useState("");
    const [curso1, setCurso1] = useState("");
    const [curso2, setCurso2] = useState("");
    const [vivencia, setVivencia] = useState("");
    //const [recursos, setRecursos] = useState("");
    const [padres, setPadres] = useState("");
    //const [escritos, setEscritos] = useState("");
    const opciones = [
        { name: 'Si', code: true },
        { name: 'No', code: false },
    ];

    const opcionesTiempo = [
        { name: '1 MES', code: 0.1 },
        { name: '2 MESES', code: 0.2 },
        { name: '3 MESES', code: 0.3 },
        { name: '6 MESES', code: 0.6 },
        { name: '1 AÑO', code: 1 },
        { name: '2 AÑOS', code: 2 },
        { name: 'MÁS DE 2 AÑOS', code: 3 },
    ];

    const opcionesTiempo2 = [
        { name: '1 hora', code: 0.01 },
        { name: '2 horas', code: 0.02 },
        { name: '1 MES', code: 0.1 },
        { name: '2 MESES', code: 0.2 },
        { name: '3 MESES', code: 0.3 },
        { name: '6 MESES', code: 0.6 },
        { name: '1 AÑO', code: 1 },
        { name: '2 AÑOS', code: 2 },
        { name: 'MÁS DE 2 AÑOS', code: 3 },
    ];

    const opcionesVivencia = [
        { name: 'Celebración Eucarística', code: 1 },
        { name: 'Credo', code: 2 },
        { name: 'Oraciones Anáforas', code: 3 },
    ];
    const opcionesPadres = [
        { name: 'San Andrés de Creta', code: 1 },
        { name: 'San Afraates', code: 2 },
        { name: 'San San Arquelao', code: 3 },
        { name: 'San Atanasio de Alejandría', code: 4 },
        { name: 'San Anastasio Sinaíta', code: 5 },
        { name: 'San Atenágoras de Atenas', code: 6 },
        { name: 'San Basilio Magno', code: 7 },
        { name: 'San Cesáreo de Nacianzo', code: 8 },
        { name: 'San Clemente de Alejandría', code: 9 },
        { name: 'San Clemente Romano', code: 10 },
        { name: 'San Cirilo de Alejandría', code: 11 },
        { name: 'San Cirilo de Jerusalén', code: 12 },
        { name: 'San Dídimo el Ciego', code: 13 },
        { name: 'San Diodoro de Tarso', code: 14 },
        { name: 'San Dionisio el Grande', code: 15 },
        { name: 'San Efrén de Siria', code: 16 },
        { name: 'San Epifanio', code: 17 },
        { name: 'San Eusebio de Cesarea', code: 18 },
        { name: 'San Eustacio de Antioquía', code: 19 },
        { name: 'San Firmiliano de Cesarea', code: 20 },
        { name: 'San Genadio I de Constantinopla', code: 21 },
        { name: 'San Germano I de Constantinopla', code: 22 },
        { name: 'San Gregorio de Nacianzo', code: 23 },
        { name: 'San Gregorio de Nisa', code: 24 },
        { name: 'San Gregorio Taumaturgo', code: 25 },
        { name: 'San Hermas de Roma', code: 26 },
        { name: 'San Hipólito de Roma', code: 27 },
        { name: 'San Ignacio de Antioquía', code: 28 },
        { name: 'San Isidoro de Pelusio', code: 29 },
        { name: 'San Juan Crisóstomo', code: 30 },
        { name: 'San Juan Clímaco', code: 31 },
        { name: 'San Juan Damasceno', code: 32 },
        { name: 'San Papa Julio I', code: 33 },
        { name: 'San Justino Mártir', code: 34 },
        { name: 'San Leoncio de Bizancio', code: 35 },
        { name: 'San Macario el Viejo', code: 36 },
        { name: 'San Máximo el Confesor', code: 37 },
        { name: 'San Melitón de Sardes', code: 38 },
        { name: 'San Metodio de Olimpo', code: 39 },
        { name: 'San Nilo el Viejo', code: 40 },
        { name: 'San Orígenes', code: 41 },
        { name: 'San Policarpo de Esmirna', code: 42 },
        { name: 'San Proclo de Constantinopla', code: 43 },
        { name: 'San Pseudo Dionisio Areopagita', code: 44 },
        { name: 'San Serapión', code: 45 },
        { name: 'San Sofronio', code: 46 },
        { name: 'San Taciano', code: 47 },
        { name: 'San Teodoro de Mopsuestia', code: 48 },
        { name: 'San Teodoreto de Ciro', code: 49 },
        { name: 'San Teófilo de Antioquía', code: 50 },
        { name: 'San Ambrosio de Milán', code: 51 },
        { name: 'San Arnobio de Sicca', code: 52 },
        { name: 'San Agustín de Hipona', code: 53 },
        { name: 'San Benito de Nursia', code: 54 },
        { name: 'San Cesáreo de Arlés', code: 55 },
        { name: 'San Juan Casiano', code: 56 },
        { name: 'San Celestino I', code: 57 },
        { name: 'San Cornelio', code: 58 },
        { name: 'San Cipriano de Cartago', code: 59 },
        { name: 'San Dámaso', code: 60 },
        { name: 'San Dionisio', code: 61 },
        { name: 'San Enodio de Pavía', code: 62 },
        { name: 'San Euquerio de Lyon', code: 63 },
        { name: 'San Fulgencio', code: 64 },
        { name: 'San Gregorio de Elvira', code: 65 },
        { name: 'San Gregorio Magno', code: 66 },
        { name: 'San Hilario de Poitiers', code: 67 },
        { name: 'San Ildefonso de Toledo', code: 68 },
        { name: 'San Inocencio de Roma', code: 69 },
        { name: 'San Ireneo de Lyon', code: 70 },
        { name: 'San Isidoro de Sevilla', code: 71 },
        { name: 'San Jerónimo de Estridón', code: 72 },
        { name: 'San Lactancio', code: 73 },
        { name: 'San Leandro de Sevilla', code: 74 },
        { name: 'San Papa León Magno', code: 75 },
        { name: 'San Mario Mercátor', code: 76 },
        { name: 'San Mario Victorino', code: 77 },
        { name: 'San Martín de Braga', code: 78 },
        { name: 'San Minucio Félix', code: 79 },
        { name: 'San Novaciano', code: 80 },
        { name: 'San Optato', code: 81 },
        { name: 'San Osio de Córdoba', code: 82 },
        { name: 'San Paciano', code: 83 },
        { name: 'San Pánfilo de Cesarea', code: 84 },
        { name: 'San Paulino de Nola', code: 85 },
        { name: 'San Pedro Crisólogo', code: 86 },
        { name: 'San Febadio', code: 87 },
        { name: 'San Rufino de Aquilea', code: 88 },
        { name: 'San Salviano', code: 89 },
        { name: 'San Papa Siricio', code: 90 },
        { name: 'San Tertuliano', code: 91 },
        { name: 'San Venancio Fortunato', code: 92 },
        { name: 'San Vicente de Lerins', code: 93 },

    ];

    const opcionesBiblia = librosBiblia;

    const formik = useFormik({
        initialValues: { initialValues },
        onSubmit: (values) => {
            console.log(values)
        }
    });

    return (
        <div className="text-sm">
            <div className='mb-5'>Por favor rellena el formulario con tu información académica:</div>
            <form className=" ">
                <div className="pl-5 mb-5 opacity-90 text-xl">En Sagrada Escritura </div>
                <div className="flex flex-row w-5/5 items-center mb-2">
                    <label className="pr-2 w-3/5"> ¿Has leido la sagrada escritura en su totalidad?: </label>
                    <Dropdown
                        value={opcion}
                        onChange={(e) => setOpcion(e.value)}
                        options={opciones}
                        optionLabel="name"
                        placeholder="Selecciona una opción"
                        className="w-2/5 md:w-14rem p-inputtext-sm" />
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
                <label>Cursos sobre la sagrada Escritura que he tomado:</label>
                <div className="flex flex-row justify-around items-center my-2">
                    <InputText className='p-inputtext-sm' placeholder="Curso" />
                    <span>Dónde: </span>
                    <InputText className='p-inputtext-sm' placeholder="Lugar" />
                    <span className='mx-1'>Duración: </span>
                    <Dropdown
                        value={curso1}
                        onChange={(e) => setCurso1(e.value)}
                        options={opcionesTiempo}
                        optionLabel="name"
                        placeholder="Selecciona una opción"
                        className="w-2/5 md:w-14rem p-inputtext-sm" />
                </div>
                <div className="pl-5 my-5 opacity-90  text-xl">En Sagrada Tradición de la Iglesia </div>
                <label>Cursos o charlas que he tomado:</label>
                <div className="flex flex-row justify-around items-center my-2">
                    <InputText className='p-inputtext-sm' placeholder="Curso" />
                    <span>Dónde: </span>
                    <InputText className='p-inputtext-sm' placeholder="Lugar" />
                    <span className='mx-1'>Duración: </span>
                    <Dropdown
                        value={curso2}
                        onChange={(e) => setCurso2(e.value)}
                        options={opcionesTiempo2}
                        optionLabel="name"
                        placeholder="Selecciona una opción"
                        className="w-2/5 md:w-14rem p-inputtext-sm" />
                </div>
                <div className="flex flex-row w-5/5 items-center my-2">
                    <label className="pr-2 w-3/5"> Reconozco la Sagrada Tradición de la Iglesia en estas vivencias cotidianas: </label>
                    <MultiSelect
                        value={vivencia}
                        onChange={(e) => setVivencia(e.value)}
                        options={opcionesVivencia}
                        optionLabel="name"
                        filter
                        placeholder="Vivencias cotidianas"
                        maxSelectedLabels={3}
                        className="w-2/5 md:w-20rem" />
                </div>
                <div className="flex flex-row w-5/5 items-center my-2">
                    <label className="pr-2 w-3/5">Nombres de libros, youtube, revistas, etc. sobre los Padres de la Iglesia que he leido o he visto: </label>
                    <InputText className='p-inputtext-sm' placeholder="Recursos" />
                </div>
                <div className="flex flex-row w-5/5 items-center my-2">
                    <label className="pr-2 w-3/5"> Padres de la Iglesia que conozco: </label>
                    <MultiSelect
                        value={padres}
                        onChange={(e) => setPadres(e.value)}
                        options={opcionesPadres}
                        optionLabel="name"
                        filter
                        placeholder="Libros"
                        maxSelectedLabels={3}
                        className="w-2/5 md:w-20rem" />
                </div>
                <div className="flex flex-row w-5/5 items-center my-2">
                    <label className="pr-2 w-3/5">Escrito de algunos padres de la iglesia del que tengo noticia, o he leído: </label>
                    <InputText className='p-inputtext-sm' placeholder="Escritos" />
                </div>
                <div className="pl-5 my-5 opacity-90  text-xl">Magisterio de la Iglesia </div>
                <div className="pl-5 my-5 opacity-90  text-xl">Conocimiento sobre los tres grados del magisterio de la Iglesia </div>
                <div className="pl-5 my-5 opacity-90  text-xl">Conocimiento sobre Doctrina Social de la Iglesia </div>
                <div className="pl-5 my-5 opacity-90  text-xl">Historia de la Iglesia </div>
                <button onClick={formik.submitForm} type="button" className='m-auto mt-5 w-1/2 h-10 border border-blue-500 bg-blue-200 hover:bg-blue-400 transition duration-500 ease-in-out'>Guardar</button>

            </form >
        </div>

    )
}
