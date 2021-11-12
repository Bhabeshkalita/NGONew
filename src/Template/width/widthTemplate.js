import * as React from "react";
import * as style from './fixWidth.module.scss';

const FixWidth = ({children}) => {
    return(
        <div className={style.width}>
            {children}
        </div>
    )
}

export default FixWidth ;