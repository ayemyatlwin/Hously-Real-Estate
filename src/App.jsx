import './index.css'
import { Route, Routes } from 'react-router-dom'
import Test from './Components/Test'
<<<<<<< HEAD
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ForgetPW from "./Pages/ForgetPW";

=======
import Details from './Pages/Details'
import Pricing from './Pages/Pricing'
import Features from './Pages/Features'
import Faqs from './Pages/Faqs'
>>>>>>> 7b426cb5cf521e526479ae4a83d17f1ed26671c7

const App = () => {
  const properties = [
    {
        id: '1',
        title: '10765 Hillshire Ave, Baton Rouge, LA 70810, USA',
        image: 'https://hously-react.vercel.app/static/media/1.bfd273967d5b93df7a02.jpg',
    },
    {
        id: '2',
        title: '59345 STONEWALL DR, Plaquemine, LA 70764, USA',
        image: 'https://hously-react.vercel.app/static/media/2.e5bc3d17749573c2fd3e.jpg',
    },
    {
        id: '3',
        title: '3723 SANDBAR DR, Addis, LA 70710, USA',
        image: 'https://hously-react.vercel.app/static/media/3.c799274c67ecb7c94a70.jpg',
    },
    {
        id: '4',
        title: 'Lot 21 ROYAL OAK DR, Prairieville, LA 70769, USA',
        image: 'https://hously-react.vercel.app/static/media/4.1cefc41c08f3161f9c19.jpg',
    },
    {
        id: '5',
        title: '710 BOYD DR, Unit #1102, Baton Rouge, LA 70808, USA',
        image: 'https://hously-react.vercel.app/static/media/5.289f490cebbaef2f5f58.jpg',
    },
    {
        id: '6',
        title: '5133 MCLAIN WAY, Baton Rouge, LA 70809, USA',
        image: 'https://hously-react.vercel.app/static/media/6.e926f8483d02a9e86342.jpg',
    },
]
  return (
    <Routes>
      <Route path={"/signup"} element={<Signup />} />
      <Route path={"/forgetPW"} element={<ForgetPW />} />
      <Route path={'/test'} element={<Test properties={properties}/>}/> 
      <Route path='/details/:id' element={<Details properties={properties}/>} />
      <Route path='/pricing' element={<Pricing/>}/>
      <Route path='/features' element={<Features/>}/>
      <Route path='/faqs' element={<Faqs/>}/>
    </Routes>
  )
}

export default App