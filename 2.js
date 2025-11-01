const start = document.getElementById('title');
const background = document.getElementById('background');

const instruction1 = document.getElementById('instruction1');

const all = document.querySelectorAll('.seat')
const seat1 = document.getElementById('seat1');
const seat2 = document.getElementById('seat2');
const seat3 = document.getElementById('seat3');
const seat4 = document.getElementById('seat4');
const seat5 = document.getElementById('seat5');
const seat6 = document.getElementById('seat6');

const omg = document.getElementById('omg');
const nice = document.getElementById('nice');


let lives = 5;
let selectbutton =[];
let computerchoice = null ;    // 이것도 전역에서 

















start.addEventListener('click', () => {
    instruction1.style.display= 'block';
    background.src = "subway2.png"
    start.remove();
    howtoplay1.remove();

});



    
instruction1.addEventListener('click', () => {
    
    
        instruction1.style.display= 'none';

        //3초뒤 실행하기 
        setTimeout(showbutton, 3000); 

        });
        
        
        







//배열로 바꾸고
const buttonarray = Array.from(all);

//배열을 섞는 함수
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));//0부터 i까지 무작위 인덱스 선택
        [array[i], array[j]] = [array[j], array[i]];   //array[i]와 array[j]의 위치교환
}
return array;}






    //컴퓨터도 하나 골라
function computerpick () {
        const randomIndex = Math.floor(Math.random() * selectbutton.length);
        computerchoice = selectbutton[randomIndex];
    }




//버튼 3개를 무작위로 선택하고 보이게 하는 함수
function showbutton() {
    const shuffledButtons = shuffleArray(buttonarray);

    selectbutton = shuffledButtons.slice(0, 3);


    computerpick();


    selectbutton.forEach(button => {
        button.style.display = 'inline-block'; // 버튼을 보이도록 설정
        button.addEventListener('click', mypick);    // 각 버튼에 비펜트 리스러 추가

      });

    };









//-------------


//나 하나 고르고
function mypick(event) {
    const mychoice = event.target; // 클릭된 버튼 요소

    selectbutton.forEach(button => {
        button.removeEventListener('click', mypick);
    });                                                     //모든 버튼 제거

    selectbutton.forEach(button => {
        button.style.display = 'none';
    });                                                         //표시된 버튼 제거




    if (!computerchoice) {
        console.error("오류: 컴퓨터 선택이 아직 결정되지 않았습니다.");
        return;
    }


if (mychoice===seat1 && computerchoice===seat1) {
      background.src = "at1.png"

    setTimeout(() => {
       
        omg.style.display ='block';
        }, 3000);
    

    updateLivesDisplay();
    }else if (mychoice===seat2 && computerchoice===seat2) {
        background.src = "at2.png"
  
      setTimeout(() => {
         
          omg.style.display ='block';
          }, 3000);
      
  
      updateLivesDisplay();
    }else if (mychoice===seat3 && computerchoice===seat3) {
        background.src = "at3.png"
  
      setTimeout(() => {
         
          omg.style.display ='block';
          }, 3000);
      
  
      updateLivesDisplay();
    }else if (mychoice===seat4 && computerchoice===seat4) {
        background.src = "at4.png"
  
      setTimeout(() => {
         
          omg.style.display ='block';
          }, 3000);
      
  
      updateLivesDisplay();
    }else if (mychoice===seat5 && computerchoice===seat5) {
        background.src = "at5.png"
  
      setTimeout(() => {
         
          omg.style.display ='block';
          }, 3000);
      
  
      updateLivesDisplay();
    }else if (mychoice===seat6 && computerchoice===seat6) {
        background.src = "at6.png"
  
      setTimeout(() => {
         
          omg.style.display ='block';
          }, 3000);
      


    
    }else if(mychoice===seat1 && computerchoice===seat2) {
        background.src = "1-2.PNG"

        setTimeout(() => {
       
            nice.style.display = 'block';
            }, 3000);
    }else if(mychoice===seat1 && computerchoice===seat3) {
        background.src = "1-3.PNG"

        setTimeout(() => {
       
            nice.style.display = 'block';
            }, 3000);
     }else if(mychoice===seat1 && computerchoice===seat4) {
            background.src = "1-4.PNG"
    
            setTimeout(() => {
           
                nice.style.display = 'block';
                }, 3000);
    }else if(mychoice===seat1 && computerchoice===seat5) {
        background.src = "1-5.PNG"

        setTimeout(() => {
       
            nice.style.display = 'block';
            }, 3000);
     }else if(mychoice===seat1 && computerchoice===seat6) {
            background.src = "1-6.PNG"
    
            setTimeout(() => {
           
                nice.style.display = 'block';
                }, 3000);
    }else if(mychoice===seat2 && computerchoice===seat1) {
        background.src = "2-1.PNG"

        setTimeout(() => {
       
            nice.style.display = 'block';
            }, 3000);
     }else if(mychoice===seat2 && computerchoice===seat3) {
            background.src = "2-3.PNG"
    
            setTimeout(() => {
           
                nice.style.display = 'block';
                }, 3000);
    }else if(mychoice===seat2 && computerchoice===seat4) {
        background.src = "2-3.PNG"

        setTimeout(() => {
       
            nice.style.display = 'block';
            }, 3000);
    }else if(mychoice===seat2 && computerchoice===seat5) {
    background.src = "2-3.PNG"

    setTimeout(() => {
   
        nice.style.display = 'block';
        }, 3000);
    }else if(mychoice===seat2 && computerchoice===seat6) {
        background.src = "2-6.PNG"
    
        setTimeout(() => {
       
            nice.style.display = 'block';
            }, 3000);
    }else if(mychoice===seat3 && computerchoice===seat1) {
            background.src = "3-1.PNG"
        
            setTimeout(() => {
           
                nice.style.display = 'block';
                }, 3000);
    }else if(mychoice===seat3 && computerchoice===seat2) {
                background.src = "3-2.PNG"
            
                setTimeout(() => {
               
                    nice.style.display = 'block';
                    }, 3000);   
    }else if(mychoice===seat3 && computerchoice===seat4) {
    background.src = "3-4.PNG"

    setTimeout(() => {
   
        nice.style.display = 'block';
        }, 3000);
    }else if(mychoice===seat3 && computerchoice===seat5) {
        background.src = "3-5.PNG"
    
        setTimeout(() => {
       
            nice.style.display = 'block';
            }, 3000);
    }else if(mychoice===seat3 && computerchoice===seat6) {
            background.src = "3-6.PNG"
        
            setTimeout(() => {
           
                nice.style.display = 'block';
                }, 3000);
    }else if(mychoice===seat4 && computerchoice===seat1) {
                background.src = "4-1.PNG"
            
                setTimeout(() => {
               
                    nice.style.display = 'block';
                    }, 3000);
    }else if(mychoice===seat4 && computerchoice===seat2) {
                    background.src = "4-2.PNG"
                
                    setTimeout(() => {
                   
                        nice.style.display = 'block';
                        }, 3000);
                    }else if(mychoice===seat4 && computerchoice===seat3) {
                        background.src = "4-3.PNG"
                    
                        setTimeout(() => {
                       
                            nice.style.display = 'block';
                            }, 3000);
                        }else if(mychoice===seat4 && computerchoice===seat5) {
                            background.src = "4-5.PNG"
                        
                            setTimeout(() => {
                           
                                nice.style.display = 'block';
                                }, 3000);
                            }else if(mychoice===seat4 && computerchoice===seat6) {
                                background.src = "4-6.PNG"
                            
                                setTimeout(() => {
                               
                                    nice.style.display = 'block';
                                    }, 3000);
                                }else if(mychoice===seat5 && computerchoice===seat1) {
                                    background.src = "5-1.PNG"
                                
                                    setTimeout(() => {
                                   
                                        nice.style.display = 'block';
                                        }, 3000);
                                    }else if(mychoice===seat5 && computerchoice===seat2) {
                                        background.src = "5-2.PNG"
                                    
                                        setTimeout(() => {
                                       
                                            nice.style.display = 'block';
                                            }, 3000);  }else if(mychoice===seat5 && computerchoice===seat3) {
                                                background.src = "5-3.PNG"
                                            
                                                setTimeout(() => {
                                               
                                                    nice.style.display = 'block';
                                                    }, 3000);  }else if(mychoice===seat5 && computerchoice===seat4) {
                                                        background.src = "5-4.PNG"
                                                    
                                                        setTimeout(() => {
                                                       
                                                            nice.style.display = 'block';
                                                            }, 3000);  }else if(mychoice===seat5 && computerchoice===seat6) {
                                                                background.src = "5-6.PNG"
                                                            
                                                                setTimeout(() => {
                                                               
                                                                    nice.style.display = 'block';
                                                                    }, 3000); 
                                                                }else if(mychoice===seat5 && computerchoice===seat6) {
                                                                    background.src = "5-6.PNG"
                                                                
                                                                    setTimeout(() => {
                                                                   
                                                                        nice.style.display = 'block';
                                                                        }, 3000); 
                                                                    }else if(mychoice===seat6 && computerchoice===seat1) {
                                                                        background.src = "6-1.PNG"
                                                                    
                                                                        setTimeout(() => {
                                                                       
                                                                            nice.style.display = 'block';
                                                                            }, 3000); 
                                                                        }else if(mychoice===seat6 && computerchoice===seat2) {
                                                                            background.src = "6-2.PNG"
                                                                        
                                                                            setTimeout(() => {
                                                                           
                                                                                nice.style.display = 'block';
                                                                                }, 3000);  }else if(mychoice===seat6 && computerchoice===seat3) {
                                                                                    background.src = "6-3.PNG"
                                                                                
                                                                                    setTimeout(() => {
                                                                                   
                                                                                        nice.style.display = 'block';
                                                                                        }, 3000);  }else if(mychoice===seat6 && computerchoice===seat4) {
                                                                                            background.src = "6-4.PNG"
                                                                                        
                                                                                            setTimeout(() => {
                                                                                           
                                                                                                nice.style.display = 'block';
                                                                                                }, 3000);  }else {
                                                                                                    background.src = "6-5.PNG"
                                                                                                
                                                                                                    setTimeout(() => {
                                                                                                   
                                                                                                        nice.style.display = 'block';
                                                                                                        }, 3000); 
                                                                                                    }
 

                                                            }
omg.addEventListener('click', () => {
    
    window.location.reload();
});

nice.addEventListener('click', () => {
    window.location.reload();
});
