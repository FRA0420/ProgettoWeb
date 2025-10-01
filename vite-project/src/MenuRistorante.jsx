import piatti from "./piatti";

const MenuRistorante = () => {
    return (
        <div>
            <ul>
                {piatti.map((piatto) => (
                    <li key={piatto.id}>{piatto.nome} - <strong>{piatto.prezzo}</strong></li>
                ))}
            </ul>
        </div>
    )
};

export default MenuRistorante;