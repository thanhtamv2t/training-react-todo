import React from 'react'
import "./style.scss"

class Input extends React.Component{
    render(){

        const { className, ...props } = this.props;

        const finalClassName = `input-custom ${className}`

        return(
            <input className={finalClassName} {...props}/>
        )
    }
}

export default Input