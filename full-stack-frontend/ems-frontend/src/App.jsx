
import ListEmployee from './components/ListEmployee'
import Header from './components/Header'
import Footer from './components/footer'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import EmployeeComponent from './components/EmployeeComponent'

function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      
      <Route path="/" element={<ListEmployee/>}> </Route>
      <Route path="/employee" element={<ListEmployee/>}></Route>
      <Route path="/add-employee" element={<EmployeeComponent/>}></Route>

       <Route path="/update-employee/:id" element={<EmployeeComponent/>}></Route>

     </Routes>


     <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App
