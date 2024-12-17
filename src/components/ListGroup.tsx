function ListGroup() {
    return (
        // con react ogni componente può restituire un solo elemento
        // se vogliamo mettere un Header a questa lista dobbiamo inserire tutto in un div
        <div>
            <h1>List</h1>
            <ul className="list-group">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
                <li className="list-group-item">A fourth item</li>
                <li className="list-group-item">And a fifth one</li>
            </ul>
        </div>
    );
}

export default ListGroup;