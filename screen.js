function findScreenHeight(width, ratio) {
    let arr = ratio.split(':');
    let height = (width / Number(arr[0])) * Number(arr[1]);
    return `${width}x${height}`;
}
