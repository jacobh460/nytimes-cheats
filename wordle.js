/*Jacob Hillman 2023*/
/*https://www.nytimes.com/games/wordle/index.html*/
(function()
{
    function submit(a){
        a = a.toLowerCase();
        for (const ch of a){
            window.dispatchEvent(new KeyboardEvent('keydown', {key: ch}));
        }
        window.dispatchEvent(new KeyboardEvent('keydown', {key: 'Enter'}));
    }

    function getDate(){
        const date = new Date();
        return `${date.getFullYear()}-${(date.getMonth()+1).toString().padStart(2,'0')}-${date.getDate().toString().padStart(2, '0')}`;
    }

    (function()
    {
        fetch(`https://www.nytimes.com/svc/wordle/v2/${getDate()}.json`)
        .then((body) => body.json())
        .then((data) => 
        {
            submit(data.solution);
        });
    })();
})();