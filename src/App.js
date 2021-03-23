import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';
import {Add, Sub, Div, Mul} from './Calc';
import Card from './Card';
import Sdata from './Sdata';
import SlotM from './SlotM';
import HookUse from './HookUse';
import Time from './Time';
import Bg from './Bg'
import Form from './Form';
import Todo from './Todo';
import IncDec from './IncDec';

function App() {
  return (
    <> 
    <div>
     <ul>
       <li>{Add(4,5)}</li>
       <li>{Sub(4,5)}</li>
       <li>{Mul(4,5)}</li>
       <li>{Div(4,5)}</li>
     </ul>
    </div>

     <div>
       {Sdata.map((val)=>{ //fat arrowfunction
         return(
           <Card 
           imgSrc={val.imgSrc}
           title={val.title}
           />
         )
       })}
     </div>
     <div>
       <SlotM 
       x="v" 
       y="v"
       z="v" />
     </div>

     <div>
       <HookUse />
     </div>
     <div>
       <Time />
     </div>
     <div>
       <Bg />
     </div>
     <div>
       <Form />
     </div>
    <div>
      <Todo />
    </div>

    <div>
      <IncDec />
    </div>
    </>
  );
}

export default App;
