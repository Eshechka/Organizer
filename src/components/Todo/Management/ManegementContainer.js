import { connect } from "react-redux"
import Management from "./Management"


let mapStateToProps=(state)=>{
    return{
        title: state.todoPage.valueTitle,
        start: state.todoPage.valueDateStart,
        end: state.todoPage.valueDateEnd,
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        changeTitle:(e)=>{
                dispatch({type:'CHANGE_TITLE', value: e.target.value})
        },
        changeDateStart:(e)=>{
            dispatch({type:'CHANGE_DATE_START', value: e.target.value})
        },
        changeDateEnd:(e)=>{
            dispatch({type:'CHANGE_DATE_END', value: e.target.value})
        },
        
        click:()=>{
            dispatch({type:'DELETE_TODO'})
        },
        window:()=>{
            dispatch({type:'WINDOW_OPEN'})
        }
    }
}

let ManagementContainer=connect(mapStateToProps,mapDispatchToProps)(Management)
export default ManagementContainer
