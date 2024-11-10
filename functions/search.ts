//

function search(
    combinationArray: { id: string; type: string; iconName: string; iconPath: string; description: string }[],
    searchValue?: string
) {
    if (!searchValue) return combinationArray;
    const searchExistedArray = combinationArray.filter(
        (item) =>
            item.description.toLocaleLowerCase().includes((searchValue as string).toLocaleLowerCase()) ||
            item.iconName.toLocaleLowerCase().includes((searchValue as string).toLocaleLowerCase())
    );
    return searchExistedArray;
}

export default search;
