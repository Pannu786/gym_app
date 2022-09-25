import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import ExerciseDetail from './pages/ExcerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Box width='400' sx={{ width: { xl: '1488px' } }} m='auto'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/exercise/:id' element={<ExerciseDetail />}></Route>
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
