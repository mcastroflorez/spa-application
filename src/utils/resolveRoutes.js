import Error404 from "../pages/Error404";

const resolveRoutes = (route) => {
    if (route.length <= 3) {
        let validRoute = route === '/' ? route  : ':id';
        return validRoute 
    }

    return `${route}`
}

export default resolveRoutes;