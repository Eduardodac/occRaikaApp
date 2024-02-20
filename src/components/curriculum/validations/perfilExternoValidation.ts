import { perfilExternoFormType } from "../types";

type errorType = {
    Foto?: string,
    SantoPatron?: string,
    ZonaPerteneciente?: string,
    Parroquia?: string,
    Decanato?: string,
    DesarrolloApostolado?: string,
    DireccionCapilla?: string
}

export const PerfilExternoValidation = (values:perfilExternoFormType ) => {
    let errors : errorType = {};
    if (!values.SantoPatron){
        errors.SantoPatron = "Por favor, ingrese su Santo Patrón"
    }
    if (!values.ZonaPerteneciente){
        errors.ZonaPerteneciente = "Por favor, ingrese la zona a la que pertenece"
    }
    if (!values.Parroquia){
        errors.Parroquia = "Por favor, ingrese si parroquia"
    }
    if (!values.Decanato){
        errors.Decanato = "Por favor, ingrese su Decanato"
    }
    if (!values.DesarrolloApostolado){
        errors.DesarrolloApostolado = "Por favor, ingrese en donde desarrolló su apostolado"
    }
    if (!values.DireccionCapilla){
        errors.DireccionCapilla = "Por favor, ingrese la dirección de su capilla"
    }

    return errors;
}