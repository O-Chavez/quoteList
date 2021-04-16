/** Your working area*/

// class ClassView extends React.Component{
//     render(){
//         return(<h1>Quotes Challenge</h1>)
//     }
// }

const FunctionView = function(){
    // you can access hooks by Refering to the React object, for example const [state,setState] = React.useState

    const [data, setData] = React.useState([]);
    const [userName, setUserName] = React.useState("Elmo");
    const [quote, setQuote] = React.useState();

    const [ editName, setEditName] = React.useState();
    const [ editContent, setEditContent] = React.useState();

    const mainStyle = {
        // backgroundColor: 'red',
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        a: "center",
        justifyContent: "center"
    }

    const quoteStyle = {
        backgroundColor: "#0066a6",
        color: "white",
        // display: "flex",
        // flexDirection: "row",
        border: "1px solid blue",
        margin: '1rem',
        padding: '1rem',
        borderRadius: "15px"
    }

    const quoteInfo = {
        // backgroundColor: "white",
        color: "white",
        display: "flex",
        flexDirection: "row",
        margin: ".5rem 0 .5rem 0",
        justifyContent: "space-between",
        flex: "1"
    }

    React.useEffect(() => {
        fetch('./data.json')
            .then(response => {
                if(response.ok) {
                    return response.json();
                }
                throw response
            })
            .then (data => {
                setData(data.reverse());
            })
    }, [])


    const handlePost = (e) => {
        e.preventDefault();
        setData([{
            quoteId: ((data.length + 1).toString()),
            userName,
            content: quote,
            timestamp: new Date().toISOString()
        }, ...data])
        setUserName("Elmo");
        setQuote("");
        document.getElementById("quoteInput").reset();
    }

    const handleEdit = (quoteEdit) => {
        setEditContent(quoteEdit.content);
        setUserName(quoteEdit.userName);

        // setUserName();
        setQuote();
        // get index of current quote and update data.

        
    }
    

console.log(data);
// console.log(data.find("userName" === "Elmo"));


    return(
        <div style={mainStyle}>
            <h1>Quotes Challenge</h1>
            <form id="quoteInput">
                <label htmlFor="userName">UserName: </label>
                <input 
                    type="text" 
                    id="userName" 
                    name="userName" 
                    placeholder="Elmo" 
                    onChange={e => setUserName(e.target.value)} />

                <label htmlFor="quote">Quote: </label>
                <input 
                    type="text" 
                    id="quote" 
                    name="quote" 
                    placeholder="Quote" 
                    onChange={e => setQuote(e.target.value)} />

                <button onClick={e => handlePost(e)}>Add a quote!</button>
            </form>
                <h2>List of quotes</h2>
                {data.map(quote => 
                    <div style={quoteStyle} key={quote.quoteId}>
                        <div 
                            className="quoteContent">
                           <h3>{quote.content}</h3> 
                        </div>
                        <div style={quoteInfo} >
                            Written by {quote.userName} at {quote.timestamp}
                            <button>Edit</button>
                        </div> 
                    </div>
                )}
        </div>
        );
};


/** Not working area*/
const App = React.createElement(FunctionView);
ReactDOM.render(
    App,
    document.getElementById('root')
  );