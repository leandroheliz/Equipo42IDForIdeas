import { Link } from 'react-router-dom';
import Item from "./Item";

const Actividad = () => {
  return (
    <div className="container-actividad">
      <div className="d-flex justify-content-between">
      <Link to="movimientos" className="text-decoration-none">
      <h1 className="title">Tu actividad</h1>
      </Link>
      <Link to="movimientos" className="text-decoration-none">
      <h1 className="title">Ver todo</h1>
      </Link>
      </div>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
};

export default Actividad;
