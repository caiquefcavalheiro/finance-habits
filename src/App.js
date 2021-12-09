

import SignIn from './components/SignIn';
import GlobalStyle from './style/global'
import { useState} from 'react'

function App() {

  const [openSignup, setOpenSignup] = useState(true)

  return (
    <>
      <GlobalStyle/>
      <SignIn openSignup={openSignup} setOpenSignup={setOpenSignup}/>
    </>
  );
}

export default App;
