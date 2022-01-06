import React from 'react'

const Login = () => {

// col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6
    return(
        <div className='container justify-content-center d-flex'>
            <div className='row'>
                <div className='' >
                    <h2>Login</h2>
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

export default Login