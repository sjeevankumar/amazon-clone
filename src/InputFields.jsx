import React from "react";

const InputFields=(props)=>{
      return(<>
                  <h3>{props.heading}</h3>
                  <input  type="text" placeholder={props.place} />
             </>
            );
}
export default InputFields;
