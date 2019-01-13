function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function flashCaret(ms)
{
    $("#caret").toggle();
    await sleep(ms);
    flashCaret(ms);
}

function main()
{
    flashCaret(500);
}

main();