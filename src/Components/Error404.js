import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
      <br/>
      <p>Error 404</p>
      <br/>
      <Link to="/">Volver al Home</Link>
        </div>
      </div>
    </div>
  )
}

export default Error404;