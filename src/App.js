import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import ProtectedRoute from './Pages/ProtectedRoute';
import { UserAuthContextProvider } from './components/context/UserAuthContext';

function App() {
  return (
    <UserAuthContextProvider>
      <Routes>
        <Route path='/home' element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute> }/>
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<Login /> } />
      </Routes>
    </UserAuthContextProvider>
  );
}

export default App;
