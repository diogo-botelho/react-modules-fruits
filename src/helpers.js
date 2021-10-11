function choice(items) {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

function remove(items, item) {
    const itemIndex = items.indexOf(item);
    
    if (itemIndex === -1) {
        return undefined
    }
    else {
        return items.splice(itemIndex, 1);
    }
}

export { choice, remove }