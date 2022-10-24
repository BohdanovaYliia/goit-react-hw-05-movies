import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import("../pages/Movies"));
const MovieInfo = lazy(() => import("../pages/MovieInfo"));

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path='movies' element={<Movies />}/>
        <Route path='movies/:movieId' element={<MovieInfo />}> 
          <Route path='cast' element={<Cast />}/>
          <Route path='reviews' element={<Reviews />}/>
        </Route>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Route>
    </Routes>
  );
};
