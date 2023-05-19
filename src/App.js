import Link from "./components/Link";
import Route from "./components/Route";
import AccodionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";

function App() {
    return (
        <div>
            <Link to="/accordion">Go to accordion</Link>

            <div>
                <Route path="/accordion">
                    <AccodionPage />
                </Route>
            </div>
        </div>
    );
}

export default App;
