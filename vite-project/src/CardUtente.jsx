const CardUtente = (props) => {
    return (
        <div style={{
            border:"1px solid"
        }}>
            <img src={props.img} alt="Immagine utente"/>
            <div>{props.nome}</div>
            <div>{props.mail}</div>
        </div>
    )
}

export default CardUtente;