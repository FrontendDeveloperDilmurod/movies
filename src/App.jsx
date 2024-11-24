import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import RootLayout from './layout/RootLayout';
import Login from './components/Login';

// Router-ni yaratish
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='login' element={<Login />} />
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