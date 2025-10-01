    const elementRoot = document.getElementById("root");
    const root = ReactDOM.createRoot(elementRoot);

    const App=({children})=>{
        return (
            <main className="main">
                <h1>Primo componente App</h1>
                {children}
                </main>
        )

    }

    const List=()=>{
        return (
            <ul>
                <li>PHP</li>
                <li>JS</li>
                <li>Python</li>
            </ul>
        )

    }

    root.render(
        <>
        <App>
        <h2>Lista competenze</h2>
        <List></List>
        </App>
        </>
    )