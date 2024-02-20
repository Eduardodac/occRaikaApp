export type perfilExternoFormType = {
    Foto: string,
    SantoPatron: string,
    ZonaPerteneciente: string,
    Parroquia: string,
    Decanato: string,
    DesarrolloApostolado: string,
    DireccionCapilla: string
}

export type academicaFormType = {
    Primaria:{
        nombre: string,
        fechaInicio:string,
        fechaFin: string,
        estado: string,
    },
    Secundaria:{
        nombre: string,
        fechaInicio: string,
        fechaFin: string,
        estado: string,
    },
    Preparatoria:{
        nombre: string,
        fechaInicio:string,
        fechaFin: string,
        estado: string,
    },
    EscuelaTecnica:{
        nombre: string,
        fechaInicio: string,
        fechaFin: string,
        estado: string,
    },
    Universidad:{
        nombre: string,
        fechaInicio: string,
        fechaFin: string,
        estado: string,
    },
    Licenciatura: string,
    GradoAcademico: string,
    Especializacion: string,
    Diplomado: string,
    Postgrados: string,
    OtrosEstudios: string
}