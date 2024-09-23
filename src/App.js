import logo from "./logo.svg";
import "./App.css";
import Counter from "./CounterApp";
import Header from "./component/header/Header";
// import Hooks from "./component/hooks/Hooks.js"
import MuiStyle from "./component/mui/muiStyle";
import ComA from "./component/context/component/ComA";
import UseStateLearn from "./component/state/UseStateLearn";
import MapLearn from "./component/mapLearn/MapLearn";
import UseStateObj from "./component/useStateObj/UseStateObj";
import ShortOrAnd from "./component/shortCirEvl/ShortOrAnd";
import Forms from "./component/forms/Forms";
import UseEffect from "./component/useEffect/useEffect";
import UseEffectOne from "./component/useEffect/useEffectOne";
import UseEffectApi from "./component/useEffect/UseEffectApi";
import UseRef from "./component/useRef/useRef";
import UseReducer from "./component/useReducer/UseReducer";
import MainFile from "./component/customHook/mainFile";
import Nav from "./component/useLocation/navbar/Nav";
import Routering from "./component/useLocation/navbar/Routering";

const handlerForm = () => {
  alert("clicked on me");
};

const handlerSubmit = (e) => {
  e.preventDefault();
  console.log("you clicked Submitted");
};

const unreadMessages = [
  {
    id: "1",
    message: "this one message",
  },
  {
    id: "2",
    message: "this 2 message",
  },
];

const items = [
  {
    id: "1",
    name: "John Doe",
    message: "Hello, how are you John?",
  },
  {
    id: "2",
    name: "Andrew",
    message: "Hello, how are you Andrew?",
  },
  {
    id: "3",
    name: "Zimer",
    message: "Hello, how are you Zimer?",
  },
];

const user = {
  name: "John Doe",
  age: 30,
  email: "johndoe@example.com",
};

function App() {
  const count = 10;
  return (
    <>
      <div className="">
        {/* <Header /> */}
        {/* <MuiStyle /> */}
        {/* <Hooks /> */}
        {/* <ComA />
         */}

        {/* <UseStateLearn />
        
        */}

        {/* <MapLearn /> */}

        {/* <UseStateObj /> */}
        {/* 
        <ShortOrAnd /> */}

        {/* <Forms /> */}

        {/* <UseEffect /> */}

        {/* <UseEffectOne /> */}

        {/* <UseEffectApi /> */}

        {/* <UseRef /> */}

        {/* <UseReducer /> */}

        {/* <MainFile /> */}

        <Routering />
      </div>
    </>
  );
}

export default App;
