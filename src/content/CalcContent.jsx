import React from "react";

import { itIsNaN } from "../util/itIsNaN";
import { handChangeSymbol } from "../util/onlySymbols";
import { targetNumber, blurIfSameNumber } from '../util/targetNumber'
import { toThank } from '../util/toThank'

export default function CalcContent({col1, setCol1, col2, setCol2, symbol, setSymbol, setToThankState, calcState, setCalcState, input1, input2}) {


    return(
        <>
        <div className={calcState}>

            <input type="text" value={col1} onChange={e => targetNumber(e.target, setCol1, input2.current)} maxLength={1} ref={input1} onFocus={e => e.target.select()} onKeyDown={e => blurIfSameNumber(e, col1)} autoFocus />
            
            <input type="symbol" value={symbol === '' ? setSymbol('+') : symbol} onChange={e => handChangeSymbol(e, setSymbol)} className='symbolClass'/>

            <input type="text" value={col2} onChange={e => targetNumber(e.target, setCol2, input1.current)} maxLength={1} ref={input2} onFocus={e => e.target.select()} onKeyDown={e => blurIfSameNumber(e, col2)} />
            {/* onBlur={(e) => e.target.value === '' ? console.log('sim') : console.log('não')} */}

            <p>=</p>

            <div className="resultClass">
            <p>{toThank(itIsNaN(col1, col2, symbol), setToThankState, setCalcState)}</p>
            {/* <p>{col1+col2}</p> */}
            </div>

        </div>
        </>
    )
}