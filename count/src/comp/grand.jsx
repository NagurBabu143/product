import Count from "./count"
import Mess from "./mess"

function Grand ({count,message}){
    return(
        <div>
            <Mess message={message}/>
            <Count count={count}/>
        </div>
    )
}
export default Grand