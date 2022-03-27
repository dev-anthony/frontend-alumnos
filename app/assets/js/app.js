// CÓDIGO HECHO POR: AANTHONY SOLANO LÓPEZ

const inputField = document.getElementById('buscar-alumno');
const btnBuscar = document.getElementById('btn-buscar'); 
const noControl = document.getElementById('no_control');
const nombre_alumno = document.getElementById('nombre_alumno');
const apellidoPaterno = document.getElementById('apellido_paterno');
const apellidoMaterno = document.getElementById('apellido_materno');
const fechaNacimiento = document.getElementById('fecha_nacimiento');
const edadAlumno = document.getElementById('edad_alumno');
const semestre = document.getElementById('semestre_actual');
const carrera = document.getElementById('carrera');
const especialidad = document.getElementById('especialidad');

const url = 'http://localhost:8080/api/alumnos';

const alumnos = async function getAlumnos() {
    await fetch(url)
    .then((response) => response.json())
    .then(data => {

        for (let i = 0; i < data.length; i++) {
            if (data[i].nombre_alumno.toLowerCase() === inputField.value.toLowerCase() || data[i].no_control === inputField.value) {
              
            const div = document.createElement('div');
            div.className = 'alert alert-danger';
            div.innerHTML = 'EXITO!!, alumno encontrado';
            div.style.textAlign = 'center';
            div.style.textTransform = 'uppercase';
            div.style.backgroundColor = 'green';
            div.style.width = '20%';
            div.style.color = 'white';
            div.style.borderRadius = '10px';
            div.style.marginLeft = '40%';
            div.style.marginTop = '10px';
            div.style.marginBottom = '10px';
            div.animate([
                // keyframes
                { transform: 'translateX(0px)' },
                { transform: 'translateX(100px)' },
                { transform: 'translateX(0px)' }
            ], {
                // timing options
                duration: 1000,
                iterations: 1
            });
            document.body.appendChild(div);
            setTimeout(() => {
                div.remove();
            }, 3000);

                nombre_alumno.innerHTML = data[i].nombre_alumno;
                noControl.innerHTML = data[i].no_control;
                apellidoPaterno.innerHTML = data[i].apellido_paterno;
                apellidoMaterno.innerHTML = data[i].apellido_materno;
                fechaNacimiento.innerHTML = data[i].fecha_nacimiento;
                const fechaActual = new Date();
                const fechaNacimientoAlumno = new Date(data[i].fecha_nacimiento);
                const edad = fechaActual.getFullYear() - fechaNacimientoAlumno.getFullYear();
                edadAlumno.innerHTML = edad;

                semestre.innerHTML = data[i].semestre_actual;
                carrera.innerHTML = data[i].carrera;
                especialidad.innerHTML = data[i].especialidad;
            }
        }

        if ( nombre_alumno.innerHTML === '' || noControl.innerHTML === '' ) {
            const div = document.createElement('div');
            div.className = 'alert alert-danger';
            div.innerHTML = 'No se encontró el alumno';
            div.style.textAlign = 'center';
            div.style.textTransform = 'uppercase';
            div.style.backgroundColor = 'red';
            div.style.width = '20%';
            div.style.color = 'white';
            div.style.borderRadius = '10px';
            div.style.marginLeft = '40%';
            div.style.marginTop = '10px';
            div.style.marginBottom = '10px';
            div.animate([
                // keyframes
                { transform: 'translateX(0px)' },
                { transform: 'translateX(100px)' },
                { transform: 'translateX(0px)' }
            ], {
                // timing options
                duration: 1000,
                iterations: 1
            });
            document.body.appendChild(div);
            document.body.appendChild(div);
            setTimeout(() => {
                div.remove();
            }, 3000);
        }

        
        inputField.value = '';
    })
}

inputField.addEventListener(
    'keydown',
    (event) => event.key === 'Enter' && btnBuscar.click()
  );
  btnBuscar.addEventListener('click', () => alumnos(inputField.value));
  

alumnos();