
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import { Portfolio } from "./components/portfolio/portfolio";
import { Skills } from "./components/skills/skills";
function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Portfolio />} />
                <Route path="/Skills" element={<Skills />} />
            </Route>
            <Route path="*" element={<Layout />} />
        </Routes>
    );
}





export default App;
