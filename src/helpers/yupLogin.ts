import * as yup from 'yup';

export const LoginSchema = yup.object().shape({
    email: yup.string().required("El UserName es requerido"),
    password: yup.string().required("La constraseña es requerida")
});

export const RegistroSchema = yup.object().shape({
    nombre: yup.string().required("El Nombre es requerido"),
    apellidoPaterno: yup.string().required("El Apellido Paterno es requerido"),
    apellidoMaterno: yup.string().required("El Apellido Materno es requerido"),
    email: yup
    .string()
    .required("El email es requerido")
    .email("Debe ser un correo válido")
    .matches(/^(?!.*@[^,]*,)/, "Debe ser un correo válido"),
    password: yup
        .string()
        .required('Ingrese una contraseña')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Debe contener 8 caracteres, una mayuscula, una minúscula, un número y un caracter especial"
        ),
    confirmPassword: yup
        .string()
        .required("Confirme la contraseña")
        .oneOf([yup.ref("password")], "Las contraseñas no coinciden")
});