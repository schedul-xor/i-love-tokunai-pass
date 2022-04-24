import OpenJprailFares from './openjprailfares';

export const onStationQueryUpdate = (partialStation,isFrom) => {
    const stations = OpenJprailFares.stationsWithPrefix(partialStation);
    console.log(stations);
    return {};
};
