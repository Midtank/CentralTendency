const reducer = (state = {}, action) => {
    switch(action.type){
        case "SWITCH_DATASET":

            //if there's no data, go to 1234
            //if at 1234, go to 4321
            return{
                data: action.data['data'],
                currentDataset: action.dataset
            }
        case "ADD_DATA":      
            const newData = [...state['data'], action.data]  
            const sort = newData.sort((a,b) => a-b)    
            return {
                ...state,
                data: sort
            }

        default:
            return state;
    }
}

export default reducer;