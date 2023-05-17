import Button from "./Button";
import { GoBell, GoCloudDownload } from "react-icons/go";

function App() {
    return (
        <div>
            <div>
                <Button primary rounded>
                    <GoBell />
                    Click Me!
                </Button>
            </div>
            <div>
                <Button primary>
                    <GoCloudDownload />
                    Buy Now!
                </Button>
            </div>
            <div>
                <Button success outline>
                    See Deal!
                </Button>
            </div>
            <div>
                <Button warning outline>
                    Hide Ads!
                </Button>
            </div>
            <div>
                <Button></Button>
            </div>
            <div>
                <Button></Button>
            </div>
            <div>
                <Button></Button>
            </div>
        </div>
    );
}

export default App;
