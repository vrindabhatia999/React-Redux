const SlotM=(props)=>{


     let x=props.x
     let y=props.y
     let z=props.z


    
        if(x==y && y==z){
            return(
                <div>
                    {x} {y} {z}
                </div>

            ) 
        }   else{
            return(
                <div>
                    <h1>Bye</h1>
                </div>
            )
        }

    
}
export default SlotM;