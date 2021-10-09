function groceryList() {
    const lists = [
        {
          "item": "Dal",
          "type": "veg"
        },
        
        {
          "item": "Meat",
          "type": "non-veg"
        },
        {
          "item": "Rice",
          "type": "veg"
        },
        {
          "item": "Fish",
          "type": "non-veg"
        },
      ]

    const final = lists.map((listitem)=>(
      <th>{listitem.type}</th>
      ))
      
    const sortedlist = lists.sort((a, b) => a.item > b.item ? 1 : -1).map((listitem)=>(
      <p>{listitem.type}:{listitem.item}</p>
      ))

    return ( 
        final
     );
}

export default groceryList;