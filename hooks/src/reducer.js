export const Reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return [
                ...state,
                {
                    title: action.title,
                    id: Date.now(),
                    completed: false
                }
            ]
        case 'toggle-todo':
            return state.filter(todos => {
                if (todos.id === action.id) {
                    // тоесть он переприсваевает значение которое приходит на противоположное
                    todos.completed = !todos.completed
                }
                return todos
            })
        case 'remove-todo':
            return state.filter(todos => {
                // если придет id которой рае=вен id то чтобы удалить это нужно чтобы возвращалось false
                if(todos.id !== action.id){
                    return todos
                }
                // если будет равен ===
                else{
                    return null
                }
            })
        default:
            return state
    }
}