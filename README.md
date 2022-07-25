### Configuraciones

# Rutas

*Importar react-router-dom* 
(npm install react-router-dom)

*Editar app.js*

*Importar Routers y Route desde react-router-dom* 
import { Routes, Route, Link } from "react-router-dom"

*Borrar todo el return y anadir las rutas al return*
    <Routes>
        <Route...>
    </Routes>

*Modificar index.js para incluir react-router-dom* 
import { BrowserRouter } from "react-router-dom"

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
