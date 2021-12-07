import Usuario from './Usuario';

let TablaUsuarios = (props) => {
    const usuarios = props.usuarios;
    const listaUsuarios = usuarios.map((usuario) => <Usuario key = {usuario.cedula}
                                                modificarStatus = { props.modificarStatus }
                                                eliminarUsuario = { props.eliminarUsuario }
                                                { ...usuario }/>);

    return(
        <div className="container-fluid" >
            <div className="card mt-5">
                <div className="card-body">
                    <button id="btnRegistrarNov" className="btn btn-sm btn-primary float-end">Registrar Usuario</button>
                    <h4>Lista de Usuarios Registrados</h4>
                    <h5 className="text-muted"><i>Visualizar, editar, agregar y eliminar usuarios</i></h5>
                </div>
            </div>
            <table class="table caption-top">
                <thead class="table-dark">
                    <tr>
                        <th scope="col">Cedula</th>
                        <th scope="col">Usuario/Status</th>
                        <th scope="col">Nacimiento</th>
                        <th scope="col">Email</th>
                        <th scope="col">Genero</th>
                        <th scope="col">Ciudad</th>
                        <th scope="col">Telefono</th>
                        <th scope="col">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    { listaUsuarios }
                </tbody>
            </table>
        </div>
    );
}

export default TablaUsuarios;