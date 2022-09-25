// test
let kotak = document.getElementById('kotak');
document.getElementById('btn-kotak')
    .addEventListener('click', async event => {
        await new Promise((resolve, reject) => {
            kotak.children[4].scrollIntoView({
                block: "center",
                inline: "center",
                behavior: "smooth"
            });
            resolve();
        }).then(() => {});
        console.log('selesai');
    });