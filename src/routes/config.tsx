import {Routes, Route} from 'react-router-dom';
import { routesConfig } from './Routestype';

// sdsadasd

export const AppRoutes = (
    <Routes>
        {routesConfig.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
        ))}
        <Route path={"*"} element={<h1>Not Found</h1>} />
    </Routes>
);

