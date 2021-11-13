import * as React from 'react' ;
import * as style from './internForm.module.scss' ;

const InternForm = () => {
    return(
        <div className={style.InternForm}>
            <iframe src="https://forms.gle/W7bVdaEdbPXwQgUB9" 
                // width="100%" height="600" 
                className={style.InternForm_iframe}
                frameborder="0" marginheight="0"
                marginwidth="0" title="registration Form">
                Loading…
            </iframe>
        </div>
    )
}

export default InternForm ;