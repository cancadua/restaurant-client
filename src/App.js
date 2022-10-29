import "./App.css"

const App = () => {

    useEffect(() => {(async () => {
        try {
            const res = await request<Message[]>('http://localhost:8080/api/rooms');
            setMessages(res.reverse())
        } catch (error) {
        }
    })()
    }, []);

  return (
    <div>
        <div className="navbar">
            <div className={'navbar-left'}>
                <button>About</button>
                <button>Projects</button>
                <button>Contact</button>
            </div>
        </div>
      <div>
          <>
              {messages?.map((, i) => {
                  return (
                      <MessageComponent key={i} {...message}/>
                  )})}
          </>

      </div>
    </div>
  );
}

export default App;
