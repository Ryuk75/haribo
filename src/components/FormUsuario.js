import { useState } from 'react';

function FormUsuario(props) {
    const nuevoUsuario = {
        cedula: 0,
        nombre: "",
        apellido: "",
        email: "",
        genero: "",
        ciudad: "",
        telefono: "",
        password: 0,
        status: true,
        nacimiento: ""
    };

    const inicializarUsuario = (props.modo!=="nuevo" ? {...props.usuario} : nuevoUsuario);
    const [ usuario , setUsuario ] = useState(inicializarUsuario);

    const edicionUsuario = (evento) => {
        const usuarioSeleccionado = {...usuario};
        usuarioSeleccionado[evento.target.name] = evento.target.value;
        setUsuario(usuarioSeleccionado);
    }
    const onFormSubmit = (evento) => {
        evento.preventDefault();
        props.registrar(usuario);
        setUsuario(nuevoUsuario);
    }

    return (
        <form onSubmit={ onFormSubmit }>
            <div className="form-group">
                <label className="control-label" htmlFor="Id" >Cedula</label>
                <input className="form-control" type="number"
                       name="cedula" value={usuario.cedula} onChange={ edicionUsuario } />
            </div>
            <div className="form-group">
                <label className="control-label">Nombre</label>
                <input className="form-control" type="text"
                       name="nombre" value={usuario.nombre} onChange={ edicionUsuario }/>
            </div>
            <div className="form-group">
                <label className="control-label">Apellido</label>
                <input className="form-control" type="text"
                       name="apellido" value={usuario.apellido} onChange={ edicionUsuario }/>
            </div>
            <div className="form-group">
                <label className="control-label">Email</label>
                <input className="form-control" type="text"
                       name="email" value={usuario.email} onChange={ edicionUsuario }/>
            </div>
            <div className="form-group">
                <label className="control-label">Genero</label>
                <select className="form-control" 
                       name="genero" onChange={ edicionUsuario }>
                    <option>Seleccionar...</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                </select>
            </div>
            <div className="form-group">
                <label className="control-label">Ciudad</label>
                <input className="form-control" type="text" 
                       name="ciudad" value={usuario.ciudad} onChange={ edicionUsuario }/>
            </div>
            <div className="form-group">
                <label className="control-label">Telefono</label>
                <input className="form-control" type="number" 
                       name="telefono" value={usuario.telefono} onChange={ edicionUsuario }/>
            </div>
            <div className="form-group">
                <label className="control-label">Password</label>
                <input className="form-control" type="password" 
                       name="pasword" onChange={ edicionUsuario }/>
            </div>
            <div className="form-group">
                <label className="control-label">Status</label>
                <select className="form-control" 
                       name="status" onChange={ edicionUsuario }>
                    <option>Seleccionar...</option>
                    <option value="true">Activo</option>
                    <option value="false">Inactivo</option>
                </select>
            </div>
            <div className="form-group">
                <label className="control-label">Nacimiento</label>
                <input className="form-control" type="date" 
                       name="nacimiento" value={usuario.nacimiento} onChange={ edicionUsuario }/>
            </div>
            <div className="form-group">
                <button className="btn btn-success mr-1" type="submit">Guardar</button>
                <button className="btn btn-danger" type="button">Cancelar</button>
            </div>
        </form>
    );
}

export default FormUsuario;