module.exports = ()=>{
    const biranaClient = {}
    biranaClient.auth = () =>{
        console.log('birana authentication')
    }
    biranaClient.randorm =()=>{
        console.log('random thing ')
    }
    return biranaClient
}