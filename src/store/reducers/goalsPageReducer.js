let defaultState={
    changeTitle:'',
    valueTitle:'',
    changeDate:'',
    valueDate:'',
    changeTodo:'',
    valueTodo:'',
    valueWindow: false,
    goals:[], 
}
let GoalsPageReducer=(state=defaultState, action)=>{
    let stateCopy={
        ...state,
        goals:[...state.goals]
    }
    switch(action.type){
        case 'VALUE_TITLE':
            stateCopy.changeTitle=action.text
            stateCopy.valueTitle=stateCopy.changeTitle
            return stateCopy
        case 'VALUE_DATE':
            stateCopy.changeDate=action.text
            stateCopy.valueDate=stateCopy.changeDate
            return stateCopy
        case 'VALUE_TODO':
            stateCopy.changeTodo=action.text
            stateCopy.valueTodo=stateCopy.changeTodo
            return stateCopy
        case 'ADD_GOALS':
        let todoNew=[]
        let arrTodo=stateCopy.valueTodo.split(',')
        arrTodo.forEach(el=>{
            let obj={
                id:Math.floor(Math.random()*100000),
                title:el,
                chek: false,
                color:'white',
            }
            todoNew.push(obj)
        })

        if(stateCopy.valueTitle!==''){
            let goal={
                id: Math.floor(Math.random()*100000),
                title: stateCopy.valueTitle,
                DateStart:action.date,
                DateEnd: stateCopy.valueDate===''? null: stateCopy.valueDate,
                day: {
                    text:'4 дня',
                    color: 'red',
                },
                state: {
                    text: 'в процессе',
                    color: 'yellow',
                },
                todo:[...todoNew],
                procent:'0%',
                dayFunction:function(){
                    if(this.DateEnd===null){
                        this.day=null
                    }
                }
            }
            goal.dayFunction()
               
                stateCopy.goals.push(goal)
                stateCopy.valueWindow=!stateCopy.valueWindow
                stateCopy.valueDateEnd=''
                stateCopy.valueTitle=''
                stateCopy.valueTodo=''

                return stateCopy   
        }else{
            return state
        }
        
        case 'DATE_F':
           
            if(stateCopy.goals.length>0){
                stateCopy.goals.forEach(el=>{
                    if(el.id===action.id){
                        el.day.text=action.text
                        el.day.color=action.color
                        el.state.text=action.textState
                        el.state.color=action.colorState   
                    }
                })
                            
            }
            return stateCopy
        case 'OPEN_WINDOW':
            stateCopy.valueWindow=!stateCopy.valueWindow
            return stateCopy
        default:
            return state
    }
}
export default GoalsPageReducer