// Importamos React y el hook useState desde la biblioteca de React
import React, {useState} from 'react'

// Definimos un componente funcional llamado Component
export default function Component() {

    // Declaramos dos estados: text y updated, inicializados como undefined. useState retorna un par: el valor del estado actual y una función para actualizarlo
    
    // Estado para almacenar el texto ingresado
    const [text, setText] = useState()

    // Estado para almacenar el texto actualizado
    const [updated, setUpdated] = useState()

    //*enf para crear una funcion con flecha ya que tengo instalada la extension de es7*
    
    // Función para manejar el evento onChange del input
    // Se ejecuta cada vez que el usuario escribe en el campo de texto
    const textOnChange = (event) => {
        //se almacena el valor del input en el estado text
        setText(event.target.value)// Actualiza el estado 'text' con el valor ingresado
        //para despues mostrarlo en el parrafo "<p>text input: {text}</p>" llamando al estado text 
        //que esta en el input <input type="text" value={text} onChange={textOnChange} />
    }

    // Función para manejar el evento onClick del botón
    // Se ejecuta cuando el usuario hace clic en el botón "Actualizar"
    const buttonOnClick = (event) => {
        //se almacena el valor del input en el estado updated
        setUpdated(text)// Actualiza el estado 'updated' con el valor actual de 'text'
        //para despues mostrarlo en el parrafo "<p>texto actualizado: {updated}</p>" llamando al estado updated
    }

    // El componente retorna el JSX que define la estructura visual
  return (
    <div>
        <input type="text" value={text} onChange={textOnChange} />
        <button onClick={buttonOnClick}>Actualizar</button>
        <p>text input: {text}</p>
        <p>texto actualizado: {updated}</p>
    </div>
  )
}