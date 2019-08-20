
export function movieslist(){
    return{
            type : 'MOVIES_LIST',
            payload : [
                {id : 1 , name : "spiderman"},
                {id : 2 , name : "superman"},
                {id : 3 , name : "ironman"}
            ]
    }
}



export function directorslist(){
    return{
            type : 'DIRECTORS_LIST',
            payload : [
                {id : 1 , name : "director1"},
                {id : 2 , name : "director2"},
                {id : 3 , name : "director3"}
            ]
    }
}