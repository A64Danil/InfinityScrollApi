console.log('test from js - 11:22')


async function getCompanys() {
    const res = await fetch('http://localhost:3000/api/v1/companys?page=1&limit=20', {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: "{}"
    });
    const json = await res.json();
    return json
}

window.addEventListener('load', async function (){
    console.log('Window was loaded');
    console.log(await getCompanys());
})
