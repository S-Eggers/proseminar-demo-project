chrome.bookmarks.onCreated.addListener((id, node) => {
    alert(`You successfully created ${node.title}`);
});

chrome.bookmarks.onRemoved.addListener((id) => {
    alert(`You successfully removed ${id}`);
});

chrome.bookmarks.onChanged.addListener((id, node) => {
    alert(`You successfully changed ${node.title}`);
});