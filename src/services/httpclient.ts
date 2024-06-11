import { UserApi, PerfilExternoLaicoApi } from "../openAPI";
import { Configuration } from "../openAPI/configuration";

const createApiConfig =((token:string | null)=>{
    const openApiConfig = new Configuration();
    openApiConfig.baseOptions = {
        headers: { 
            Authorization: 'Bearer ' + token,
        },
    };
    //openApiConfig.basePath = "http://localhost:7090"
    openApiConfig.basePath = "https://localhost:7289"
    return openApiConfig
})

export const crearCuentasApi = ((token:string | null)=>{
    return new UserApi(createApiConfig(token));
})

export const crearGatosApi = ((token:string | null)=>{
    return new PerfilExternoLaicoApi(createApiConfig(token));
})




