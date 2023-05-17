import Button from "../components/Button";
import { GoBell, GoCloudDownload } from "react-icons/go";

function ButtonPage() {
    const handleClick = () => {
        console.log("clicked");
    };

    return (
        <div>
            <div>
                <Button primary rounded onClick={handleClick}>
                    <GoBell />
                    Click Me!
                </Button>
            </div>
            <div>
                <Button primary onMouseEnter={handleClick}>
                    <GoCloudDownload />
                    Buy Now!
                </Button>
            </div>
            <div>
                <Button success outline onClick={handleClick}>
                    See Deal!
                </Button>
            </div>
            <div>
                <Button warning outline>
                    Hide Ads!
                </Button>
            </div>
        </div>
    );
}

export default ButtonPage;
