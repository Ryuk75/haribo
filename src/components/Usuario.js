import StatusUsuario from './StatusUsuario';

let Usuario = (props) => {
    return(
        <tr>
            <th scope="row">{ props.cedula }</th>
            <td>{ props.nombre }</td>
            <td>{ props.apellido }</td>
            <td>{ props.nacimiento }</td>
            <td>{ props.email }</td>
            <td>{ props.genero }</td>
            <td>{ props.ciudad }</td>
            <td>{ props.telefono }</td>
            <td><StatusUsuario status = { props.status } /></td>
        </tr>
    );
}
export default Usuario;
