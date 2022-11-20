import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastProvider } from "./hooks/useToast";
import { ModalProvider } from "./hooks/useModal";

import App from "./app/App";
import GlobalStyle from "./app/GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <ToastProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </ToastProvider>
    </Router>
    <GlobalStyle />
  </React.StrictMode>
);