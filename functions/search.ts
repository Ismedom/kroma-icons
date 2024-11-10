//

function search(
    combinationArray: { id: string; type: string; iconPath: string; description: string }[],
    searchValue?: string
) {
    if (!searchValue) return combinationArray;
    const searchExistedArray = combinationArray.filter(
        (item) =>
            item.description.toLocaleLowerCase().includes((searchValue as string).toLocaleLowerCase()) ||
            item.iconPath
                .split(".")[0]
                .toLocaleLowerCase()
                .includes((searchValue as string).toLocaleLowerCase())
    );
    return searchExistedArray;
}

export default search;
