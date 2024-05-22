import { useState } from 'react'
import confetti from 'canvas-confetti'



import { Square } from './components/Square.jsx'
import { TURNS } from './constants.js'
import { checkWinnerFrom } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'
import { Tablero } from './components/Tablero.jsx'
import { checkEndGame } from  './logic/board.js'

function App() {
  console.log("render")
  
  const [board, setBoard] = useState( () =>{
    console.log("Inicializar estado del board")
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })
  
  const [turn, setTurn] = useState( () =>{
    const turnsFromStorage = window.localStorage.getItem('turn');
    return turnsFromStorage ?? TURNS.X
  })

  // null es que no hay ganador, false es que hay un empate
  const [winner, setWinner] = useState(null)

  const resetGame = () =>{
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X)
    setWinner(null)

    window.localStorage.removeItem('board');
    window.localStorage.removeItem('turn');
  }

  const updateBoard = (index) =>{
    // No actualizamos esta posición, si ya tiene algo
    if(board[index] || winner) return

    // Actualizamos el board con el valor actual de turn
    const newBoard = [ ... board]
    newBoard[index] = turn // x u o
    setBoard(newBoard)

    // Cambiamos el turno
    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn);

    // Guardar partida
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)

    // Revosar si hay ganador
    const newWinner = checkWinnerFrom(newBoard)

    if(newWinner){
      confetti()
      setWinner(newWinner)
    } else if(checkEndGame(newBoard)){
      setWinner(false) // empate
    }
  }

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset del juego</button>

      <Tablero board={board} updateBoard={updateBoard} />

      <section className="turn">
        <Square isSelected ={turn === TURNS.X}>
          {TURNS.X}
          </Square>
        <Square isSelected ={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

        <WinnerModal resetGame={resetGame} winner={winner} />
      
    </main>
  )
}

export default App
