
import Chai from "./chai";

function App (){

        const username = "chai aur code";

    return(
        <>
        <Chai/>
        <h2>chai is getting drinked</h2>
        <h1>chai and {username}</h1> 
        </>

    )
}
 
export default App;

// here this {username} is an evaluated js value we can not give js operations here like eg. if else or for loop.