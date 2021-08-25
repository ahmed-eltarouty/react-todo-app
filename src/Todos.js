import React, { useEffect, useRef, useState } from 'react'
import { BsFillArchiveFill } from "react-icons/bs";
function Todos() {
    const [todo , setTodo]= useState([])
    const [input, setinput] = useState("")
    const inref = useRef("")

    const handelTodo =(e) =>{
        e.preventDefault();
        inref.current.value !=="" && !todo.includes(inref.current.value) ?
        setTodo([...todo , input]) :  setTodo([...todo])
        setinput("")

    }
    
    useEffect(() => {
        inref.current.focus()
    }, [todo])

    const deletetodo =(e)=>{
        let deltodo=e.index
        deletetodo &&
        setTodo(todo.filter((ele,ins)=> ins !== deltodo))
    }

    const updateHandel =(e) =>{
        let text = e.text
        inref.current.value = text
    }

    return (
        <div>
                {todo.map((text,index) =>{
                    return(
                        <div key={index}>
                        <h2 className="item" onClick={()=>updateHandel({text})}>{text}</h2>
                        <BsFillArchiveFill  onClick={()=>deletetodo({index})}/>
                    </div>
                    )
                })}
            <form>
                <input ref={inref} value={input} onChange={e=>setinput(e.target.value)} />
                <button type="submit" onClick={handelTodo}>add</button>
            </form>
        </div>
    )
}

export default Todos
