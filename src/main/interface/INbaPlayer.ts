export interface INbaPlayer {
    id: number,
    first_name: string,
    height_feet: null | number,
    height_inches: null | number,
    last_name: string,
    position: string,
    team: ITeam,
    weight_pounds: null | number
}

export interface ITeam {
    id: number,
    abbreviation: string,
    city: string,
    conference: string,
    division: string,
    full_name: string,
    name: string
}