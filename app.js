let boxes=document.querySelectorAll(".box")
let resetbtn=document.querySelector("#reset-btn")

let newbtn=document.querySelector("#new-btn")
let msgcontainer=document.querySelector(".msg-c")
let message=document.querySelector("#msg")

let turnO=true 

const winpatterns=[
        [0, 1, 2] ,
        [0, 3, 6] ,
        [0, 4, 8] ,
        [1, 4, 7] ,
        [2, 5, 8] ,
        [2, 4, 6] ,
        [3, 4, 5] , 
        [6, 7, 8]   
    
     ]

     const resetGame = ()=>{
      turnO=true 
      enabled()
      msgcontainer.classList.add("hide")
                
     }

     boxes.forEach((box) => {
           box.addEventListener("click", () => {
            //  console.log("clicked")
             
             if (turnO===true){
                             box.innerText="O"
                             turnO=false
                
                         }
                         else{
                         box.innerText="X"
                            turnO=true
                
                        }
                        box.disabled=true
                        checkWinner ()
         })
        })

        const disabled =()=>{
          for (let box of boxes){
            box.disabled=true
          }
        }

        const enabled =()=>{
          for (let box of boxes){
            box.disabled=false
            box.innerText=""
          }
        }

        const showWinner=(winner)=>{
          message.innerText=  `Congo, Winner is ${winner}`
          msgcontainer.classList.remove("hide")
          disabled ()
        }

        const checkWinner =()=>{
                  for ( let pattern of winpatterns){
                    // console.log(pattern)
                    //   console.log(pattern[0],pattern[1],pattern[2])
                    //   console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText)

                      let pos1val=boxes[pattern[0]].innerText
                      let pos2val=boxes[pattern[1]].innerText
                      let pos3val=boxes[pattern[2]].innerText

                    if(pos1val !="" && pos2val !="" && pos3val !=""   ){
                        if(pos1val===pos2val && pos2val===pos3val){
                            // console.log("winner", pos1val)

                            showWinner(pos1val)
                        }

                    }
                   }
              }
            
              newbtn.addEventListener("click",resetGame)
              resetbtn.addEventListener("click",resetGame)