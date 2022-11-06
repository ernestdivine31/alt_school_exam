import './App.css';
import Navigation from './Components/Navigation/Navigation';
import {Routes,Route} from 'react-router-dom'
import Counter from './Pages/Counter/Counter';
import Reducer from './Pages/ReducerPage/Reducer';
import Boundary from './Pages/ErrorBoundary/Boundary';
import PageNotFound from './Pages/404Page/404';


function App() {
    return ( 
    <>
        <Navigation/>
        <Routes>
        <Route path = '/'element = { <Counter/> }></Route>
        <Route path = '/custom_hook'element = { <Counter/> }></Route>
        <Route path = '/reducer'element = { <Reducer/> }></Route>
        <Route path = '/reducer'element = { <Boundary/> }></Route>
        <Route path = '*'element = { <PageNotFound/> }>
       </Route> 
        </Routes>
</>


    );
}

export default App;