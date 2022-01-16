import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div className="text-center error404">
      <div className="row">
        <div className="col">
      <h1>Error 404</h1>
      <br/>
      <iframe src="https://giphy.com/embed/qHXSYtyW0kANmLLzcG" width="480" height="426" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      <br/><br/>
      <Link to="/"><button className="btn"><h3>Volver al Home</h3></button></Link>
        </div>
      </div>
    </div>
  )
}

export default Error404;