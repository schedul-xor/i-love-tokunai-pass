import OpenJprailFares from './openjprailfares';

const generateFares = (newRows,fares,isIc) => {
        var fareSum = 0;
        for(var i = 0;i < newRows.length;i++){
            var o = newRows[i];
            var fare = OpenJprailFares.fareBetweenStations(o.fromStationId,o.toStationId,isIc);
            fares.push(fare);
            fareSum += fare;
        }
    return fareSum;
};

export default(state={
    isIc: true,
    fromQuery: '',
    toQuery: '',
    fromStationIds: [],
    toStationIds: [],
    selectedFromStationIdx: 0,
    selectedToStationIdx: 0,
    
    rows: [],

    fares: [],
    fareSum: 0
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

    case 'ROW_ADDED':
        {
            const newRows = state.rows.slice();
            
            // {fromStationId : ?, toStationId : ?}
            newRows.push(action.payload.addedRow);
            
            const fares = [];
            const fareSum = generateFares(newRows,fares,state.isIc);
            
            return {
                ...state,
                rows: newRows,
                fromQuery: '',
                toQuery: '',
                fromStationIds: [],
                toStationIds: [],
                fares: fares,
                fareSum: fareSum
            };
        }

    case 'ROW_DELETED':
        {
            const newRows = state.rows.slice();
            newRows.splice(action.payload.idx,1);
        
            const fares = [];
            const fareSum = generateFares(newRows,fares,state.isIc);

            return {
                ...state,
                rows: newRows,
                fares: fares,
                fareSum: fareSum
            };
        }

    case 'SET_IS_IC':
        {
            const newIsIc = action.payload.isIc;
            
            const fares = [];
            const fareSum = generateFares(state.rows,fares,newIsIc);

            return {
                ...state,
                isIc: newIsIc,
                fares: fares,
                fareSum: fareSum
            };
        }
        
    default:
        return {
            ...state
        };
    }
};
