import Item from "./Item"


function List() {
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lançamento={1985} />
                <Item marca="Volkswagen" ano_lançamento={1964} />
                <Item marca="Honda" ano_lançamento={1990} />
            </ul>
        </>
    )
}

export default List