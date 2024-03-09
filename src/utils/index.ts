export const generateItemsPagination = (currentPage:number, totalPage:number) => {
    if (totalPage <= 5) return Array.from({ length: totalPage }, (_, i) => i + 1);
    if (currentPage <= 3) return [1, 2, 3, '...', totalPage - 1, totalPage];
    if (currentPage >= totalPage-2) return [1, 2, '...', totalPage - 2, totalPage - 1, totalPage];
    return [
        1,
        '...',
        currentPage-1,
        currentPage,
        currentPage+1,
        '...',
        totalPage
    ];
}

export const sleep = (seconds:number) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(true);
        }, seconds*1000)
    });
}

export const currencyFormat = (value:number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(value);
}