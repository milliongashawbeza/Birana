module.exports=()=>{
    const biranaServices = {};

    biranaServices.anayltics = ()=>{
        console.log("Loading birana analytics")
    }
    biranaServices.authService=()=>{
        console.log("Loading birana authservice")
    }
   
    return biranaServices; 
}