/*Jacob H 2023*/
/*https://www.nytimes.com/puzzles/letter-boxed*/
(function()
{
    function submit(a){
        a = a.toLowerCase();
        for (const ch of a){
            window.dispatchEvent(new KeyboardEvent('keydown', {key: ch}));
        }
        window.dispatchEvent(new KeyboardEvent('keydown', {key: 'Enter'}));
    }

    (function()
    {
        const enterInput = document.evaluate("/html/body/div[2]/div/div[2]/div[2]/div[5]/div[3]/div/div/div[1]/div[1]/div/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        const solution = window.gameData.ourSolution;
        let i = 0;
        submit(solution[i++]);
        const observer = new MutationObserver(
            function(mutationList, observer)
            {
                if (enterInput.childNodes.length <= 2 && i < solution.length){
                    submit(solution[i++]);
                }
                else if (i >= solution.length) observer.disconnect();
            }
        );
        observer.observe(enterInput, { childList: true});
    })();
})();