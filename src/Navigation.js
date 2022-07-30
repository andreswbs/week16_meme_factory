function Navigation({memes, page, pageSize}) {
    if ( memes.length < 1) {
        return <div>Loading ...</div>
    }

    let rows = []
    //page 2, pageSize 10
    //for loop runs 
    // from: 2 * 10 = 20
    // until: i < 29 (20 + (10-1))
    console.log(page * pageSize, page*pageSize + pageSize-1)
    for (let i = page * pageSize; i <= (page*pageSize + pageSize-1); i++) {
        const element = memes[i]
        rows.push(
        <div key={i}>
            <img className="navigationThumbs" src={element.url} alt={element.name} />
        </div>
        )
    }

    return (
        <>
            <h1>Navigation</h1>
            <div className="navPics" >
            {rows} 
            </div>
        </>
    )

}

export default Navigation