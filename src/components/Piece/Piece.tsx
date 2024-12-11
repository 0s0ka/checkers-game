import s from './Piece.module.scss'

// pieces types
type PieceType = "white" | "black";

// piece component
const Piece: React.FC<{ color: PieceType}> = ({color}) => {
    return (
        <div className={`${color === "white" ? s.white : s.black}`}/>
    )
}

export default Piece;