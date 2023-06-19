import Header from "../templates/Header";
import Character from "../pages/Character";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";
import About from "../pages/About";

const routes = {
    '/': Home,
    ':id': Character,
    'about': About
};

const router = async () => {
    const header = null ||document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = await Header()
    console.log('cambio de hash')

    let hash = await getHash();
    console.log('este es el hash ' + hash)
    let route = await resolveRoutes(hash)
    console.log(`este es route ${route}`)
    let render = routes[route] ? routes[route] : Error404
    console.log(render())
    

    content.innerHTML = await render();

};

export default router;