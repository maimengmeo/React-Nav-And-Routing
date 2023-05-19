import Route from "./components/Route";
import AccodionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import ButtonPage from "./pages/ButtonPage";
import Sidebar from "./components/Sidebar";

function App() {
    return (
        <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
            <Sidebar />

            <div className="col-span-5">
                <Route path="/accordion">
                    <AccodionPage />
                </Route>
                <Route path="/">
                    <DropdownPage />
                </Route>
                <Route path="/buttons">
                    <ButtonPage />
                </Route>
            </div>
        </div>
    );
}

export default App;
