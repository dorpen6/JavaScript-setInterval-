// setInterval()

// 2 parameters
// 1. function
// 2. time
// 3. 1 second = 1000
// 4. 1 minute = 1000 * 60
// 5. 1 hour = 1000 * 60 * 60

let counter;
counter = 0;

const countInter = setInterval(count, 1000);

function count()
{
    console.log(counter = counter + 1);

    if(counter > 9)
    {
        console.log("Second: 10");
        clearInterval(countInter);
    }
}