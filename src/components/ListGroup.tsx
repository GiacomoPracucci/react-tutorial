import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void; // onClick
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

// APPUNTI

// possiamo importare fragment e usarlo
// import { Fragment } from "react";
// ma in realtà se usiamo la sintassi <> in automatico le empty brackets verranno compilate come fragments

// la interface props fa da @dataclass python
// (item: string) => void è una funzione che prende una stringa e non restituisce niente

// in jsx non abbiamo i for loop per cui dobbiamo usare .map()
// equivalente di for item in items...
// items.map((item) => (<li>{item}</li>))
// il ? è l'if statement

// con react ogni componente può restituire un solo elemento
// se vogliamo mettere un Header a questa lista dobbiamo inserire tutto in un div
// a questo punto entra pero in gioco il fragment di react <>

// la key serve ad indentificare univocamente ogni elemento della lista
// questo per il discorso che react tramite virtual dom aggiorna solo la roba specifica da modificare
// senza la chiave non potrebbe identificare la cosa specifica da aggiornare
// le {} ci permettono di inserire codice
// il && è l'if statement ed è un modo conciso che viene speso usato dai react dev
// se la condizione è vera allora restituisci il secondo operando, altrimenti non restituisci niente

// props è l'input passato a un componente, mentre state è il dato gestito da un componente
// props sono simili ai parametri di una funzione e vanno trattati come immutabili, mentre state è simile a una variabile locale che cambia nel tempo
// l'idea è: cambia lo stato (il dato) --> ri-renderizzo il componente e aggiorno il DOM
