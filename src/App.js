import React from "react";
import Template from "./Templates/2/Template";
import Template3 from "./Templates/3/Template3";
import Template4 from "./Templates/4/Template4";
import Template5 from "./Templates/5/Template5";
import Template6 from "./Templates/6/Template6";
import Template7 from "./Templates/7/Template7";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Linking from "./Linking";

function App() {
  return (<><Linking />
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Template />} >
        </Route>
      </Routes>

      <Routes>
        <Route exact path="/template2" element={<Template7 />} >
        </Route>
      </Routes>

      <Routes>
        <Route exact path="/template3" element={<Template3 />} >
        </Route>
      </Routes>

      <Routes>
        <Route exact path="/template4" element={<Template4 />} >
        </Route>
      </Routes>

      <Routes>
        <Route exact path="/template5" element={<Template5 />} >
        </Route>
      </Routes>

      <Routes>
        <Route exact path="/template6" element={<Template6 />} >
        </Route>
      </Routes>

    </BrowserRouter>
  </>
  )
}

export default App;