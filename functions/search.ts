//

function search(
    combinationArray: { type: string; iconName: string; iconPath: string; description: string }[],
    searchValue?: string
) {
    if (!searchValue) return combinationArray;
    const searchExistedArray = combinationArray.filter(
        (item) => item.description.includes(searchValue as string) || item.iconName.includes(searchValue as string)
    );
    return searchExistedArray;
}

export default search;
