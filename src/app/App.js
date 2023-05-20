import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';
import Home from '../pages/Home';
import Error from '../pages/Error';
import Profile from '../pages/Profile';
import Login from '../pages/Login';

const router = createBrowserRouter(createRoutesFromElements([
    <Route path='/' Component={Home}>
        <Route path='login' Component={Login}/>
        <Route path='profile' Component={Profile}/>
    </Route>,
    <Route path='/*' Component={Error}></Route>
]))

const App = () => {
    return <RouterProvider router={router}/>
}

export default App;