// コンテンツの非表示
const hideContents = () => {
    // コンテンツの非表示
    const contents = ["#home", "#profile", "#contents"];
    for (const content of contents) {
        $(content).hide();
    }

    // タブの見た目をクリア
    const tabs = ["#tab-home", "#tab-profile", "#tab-contents"];
    for (const tab of tabs) {
        $(tab).css("opacity", 0.7);
        $(tab).css("background", "gray");
    }
};

// コンテンツの表示
const showContents = (content, tab) => {
    hideContents();
    $(content).show();
    $(tab).css("opacity", 1.0);
    $(tab).css("background", "deepskyblue");
};

hideContents();
showContents("#home", "#tab-home");
