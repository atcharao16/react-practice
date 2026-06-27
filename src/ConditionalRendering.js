
const isAdmin = false;
const fruits = [{key : 1, item : 'Apple'},{key : 2, item : 'Banana'},{key : 3, item : 'Cherry'},{key : 4, item : 'DragonFruit'},{key : 5, item : 'Orange'}];
function Rendering(){

    return(
        <>
        {isAdmin ? <h3>Hello.. I am Admin</h3> : <h3>Hello... I am User</h3>}
        <ul style = {{'list-style':"none", padding : "2px"}}>
            {fruits.map(fruit => {
            if(fruit.key % 2 === 0)
                return <li key = {fruit.key} className="gray pd-2px mr-4px">{fruit.item}</li>
            else 
                return <li key = {fruit.key} className="aqua pd-2px mr-4px">{fruit.item}</li>
        })}
        </ul>
        </>
    )
}

export default Rendering;