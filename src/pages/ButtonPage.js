import Button from "../components/Button";
import { GoHome, GoBell, GoHeart, GoSearch } from "react-icons/go";

function ButtonPage() {
    const handleClick = () => {
        console.log("clicked");
    };

    return (
        <div>
            <div>
                <Button primary rounded onClick={handleClick}>
                    <GoBell />
                    Notification
                </Button>
            </div>
            <div>
                <Button danger onMouseEnter={handleClick}>
                    <GoHeart />
                    Favorite
                </Button>
            </div>
            <div>
                <Button success outline onClick={handleClick}>
                    <GoHome />
                    Home
                </Button>
            </div>
            <div>
                <Button warning outline>
                    <GoSearch />
                    Search
                </Button>
            </div>
        </div>
    );
}

export default ButtonPage;
