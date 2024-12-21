// possiamo importare fragment e usarlo
import { Fragment } from "react";
// ma in realtà se usiamo la sintassi <> in automatico le empty brackets verranno compilate come fragments
//import { MouseEvent } from "react";
import { useState } from "react";

// fa da @dataclass python
interface Props {
    items: string[];
    heading: string;
}

function ListGroup({ items, heading }: Props) {
    
    const [selectedIndex, setSelectedIndex] = useState(-1);

    // in jsx non abbiamo i for loop per cui dobbiamo usare .map()
    // equivalente di for item in items...
    // items.map((item) => (<li>{item}</li>))
    // il ? è l'if statement

    return (
        // con react ogni componente può restituire un solo elemento
        // se vogliamo mettere un Header a questa lista dobbiamo inserire tutto in un div
        // a questo punto entra pero in gioco il fragment di react <>
        <>
            <h1>{heading}</h1>
            {items.length === 0 && <p>No item found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li 
                    className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                    key={item} 
                    onClick={() => { setSelectedIndex(index);}} 
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
    // la key serve ad indentificare univocamente ogni elemento della lista
    // questo per il discorso che react tramite virtual dom aggiorna solo la roba specifica da modificare
    // senza la chiave non potrebbe identificare la cosa specifica da aggiornare
    // le {} ci permettono di inserire codice
    // il && è l'if statement ed è un modo conciso che viene speso usato dai react dev
    // se la condizione è vera allora restituisci il secondo operando, altrimenti non restituisci niente

}

export default ListGroup;