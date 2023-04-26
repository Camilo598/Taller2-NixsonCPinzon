const form  = document.getElementById('form') as HTMLFormElement;
const btnGuardar = document.getElementById('btn-guardar') as HTMLButtonElement;


btnGuardar.addEventListener('click', (e) =>{
    e.preventDefault();
    console.log("Ingreso a la validacion del formulario");

    //La validacion del formulario

    const tipoIdentificacion = document.getElementById('tipoIdentificacion') as HTMLInputElement;
    const numeroIdentificacion = document.getElementById('numeroIdentificacion') as HTMLInputElement;
    const nombres = document.getElementById('nombres') as HTMLInputElement;
    const apellidos = document.getElementById('apellidos') as HTMLInputElement;
    const celular = document.getElementById('celular') as HTMLInputElement;
    const email = document.getElementById('email') as HTMLInputElement;
    const linkedin = document.getElementById('linkedin') as HTMLInputElement;
    const github = document.getElementById('github') as HTMLInputElement;

    console.log(tipoIdentificacion.value);
})