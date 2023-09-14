/*Jacob Hillman 2023*/
/*https://www.nytimes.com/games/connections*/
(async function()
{
    async function find_answers(){
        const board = document.getElementById("board");
        const words = new Set();

        for (const element of board.childNodes)
            for (const item of element.childNodes)
                words.add(item.innerHTML.toLowerCase());
        
        const body = await fetch("https://www.nytimes.com/games-assets/connections/game-data-by-day.json");
        const data = await body.json();

        /*find day data that corresponds to current state on board*/
        for (const day of data){
            let stop = false;
            for (const group of day.startingGroups){
                for (const word of group){
                    if (!(words.has(word.toLowerCase()))) {stop = true; break;};
                }
                if (stop) break;
            }
            if (!stop){
                return day;
            }
        }
        return null;
    }

    function click(ele){
        ele.dispatchEvent(new PointerEvent("pointerdown"));
        ele.dispatchEvent(new PointerEvent("pointerup"));

    }

    await (async function ()
    {
        const today_data = await find_answers();
        const board = document.getElementById("board");
        const submit_button = document.getElementById("submit-button");


        const keys = Object.keys(today_data.groups);
        let i = 0;

        let id = setInterval(function()
        {
            const map = {};
            for (const element of board.childNodes)
                for (const item of element.childNodes)
                    map[item.innerHTML.toLowerCase()] = item;

            if (i >= keys.length){
                clearInterval(id);
                return;
            }
            const group_data = today_data.groups[keys[i++]];

            for (const word of group_data.members)
            {
                click(map[word.toLowerCase()]);
            }

            click(submit_button);

        }, 2500);

        
    })();
})();