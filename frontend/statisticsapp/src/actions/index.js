export const addData = data => ({
    type: 'ADD_DATA',
    data
});

export const switchDataset = (data, dataset) => ({
    type: 'SWITCH_DATASET',
    data,
    dataset
})