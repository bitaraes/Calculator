import React, { useState } from 'react';
import Calc from "./calc";
import NumberBtn from './number-btn';
import DoubleBtn from './double-btn';
import Visor from "./visor";
import BtnRow from './btn-row';
import ResultBtn from './result-btn';
import BtnColumn from './btn-column';

export default function App() {
  const [visor, setVisor] = useState("");
  let currentValue = "";
  function limpar() {
    setVisor("");
  }

  function addNumber(number) {
    currentValue = visor;
    setVisor(currentValue += number);
  }

  function calcular() {
    let resultado = eval(visor);
    setVisor(resultado);
  }

  return (
    <Calc>
      <Visor value={visor} />
      <BtnColumn id="left">
        <BtnRow>
          <DoubleBtn value="C" onClick={limpar} />
          <NumberBtn value="/" onClick={(e) => addNumber(e.target.value)} />
        </BtnRow>
        <BtnRow>
          <NumberBtn value="7" onClick={(e) => addNumber(e.target.value)} />
          <NumberBtn value="8" onClick={(e) => addNumber(e.target.value)} />
          <NumberBtn value="9" onClick={(e) => addNumber(e.target.value)} />
        </BtnRow>
        <BtnRow>
          <NumberBtn value="4" onClick={(e) => addNumber(e.target.value)} />
          <NumberBtn value="5" onClick={(e) => addNumber(e.target.value)} />
          <NumberBtn value="6" onClick={(e) => addNumber(e.target.value)} />
        </BtnRow>
        <BtnRow>
          <NumberBtn value="1" onClick={(e) => addNumber(e.target.value)} />
          <NumberBtn value="2" onClick={(e) => addNumber(e.target.value)} />
          <NumberBtn value="3" onClick={(e) => addNumber(e.target.value)} />
        </BtnRow>
        <BtnRow>
          <DoubleBtn value="0" onClick={(e) => addNumber(e.target.value)} />
          <NumberBtn value="." onClick={(e) => addNumber(e.target.value)} />
        </BtnRow>
      </BtnColumn>
      <BtnColumn>
        <BtnRow>
          <NumberBtn value="*" onClick={(e) => addNumber(e.target.value)} />
        </BtnRow>
        <BtnRow>
          <NumberBtn value="-" onClick={(e) => addNumber(e.target.value)} />
        </BtnRow>
        <BtnRow>
          <NumberBtn value="+" onClick={(e) => addNumber(e.target.value)} />
        </BtnRow>
        <BtnRow>
          <ResultBtn onClick={calcular} />
        </BtnRow>
      </BtnColumn>
    </Calc>
  );
}
