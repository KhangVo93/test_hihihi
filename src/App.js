import HeaderComponent from "./components/header/HeaderComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import FooterComponent from "./components/footer/FooterComponent";
import ContentComponent from "./components/content/ContentComponent";
import useWindowDimensions from './useWindowDimension'
function App() {

  const { height, width } = useWindowDimensions();
  return (

    <div style={{ width: width, height: height }}>
      <HeaderComponent />
      <ContentComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
