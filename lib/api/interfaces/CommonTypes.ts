export namespace InputData {
    type bar = 'Bar';
    type piváreň = 'Piváreň';
    type vináreň = 'Vináreň';
    type oneOfCategoryType = bar | piváreň | vináreň;

    export interface InputSearchData {
        category: oneOfCategoryType,
        lat: number,
        lng: number,
        radius: number
    }
}

export namespace OutputData {
    export interface OutputSearchData {

    }
}
