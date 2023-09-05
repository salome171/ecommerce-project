import { Link } from 'react-router-dom'

const Signin = () => {
  return (
    <div className='FooterSigningContAll'>

      <hr style={{ width: '100%', backgroundColor: 'black' }} />

      <div className='FooterSigningCont'>
        <p className='FooterSigningContpfirst'>See personalized recommendations</p>
        <Link to='/signing' className='FooterSigningContButton'>Sign in</Link>
        <p className='FooterSigningContpSecond'>New customer? <Link to='./createAccount'>Start here.</Link></p>
      </div>

      <hr style={{ width: '100%', backgroundColor: 'black' }} />

    </div>

  )
}

export default Signin
