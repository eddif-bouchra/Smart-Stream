export  async function getChannels(){
    const response = await fetch('https://6af34a76d2377d6c3704d720.mockapi.io/channals');
    if(!response.ok){
        throw new Error('Failed to fetch data')
    }
    const data = await response.json();
    return data;
}