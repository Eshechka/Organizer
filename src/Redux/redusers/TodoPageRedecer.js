let defaultState={
    valueWindow: false,
    valueTitle:'',
    ChangeTitle:'',
    valueDateStart:'',
    ChangeDateStart:'',
    valueDateEnd:'',
    ChangeDataEnd:'',
    checkWindow:false,
    todoList:[],
}
let TodoPageReducer=(state=defaultState,action)=>{
    let stateCopy={...state,
                    todoList:[...state.todoList]
                        }

    switch(action.type){
        case 'WINDOW':
            stateCopy.valueWindow=!stateCopy.valueWindow
        return stateCopy
        case 'CHANGE_TITLE':
            stateCopy.ChangeTitle=action.value
            stateCopy.valueTitle=stateCopy.ChangeTitle
        return stateCopy
        case 'CHANGE_DATE_START':
            stateCopy.ChangeDateStart=action.value
            stateCopy.valueDateStart=stateCopy.ChangeDateStart
        return stateCopy
        case 'CHANGE_DATE_END':
            stateCopy.ChangeDataEnd=action.value
            stateCopy.valueDateEnd=stateCopy.ChangeDataEnd
        return stateCopy
        case 'PUSH':
           
            if(stateCopy.valueTitle!==''){
                let el={
                    id:Math.floor(Math.random()*1000000),
                    title: stateCopy.valueTitle,
                    DateStart: stateCopy.valueDateStart===''? null: stateCopy.valueDateStart ,
                    DateEnd: stateCopy.valueDateEnd===''? null: stateCopy.valueDateEnd,
                    day: {
                        text:'4 дня',
                        color: 'red',
                    },
                    state: {
                        text: 'в процессе',
                        color: 'yellow',
                    },
                    show: 'grey',
                    check: false, 
                    dayFunction:()=>{
                        if(el.DateStart===null||el.DateEnd===null){
                            el.day=null
                        }
                    }
                    
                }
                el.dayFunction()
               
                stateCopy.todoList.push(el)
                stateCopy.valueWindow=!stateCopy.valueWindow
                stateCopy.valueDateEnd=''
                stateCopy.valueDateStart=''
                stateCopy.valueTitle=''
                
                   
                return stateCopy
            }else{        
                return state
            }
            case 'DATE_FUNCTION':
            if(stateCopy.todoList.length>0){
                stateCopy.todoList.forEach(el=>{
                    if(el.id===action.id){
                        el.day.text=action.text
                        el.day.color=action.color
                        el.state.text=action.textState
                        el.state.color=action.colorState
                        el.show=action.show
                    }
                })                
            }
            return stateCopy
            case 'CHECK':
            if(stateCopy.todoList.length>0){
                stateCopy.todoList.forEach(el=>{
                    if(el.id===action.id){
                        el.state.text=action.textState
                        el.state.color=action.colorState
                        el.show=action.show
                        el.check=!el.check
                    }
                })                
            }
            return stateCopy
            case 'DELETE_EL':
            if(stateCopy.todoList.length>0){
                stateCopy.todoList.forEach((el,i)=>{
                    if(el.id===action.id){
                        stateCopy.todoList.splice(i,1)
                    }
                })                
            }
            return stateCopy
            case 'DELETE_TODO':
                let i=stateCopy.todoList.length
                while(i>0){
                    stateCopy.todoList.pop()
                    i--
                }
                return stateCopy
            case 'WINDOW_OPEN':
                stateCopy.valueWindow=!stateCopy.valueWindow
                if(stateCopy.valueDateStart===''|| stateCopy.valueDateEnd===''){
                    stateCopy.checkWindow=false
                }else{
                    stateCopy.checkWindow=true
                }
                return stateCopy
                    
    
        default:
            return state
    }

}
export default TodoPageReducer