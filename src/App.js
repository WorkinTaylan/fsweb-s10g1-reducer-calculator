import React, {useReducer} from 'react';
import reducer from './reducers';
import { initialState } from './reducers';
import {addOne, applyNumber,changeOperation } from './actions';
import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

/* - [ ] Argüman olarak bir sayı alan ve `applyNumber` ı ekleyen bir event handler oluşturun.
- [ ] Bu eventhandlerı 1 butonunun onClick'ine argümanına 1 vererek aktarın. (Şunu unutmayın click handlera bir fonksiyon aktarıyoruz, fonksiyonu çalıştırmıyoruz)
- [ ] Hala 1 butonuna basıldığında totali 1 artırıp ekrana yazdırıp yazdırmadığını test edin.
- [ ] Yeni event handlerınızı gerekli değerleri vererek tek tek diğer butonlara da bağlayın.
- [ ] Tüm butonlara tek tek tıklandığında totale doğru değerleri ekleyip eklemediğini test edin.
*/

function App() {
  const [state, dispatch]=useReducer(reducer, initialState);
  //console.log("stateler burda", initialState)


  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">

            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation"><b>Operation:</b>{state.operation}</span>
              <span id="memory"><b>Memory:</b>{state.memory}</span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} />
              <CalcButton value={"MR"} />
              <CalcButton value={"MC"} />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={(e)=>{dispatch(applyNumber(1))}}/*onClick={()=>{dispatch(addOne())}}*//>
              <CalcButton value={2} onClick={(e)=>{dispatch(applyNumber(2))}}/>
              <CalcButton value={3} onClick={(e)=>{dispatch(applyNumber(3))}}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={(e)=>{dispatch(applyNumber(4))}}/>
              <CalcButton value={5} onClick={(e)=>{dispatch(applyNumber(5))}}/>
              <CalcButton value={6} onClick={(e)=>{dispatch(applyNumber(6))}}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={()=>{dispatch(applyNumber(7))}}/>
              <CalcButton value={8} onClick={()=>{dispatch(applyNumber(8))}}/>
              <CalcButton value={9} onClick={()=>{dispatch(applyNumber(9))}}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={()=>{dispatch(changeOperation('+'))}} />
              <CalcButton value={"*"} onClick={()=>{dispatch(changeOperation('*'))}}/>
              <CalcButton value={"-"} onClick={()=>{dispatch(changeOperation('-'))}}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
