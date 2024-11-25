import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import RootLayout from './layout/RootLayout';
import Login from './components/Login';
import Player from './components/Player';

// Router-ni yaratish
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='/player/:id' element={<Player />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;


// import React from 'react'
// import Login from './components/Login'

// function App() {
//   return (
//     <div>

//       <Login />
//     </div>
//   )
// }

// export default App