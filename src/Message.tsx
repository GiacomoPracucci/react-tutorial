
// in React si usa PascalCasing per i nomi delle funzioni
function Message() {
    // sintassi JSX: Javascript XML
    // sembra html ma under the hood compila in JS
    const name = "";
    if (name)
        return <h1>Hello, {name}</h1>;
    return <h1>Hello, friend</h1>
}

export default Message;