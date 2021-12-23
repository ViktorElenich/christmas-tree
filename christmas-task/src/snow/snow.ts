export function renderSnow(){
    //canvas init
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");

    //canvas dimensions
    const W = window.innerWidth;
    const H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    //snowflake particles
    const mp = 150; //max particles
    const particles: { x: number; y: number; r: number; d: number; }[] = [];
    for (let i = 0; i < mp; i++) {
        particles.push({
            x: Math.random() * W, //x-coordinate
            y: Math.random() * H, //y-coordinate
            r: Math.random() * 4 + 1, //radius
            d: Math.random() * mp //density
        })
    }

    //controls
    let count = 0,
    noStopMotion = 1;

    //Lets draw the flakes
    function draw() {
        count++;
        ctx.clearRect(0, 0, W, H);

        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.beginPath();
        for (let i = 0; i < mp; i++) {
            const p = particles[i];
            ctx.moveTo(p.x, p.y);
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
        }
        ctx.fill();
        update();
    }

    //Function to move the snowflakes
    //angle will be an ongoing incremental flag. Sin and Cos functions will be applied to it to create vertical and horizontal movements of the flakes
    let angle = 0;

    function update() {
        angle += 0.01;
        for (let i = 0; i < mp; i++) {
            const p = particles[i];
            //Updating X and Y coordinates
            //We will add 1 to the cos function to prevent negative values which will lead flakes to move upwards
            //Every particle has its own density which can be used to make the downward movement different for each flake
            //Lets make it more random by adding in the radius
            p.y += Math.cos(angle + p.d) + 1 + p.r / 2;
            p.x += Math.sin(angle) * 2;

            //Sending flakes back from the top when it exits
            //Lets make it a bit more organic and let flakes enter from the left and right also.
            if (p.x > W + 5 || p.x < -5 || p.y > H) {
            if (i % 3 > 0) //66.67% of the flakes
            {
                particles[i] = {
                x: Math.random() * W,
                y: -10,
                r: p.r,
                d: p.d
                };
            } else {
                //If the flake is exitting from the right
                if (Math.sin(angle) > 0) {
                //Enter from the left
                particles[i] = {
                    x: -5,
                    y: Math.random() * H,
                    r: p.r,
                    d: p.d
                };
                } else {
                //Enter from the right
                particles[i] = {
                    x: W + 5,
                    y: Math.random() * H,
                    r: p.r,
                    d: p.d
                };
                }
            }
            }
    }
    //animation loop
    noStopMotion && setTimeout(draw, 33);
    }

    
    draw();

    setTimeout(function() {
    console.log('count', count / 10);
    }, 10000);
    canvas.style.height = window.innerHeight - 100 + 'px';
    
    document.querySelector('.snow-item').addEventListener('click', function() {
        if (noStopMotion = noStopMotion ? 0 : 1) draw()
    }, !1);
}