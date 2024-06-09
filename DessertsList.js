function DessertsList(props) {

    const ListItems= props.data.filter((dish) => {
        return dish.calories < 500;
         
})
    .sort((a,b) => {
        return a.calories-b.calories;
})
    .map((dish) => {
        return <li>{dish.name}-{dish.calories} cal</li> ;
    })


    return (
        <ul>
            {ListItems}
        </ul>
    );
}

export default DessertsList;