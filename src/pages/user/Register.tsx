import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { InputTextCustom } from "../../shared/Form/InputTextCustom";
import { Button } from "primereact/button";

import { PasswordCustom } from "../../shared/Form/PasswordCustom";


import { Toast } from 'primereact/toast';
import { useRef } from "react";
import { useAuthStore } from "../../store/authStore";
import { crearCuentasApi } from "../../services/httpclient";
import { RegistroSchema } from "../../helpers/yupLogin";

type DefaultType = {
    email: string,
    password: string,
    confirmPassword: string,
    nombre: string,
    apellidoPaterno: string,
    apellidoMaterno: string
}

export const Register = () => {
    const { jwt, setJWT } = useAuthStore();
    const CuentasApi = crearCuentasApi(jwt);

    const toast = useRef<Toast>(null);
    const showError = (message: string) => {
        toast.current?.show({ severity: 'error', summary: 'Error', detail: message, life: 4000 });
    }

    const defaultValues: DefaultType = {
        email: '',
        password: '',
        confirmPassword: '',
        nombre: '',
        apellidoPaterno: '',
        apellidoMaterno: ''
    }

    const methods = useForm({
        mode: 'onTouched',
        resolver: yupResolver(RegistroSchema),
        defaultValues: defaultValues,
    });

    const { handleSubmit } = methods;

    const onSubmit = (data: any) => {
        CuentasApi.apiV1UserRegistrarPost(data).then(response => {
            const jwtRecibido = response.data.token ? response.data.token : null;
            setJWT(jwtRecibido);
        }).catch((errors) => {
            const error = errors.response.data[0].description ? errors.response.data[0].description : "Error";
            showError(error);
            console.log(errors)
        })
    }
    return (
        <article className="w-full p-2 bg-fondo py-10">
            <Toast ref={toast} />
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)} className="p-fluid space-y-1">
                    <div className='text-xl mb-8 text-paletaIpn-guinda' >Registro</div>
                    <div className="flex flex-row justify-center">
                        <InputTextCustom name='email' id='email' label='Correo Electrónico' className="max-w-72" />
                        <InputTextCustom name='nombre' id='nombre' label='Nombre' className="max-w-72" />
                    </div>
                    <div className="flex flex-row justify-center">
                        <InputTextCustom name='apellidoPaterno' id='apellidoPaterno' label='Apellido Paterno' className="max-w-72" />
                        <InputTextCustom name='apellidoMaterno' id='apellidoMaterno' label='Apellido Materno' className="max-w-72" />
                    </div>
                    <div className="flex flex-row justify-center items-center">
                        <PasswordCustom name='password' id='password' label='Contraseña' className="max-w-72" />
                        <PasswordCustom name='confirmPassword' id='confirmPassword' label='Confirmar Contraseña' className="max-w-72" />
                    </div>
                    <div className='w-3/4 m-auto max-w-72'>
                        <Button type="submit" label="Registrarse" className={'mt-2'} outlined />
                    </div>
                </form>
            </FormProvider>
        </article>
    )
}
