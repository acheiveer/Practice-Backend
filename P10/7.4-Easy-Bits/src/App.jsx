
import './App.css'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { jobsAtom, messsagingAtom, networkAtom, notificationsAtom } from './atoms'

function App() {
 return<>
 <RecoilRoot>
 <MainApp/>
 </RecoilRoot>
   
 </>
}


function MainApp(){
  const networkNotofactionCount = useRecoilValue(networkAtom)
  const JobsAtomCount = useRecoilValue(jobsAtom)
  const NotofactionAtomCount = useRecoilValue(notificationsAtom)
  const messageAtomCount = useRecoilValue(messsagingAtom)

  return (
    <>
    <button>Home</button>
    <button>My network ({networkNotofactionCount >= 100 ? "99+" : networkNotofactionCount})</button>
    <button>Jobs ({JobsAtomCount})</button>
    <button>messaging ({NotofactionAtomCount})</button>
    <button>Notifications ({messageAtomCount})</button>
    <button>Me</button>
    </>
  )
}

export default App
