/*Jacob Hillman 2023*/
/*https://www.nytimes.com/puzzles/spelling-bee*/
(function()
{
    function submit(a){
        a = a.toLowerCase();
        for (const ch of a){
            window.dispatchEvent(new KeyboardEvent('keydown', {key: ch}));
        }
        window.dispatchEvent(new KeyboardEvent('keydown', {key: 'Enter'}));
    }

    function main()
    {
        const answers = window.gameData.today.answers;
        for (const answer of answers){
            submit(answer);
        }
    }
    main();
})();