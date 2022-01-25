import React from "react";
const NavigationContext = React.createContext();
const LocationContext = React.createContext();

function useLocation() {
  return React.useContext(LocationContext).location;
}

function useRoutes(routes) {
  const location = useLocation();
  const pathname = location.pathname || "/";
  for (let i = 0; i < routes.length; i++) {
    const { path, element } = routes[i];
    const match = matchPath(path, pathname);
    if (match) {
      return element;
    }
  }
}

function matchPath(path, pathname) {
  const reg = compilePath(path);
  if (pathname.match(reg)) {
    return true;
  }
  return false;
}

function compilePath(path) {
  const regStr = `^${path}$`;

  return new RegExp(regStr);
}

function createRoutesFromChildren(children) {
  const routes = [];
  children.forEach((child) => {
    const route = {
      path: child.props.path,
      element: child.props.element,
    };
    routes.push(route);
  });

  return routes;
}

function Router({ location, navigator, children }) {
  return (
    <NavigationContext.Provider value={{ navigator }}>
      <LocationContext.Provider value={{ location }}>
        {children}
      </LocationContext.Provider>
    </NavigationContext.Provider>
  );
}

function Routes({ children }) {
  return useRoutes(createRoutesFromChildren(children));
}

function Route() {}

export { Router, Routes, Route };
