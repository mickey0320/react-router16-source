import { useLayoutEffect, useRef, useState } from "react";
import { createBrowserHistory, createHashHistory } from "history";

import { Router } from "../react-router";

export * from "../react-router";

function BrowserRouter({ children }) {
  const browserRef = useRef();
  if (!browserRef.current) {
    browserRef.current = createBrowserHistory();
  }
  const history = browserRef.current;
  const [state, setState] = useState({
    location: history.location,
    action: history.action,
  });

  useLayoutEffect(() => {
    history.listen(setState);
  }, []);

  return (
    <Router
      navigator={history}
      location={state.location}
      navigationType={state.action}
    >
      {children}
    </Router>
  );
}

function HashRouter({ children }) {
  const hashRef = useRef();
  if (!hashRef.current) {
    hashRef.current = createHashHistory();
  }
  const history = hashRef.current;
  const [state, setState] = useState({
    location: history.location,
    action: history.action,
  });

  useLayoutEffect(() => {
    history.listen(setState);
  }, []);

  return (
    <Router
      navigator={history}
      location={state.location}
      navigationType={state.action}
    >
      {children}
    </Router>
  );
}

export { BrowserRouter, HashRouter };
