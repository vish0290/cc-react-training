function list() {
    const games = ['cs go','valorant','minecaraft','gta5']
    return (
        games.map((game)=> <li>{game}</li>));
}

export default list;