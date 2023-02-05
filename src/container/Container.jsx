import React from "react";
import { useState, useRef } from "react";

import CalcContent from "../content/CalcContent";

export default function Container() {
    const [col1, setCol1] = useState('')
    const [col2, setCol2] = useState('')
    const [symbol, setSymbol] = useState('')

    const [toThankState, setToThankState] = useState('toThankClass')
    const [calcState, setCalcState] = useState('calcClass')

    const input1 = useRef()
    const input2 = useRef()

    return(
        <>
        
        <div className="containerClass">
            <div className="introClass">
            <h1>"A matemática é a poesia dos números, traduzindo a beleza da lógica em equações e teoremas eternos."</h1>
            </div>

            <CalcContent col1={col1} setCol1={setCol1} col2={col2} setCol2={setCol2} symbol={symbol} setSymbol={setSymbol} setToThankState={setToThankState} calcState={calcState} setCalcState={setCalcState} input1={input1} input2={input2} />

            <div className={toThankState}>
                <h2>"É a língua universal da ciência"</h2>
            </div>
        </div>
           
        </>
    )
}