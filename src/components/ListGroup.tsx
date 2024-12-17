// possiamo importare fragment e usarlo
import { Fragment } from "react";
// ma in realtà se usiamo la sintassi <> in automatico le empty brackets verranno compilate come fragments


function ListGroup() {
    let items = [
        'New York',
        'Tokyo',
        'London',
        'Rome',
        'Savgnin'
    ]
    items= [];

    const getMessage = () => {
        return items.length === 0 ? <p>No item found</p> : null;
    }

    // in jsx non abbiamo i for loop per cui dobbiamo usare .map()
    // equivalente di for item in items...
    // items.map((item) => (<li>{item}</li>))
    // il ? è l'if statement

    return (
        // con react ogni componente può restituire un solo elemento
        // se vogliamo mettere un Header a questa lista dobbiamo inserire tutto in un div
        // a questo punto entra pero in gioco il fragment di react <>
        <>
            <h1>List</h1>
            {getMessage()}
            <ul className="list-group">
                {items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </>
    );
    // la key serve ad indentificare univocamente ogni elemento della lista
    // questo per il discorso che react tramite virtual dom aggiorna solo la roba specifica da modificare
    // senza la chiave non potrebbe identificare la cosa specifica da aggiornare
    // le {} ci permettono di inserire codice

}

export default ListGroup;