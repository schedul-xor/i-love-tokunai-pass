export default(state={
    rows: [],
    fromQuery: '',
    toQuery: '',
    fromStationIds: [],
    toStationIds: [],
    selectedFromStationIdx: 0,
    selectedToStationIdx: 0,
    
},action)=>{
    switch(action.type){
        
    case 'STATION_SEARCH_RESULTS':
        if(action.payload.isFrom){
            return {
                ...state,
                fromStationIds: action.payload.stationIds.slice(),
                selectedFromStationIdx: 0,
                fromQuery: action.payload.query
            };
        }else{
            return {
                ...state,
                toStationIds: action.payload.stationIds.slice(),
                selectedToStationIdx: 0,
                toQuery: action.payload.query
            };
        }
        break;

    case 'STATION_IDX_SELECTED':
        if(action.payload.isFrom){
            return {
                ...state,
                selectedFromStationIdx: action.payload.idx
            };
        }else{
            return {
                ...state,
                selectedToStationIdx: action.payload.idx
            };
        }
        break;

    case 'ROW_ADDED':
        const newRows = state.rows.slice();
        // {fromStationId : ?, toStationId : ?}
        newRows.push(action.payload.addedRow);
        return {
            ...state,
            rows: newRows,
            fromQuery: '',
            toQuery: '',
            fromStationIds: [],
            toStationIds: []
        };
        
    default:
        return {
            ...state
        };
        break;
    }
};
