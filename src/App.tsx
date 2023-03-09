import { isDev, isPrd } from "./utils/mode";

function App() {
    return (
        <div className="App">
            현재 여기는 {isPrd() ? `상용` : `개발`}입니다
            <br />
            <br />
            개발이면 vite 이미지가 보이고
            <br />
            상용이면 react 이미지가 보여요
            <img src={isDev() ? `/images/vite.svg` : `/images/react.svg`} />
        </div>
    );
}

export default App;
