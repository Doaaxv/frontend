import React, { Component, useRef, useEffect , useState} from 'react';


const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   
const useMountEffect = (fun) => useEffect(fun, [])

export const Try = () => {

  const [showText, setShowText] = useState(false); 
    const myRef = useRef(null)

	// useMountEffect(() => scrollToRef(myRef)) // Scroll on mount
 
    return (
        <> {/* React.Fragment*/}
        <div style={{height:600}} />	{/* just to demonstrate scroll*/}
       
        <button onClick={()=>scrollToRef(myRef)} >Click to scroll </button> 
       
        <div style={{height:1500}} />	
        <div ref={myRef}>I wanna be seen</div> 
        


      
        
       
      </>
    )
 }
 export default Try;