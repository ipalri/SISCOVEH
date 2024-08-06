const username = document.getElementById('username')
const password = document.getElementById('password')
const button = document.getElementById('button')

button.addEventListener('click', (e) => {
    e.preventDefault();
    
    const data = {
        username: username.value,
        password: password.value
    }

    console.log(data)

    if (username.value == '') 
       { alert("No puede dejar el Nombre de Usuario vacio");
        exit; }
        
    if (password.value == '') 
       { alert("Todo Usuario debe tener una contraseña");
        exit; }

    switch (username.value) {
        case 'usuario1':
            if (password.value == 111)
                window.open('MENU.html','_self')
            else
                alert('Esa no es la contraseña de Usuario1')
            break;
    
        case 'Usuario2':
            if (password.value == 222)
                window.open('user2.html','_self')
            else
                alert('Esa no es la contraseña de Usuario2')
            break;

        case 'Usuario3':
            if (password.value == 333)
                window.open('user3.html','_self')
            else
                alert('Esa no es la contraseña de Usuario3')
            break;
        default:
            alert('Usuario no Registrado')
            break;
    }
    
        

})