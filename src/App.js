import './App.css';
import Header from './components/Header';
import JobDetails from './components/JobDetails';
import JobListing from './components/JobListing';
import { BrowserRouter,Routes ,Route } from "react-router-dom";


function App() {
  return (
    // <div className="App">
    //   <Header/>
    //   <JobListing/>
    //   <JobDetails/>
    // </div>
<>
{/* <Router>

      <Route exact path='/' element={< Header />}></Route>
      <Route exact path='/about' element={< JobListing />}></Route>
<Routes>
      <Route exact path='/contact' element={< JobDetails />}></Route>
</Routes>

</Router> */}
<BrowserRouter>
      <Header />
      {/* <div className="container mt-2" style={{ marginTop: 40 }}> */}
        <Routes>
          <Route exact path="/" element={<JobListing />}></Route>
          <Route path="/contact" element={< JobDetails />}></Route>
        </Routes>
      {/* </div> */}
    </BrowserRouter>
</>

  );
}

export default App;

