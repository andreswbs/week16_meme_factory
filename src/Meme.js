function Meme({meme}) {
    if (!meme) {
        return <div>Loading ...</div>
    }

    return (
        <p>here will be {meme.name}</p>
    )

}

export default Meme