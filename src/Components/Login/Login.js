
const Login = () => {
    return(
        <div className='container justify-content-center d-flex text-center'>
            <div className='row'>
                <div className='' >
                    <h2>Iniciar Sesión</h2>
                    <form className='form-group'> 
                        <input type='text' placeholder='ID' className='form-control' style={{ width: '30rem' }} />
                        <input type='password' placeholder='pass' className='form-control mt-2' style={{ width: '30rem' }} />
                        <input type='sumbit' value='SEND' className='btn btn-success mt-2' />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;