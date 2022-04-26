import OpenJprailFares from './openjprailfares';

export const onStationQueryUpdate = (query,isFrom) => {
    let stationIds = [];
    if(query !== ''){
        stationIds = OpenJprailFares.stationsWithPrefix(query);
    }
    return {
        type: 'STATION_SEARCH_RESULTS',
        payload:{
            isFrom: isFrom,
            stationIds: stationIds,
            query: query
        }
    };
};

export const onStationIdxSelect = (idx,isFrom) => {
    return {
        type: 'STATION_IDX_SELECTED',
        payload: {
            idx: idx,
            isFrom: isFrom
        }
    };
};

export const onAddRow = (addedRow) => {
    return {
        type: 'ROW_ADDED',
        payload: {
            addedRow: addedRow
        }
    };
};

export const onDeleteRow = idx => {
    return {
        type: 'ROW_DELETED',
        payload: {
            idx: idx
        }
    };
};

export const setIsIc = isIc => {
    return {
        type: 'SET_IS_IC',
        payload: {
            isIc: isIc
        }
    };
};
