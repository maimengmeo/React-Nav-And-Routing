import Button from "./Button";

function App() {
    return (
        <div>
            <div>
                <Button primary rounded>
                    Click Me!
                </Button>
            </div>
            <div>
                <Button primary>Buy Now!</Button>
            </div>
            <div>
                <Button success outline>
                    See Deal!
                </Button>
            </div>
            <div>
                <Button warning>Hide Ads!</Button>
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
