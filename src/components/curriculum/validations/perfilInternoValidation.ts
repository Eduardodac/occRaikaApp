import {  perfilInternoFormType } from "../types";

type errorType = {
    NombreCompleto?: string,
    Colonia?: string,
    CodigoPostal?: string,
    Municipio?: string,
    TelefonoFijo?: string,
    Celular?: string,
    email?: string,
    CondicionVida?: string,
    Sexo?: string,
    FechaNacimiento?: string,
    EstadoCivil?: string,
    Nacionalidad?: string
}

export const PerfilInternoValidation = (values:perfilInternoFormType ) => {
    let errors : errorType = {};
    if (!values.NombreCompleto){
        errors.NombreCompleto = "Por favor, ingrese su Nombre Completo."
    }
    if (!values.Colonia){
        errors.Colonia = "Por favor, ingrese la colonia donde vive."
    }
    if (!values.CodigoPostal){
        errors.CodigoPostal = "Por favor, ingrese su código postal"
    }
    if (!values.Celular){
        errors.Celular = "Por favor, ingrese su número de celular"
    }
    if (!values.email){
        errors.email = "Por favor, ingrese en donde desarrolló su email"
    }
    if (!values.FechaNacimiento){
        errors.FechaNacimiento = "Por favor, ingrese su fecha de nacimiento"
    }

    return errors;
}