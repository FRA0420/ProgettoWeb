    const elementRoot = document.getElementById("root");
    const root = ReactDOM.createRoot(elementRoot);

    const App=()=>{
        return (
            <main className="main">
                <h1>Primo componente App</h1>
                </main>
        )

    }

    root.render(
        <App></App>
    )