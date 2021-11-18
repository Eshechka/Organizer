import { connect } from "react-redux"
import GoalsPage from "./GoalsPage"

let mapStateToProps=(state)=>{
    return{
        valueWindow: state.goalsPage.valueWindow,
        valueTitle: state.goalsPage.valueTitle,
        valueDate: state.goalsPage.valueDate,
        valueTodo: state.goalsPage.valueTodo,
        goals: state.goalsPage.goals,
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
       changeTitle:(e)=>{
        dispatch({type:'VALUE_TITLE',
                  text: e.target.value,    
            })
       },
       changeDate:(e)=>{
        dispatch({type:'VALUE_DATE',
                  text: e.target.value,    
            })
       },
       changeTodo:(e)=>{
        dispatch({type:'VALUE_TODO',
                  text: e.target.value,    
            })
       },
       addGoals:()=>{
           let year=new Date().getFullYear()
           let month=new Date().getMonth()+1
           let day=new Date().getDate()
           let date

           if(month<10 && day<10){
           date=`${year}-0${month}-0${day}`
           }else{
                if(month<10){
                date=`${year}-0${month}-${day}`
                }else if(day<10){
                date=`${year}-${month}-0${day}`
                }else{
                    date=`${year}-${month}-${day}`
                }
           }
           dispatch({type:'ADD_GOALS',date})
       },
        openWindow:()=>{
          dispatch({type:'OPEN_WINDOW'})
        },
       dayFunction:(start,end,id)=>{
           
        let date1=new Date(start).getTime()
        let date2=new Date(end).getTime()
        let t=date2-date1
        let day=Math.floor(t/(1000*60*60*24))
        let color
            if (day<=5) {
                color='red'
            }else if(day>5&&day<=10){
                color='yellow'
            }else{
                color='green'
            }
        let text
        if(day===1){
            text=`${day} день`
        }else if(day>1&&day<=4){
            text=`${day} дня`
        }
        else if(day>4){
            text=`${day} дней`
        }
        else if(day<1&&day>=-4){
            text=`${day} дня`
        }
        else if(day<-4){
            text=`${day} дней`
        }

        let show
        let textState
        let colorState
        if(day<1){
            show='red'
            textState='Не выполнено' 
            colorState='red'    
        }else{
            show='grey'
            textState='В процессе' 
            colorState='yellow'
        }

       
            dispatch({
                type:'DATE_F',
                id: id,
                text,
                color,
                show,
                textState,
                colorState,
            })
    },
    }
}
let GoalsPageContainer=connect(mapStateToProps,mapDispatchToProps)(GoalsPage)
export default GoalsPageContainer