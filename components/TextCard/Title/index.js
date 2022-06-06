import React from 'react';

const Title =(props)=>{
    const {text}=props

return <p style={{fontSize:30}}>{text}</p>
}

export default React.memo(Title)