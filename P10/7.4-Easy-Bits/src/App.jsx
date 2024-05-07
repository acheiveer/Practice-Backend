
import './App.css'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { jobsAtom, messsagingAtom, networkAtom, notificationsAtom, totalNotoficationsSelector  } from './atoms'
// import { useMemo } from 'react'

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
  const totalnotofications = useRecoilValue(totalNotoficationsSelector)

  // const totalnotofications = useMemo(()=>{
  //   return networkNotofactionCount + JobsAtomCount + NotofactionAtomCount + messageAtomCount;
  // },[networkNotofactionCount, JobsAtomCount, NotofactionAtomCount, messageAtomCount])

  return (
    <>
    <button>Home</button>
    <button>My network ({networkNotofactionCount >= 100 ? "99+" : networkNotofactionCount})</button>
    <button>Jobs ({JobsAtomCount})</button>
    <button>messaging ({NotofactionAtomCount})</button>
    <button>Notifications ({messageAtomCount})</button>
    <button>Me ({totalnotofications})</button>
    </>
  )
}

export default App
