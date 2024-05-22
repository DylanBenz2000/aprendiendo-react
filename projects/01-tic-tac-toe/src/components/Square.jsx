
// Se tiene un componente que ya se puede reutilizar
  export const Square = ({ children, isSelected, updateBoard, index }) => {
    const className = `square ${isSelected ? 'is-selected' : ''}`
  
    const handleClick = () => {
        // Cuando el usuario hace click, se le pasa el indice para saber en cual casilla ha hecho click, y así se podrá actualizar el board con esa info.
      updateBoard(index)
    }
  
    return (
      <div onClick={handleClick} className={className}>
        {children}
      </div>
    )
  }