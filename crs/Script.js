
//marital status
const q1 = document.getElementById("q1");
//spouse or common-law partner a citizen of canada
const q2i = document.getElementById("q2i");
const dq2i = document.getElementById("dq2i");

//spouse or common-law partner come with you
const q2ii = document.getElementById("q2ii");
const dq2ii = document.getElementById("dq2ii");
//How old are you
const q3 = document.getElementById("q3");
const dq3 = document.getElementById("dq3");
//education
const q4= document.getElementById("q4");
const dq4 = document.getElementById("dq4");
const dq4be = document.getElementById("dq4be");
const q4b = document.getElementById("q4b");
const q4c = document.getElementById("q4c");
const dq4c = document.getElementById("dq4c");
//language
const dq5 = document.getElementById("dq5");
const q5i = document.getElementById("q5i");
const dq5i = document.getElementById("dq5i");
const dq5ii = document.getElementById("dq5ii");
const q5ii = document.getElementById("q5ii");
//language selection
const q5ia = document.getElementById("q5ia");
const q5ib = document.getElementById("q5ib");
const q5ic = document.getElementById("q5ic");
const q5id = document.getElementById("q5id");
//additional language result

const dq5iiia = document.getElementById("dq5iiia");
const dq5iiib = document.getElementById("dq5iiib");
const q5iii = document.getElementById("q5iii");
const eq5ia = document.getElementById("eq5ia");
const eq5ib = document.getElementById("eq5ib");
const eq5ic = document.getElementById("eq5ic");
const eq5id = document.getElementById("eq5id");
// additional language 

const addq5iiia = document.getElementById("addq5iiia");
const addq5iiib = document.getElementById("addq5iiib");

// work experiance
const dq6 = document.getElementById("dq6");
const q6i = document.getElementById("q6i");
const dq6ii = document.getElementById("dq6ii");
const dq7 = document.getElementById("dq7");
const q7 = document.getElementById("q7");

// additional points
const dq8 = document.getElementById("dq8");
const q8 = document.getElementById("q8");
const q8n = document.getElementById("q8n");
const q8a = document.getElementById("q8a");
const dq9 = document.getElementById("dq9");
const dq10 = document.getElementById("dq10");
const q10i = document.getElementById("q10i");
const dq10i = document.getElementById("dq10i");
const q10 = document.getElementById("q10");
const dq11 = document.getElementById("dq11");
const q11 = document.getElementById("q11");
const q12 = document.getElementById("q12");
const dq12 = document.getElementById("dq12");

const qq5ia = document.getElementById("qq5ia");
const qq5ib = document.getElementById("qq5ib");
const qq5ic = document.getElementById("qq5ic");
const qq5id = document.getElementById("qq5id");

//valuation
let crs = 0;
const resultButton = document.getElementById('resultButton');
const Resultout = document.getElementById('Resultout');









//for marital status
q1.addEventListener("change", function () {
  
  if (q1.value === "B" || q1.value === "E"){
    //married     
     dq2i.style.display = "block";
     dq3.style.display="none";

  } else {    
    dq3.style.display="block";
    dq2i.style.display = "none";
    crs= crs+8;
     }

  });

  //for spouse or common-law partner a citizen of canada
q2i.addEventListener("change", function () {
  
  if (q2i.value === "A"){
     dq2ii.style.display = "block";
     dq3.style.display="block";
     

    } else {    
    dq3.style.display="block";
    dq2ii.style.display = "none";
    
     }

  });
  //how old are you
  q3.addEventListener("change", function () {
  
    if (q3.value !== "badvalue"){ 
        
      dq4.style.display = "block";
      dq4be.style.display = "block";
    }
    
     
  
    });
//education 2
q4.addEventListener("change", function () {

if (q4.value === "A")
{
crs= crs+0;
} 
else if (q4.value === "B")
{
crs= crs+28;
} 
else if (q4.value === "C")
{
crs= crs+84;
} 
else if (q4.value === "D")
{
crs= crs+91;
}
else if (q4.value === "E")
{
crs= crs+112;
}
else if (q4.value === "F")
{
crs= crs+119;
} 
else if (q4.value === "G")
{
crs= crs+126;
} 
else if (q4.value === "G")
{
crs= crs+126;
}
else if (q4.value === "H")
{
crs= crs+140;
}  

});


q4b.addEventListener("change", function () {
  
      if (q4b.value === "B"){ 
          
        dq4c.style.display = "block";
        dq5.style.display = "block";
        
      } else {    
        dq4c.style.display = "none";
        dq5.style.display = "block";
        dq5i.style.display = "block";
        
         }
               
      });
 //education canada     
q4c.addEventListener("change", function () {
  
        if (q4c.value !== "badvalue"){ 
            
          dq5.style.display = "block";
          dq5i.style.display = "block";
          
        }
        
         
      
        });
//language testb
q5i.addEventListener("change", function() {
  if (q5i.value ==="A")
  {
    dq5ii.style.display = "block";
  }else
  {
    dq5ii.style.display="none";
    crs= crs-1200;

  }



});        


//language selection          
q5ii.addEventListener("change", function () {
  
            if (q5ii.value === "A"){                 
            q5ia.style.display = "block";
            q5ib.style.display = "none";
            q5ic.style.display = "none";
            q5id.style.display = "none";
            dq5iiib.style.display = "block";
            dq5iiia.style.display = "none";             
            } 
            else if(q5ii.value === "B")
            {
            q5ib.style.display = "block";           
            q5ia.style.display = "none";
            q5ic.style.display = "none";
            q5id.style.display = "none";
            dq5iiib.style.display = "block";
            dq5iiia.style.display = "none";              
            }
            else if(q5ii.value === "C")
            {
            q5ic.style.display = "block";
            q5ia.style.display = "none";
            q5ib.style.display = "none";
            q5id.style.display = "none";
            dq5iiia.style.display = "block";
            dq5iiib.style.display = "none";            
            }
            else if(q5ii.value === "D")
            {
            q5id.style.display = "block";
            q5ia.style.display = "none";
            q5ib.style.display = "none";
            q5ic.style.display = "none";
            dq5iiia.style.display = "block";
            dq5iiib.style.display = "none";            
            }
    
                     
            }); 

addq5iiia.addEventListener("change", function () {
  
            if (addq5iiia.value === "A"){                 
                eq5ia.style.display = "block";
                eq5ib.style.display = "none";
                eq5ic.style.display = "none";
                eq5id.style.display = "none";
                dq6.style.display="block";                
            }
            else if(addq5iiia.value === "B"){
              eq5ib.style.display = "block";
              eq5ia.style.display = "none";
              eq5ic.style.display = "none";
              eq5id.style.display = "none";
              dq6.style.display="block";
            }
            else if(addq5iiia.value === "NO"){
              eq5ib.style.display = "none";
              eq5ia.style.display = "none";
              eq5ic.style.display = "none";
              eq5id.style.display = "none";
              dq6.style.display="block";
            }
            
          });

addq5iiib.addEventListener("change", function () {
  
            if (addq5iiib.value === "C"){  
                eq5ia.style.display = "none";
                eq5ib.style.display = "none";               
                eq5ic.style.display = "block";
                eq5id.style.display = "none";
                dq6.style.display="block";
            }
            else if(addq5iiib.value === "D"){
                eq5ia.style.display = "none";
                eq5ib.style.display = "none";
                eq5ic.style.display = "none";
                eq5id.style.display = "block";
                dq6.style.display="block";
            }
            else if(addq5iiib.value === "NO"){
              eq5ia.style.display = "none";
              eq5ib.style.display = "none";
              eq5ic.style.display = "none";
              eq5id.style.display = "none";
              eq5id.style.display = "none";
              dq6.style.display="block";
                              

          }
          });
          
dq6.addEventListener("change", function () {
  
            if (dq6.value !== "badvalue"){ 
                
              dq6ii.style.display = "block";
                          
            }
            }); 

dq6ii.addEventListener("change", function () {
  
              if (dq6ii.value !== "badvalue"){ 
                  
                dq7.style.display = "block";
                            
              }
              }); 

q7.addEventListener("change", function () {
  
                if (q7.value !== "badvalue"){ 
                    
                  dq8.style.display = "block";
                              
                }
                });

q8.addEventListener("change", function () {
  
                  if (q8.value !== "badvalue"){ 
                      
                    q8n.style.display = "block";
                                
                  }
                  });
                  
q8a.addEventListener("change", function () {
  
                    if (q8a.value !== "badvalue"){ 
                        
                      dq9.style.display = "block";
                                  
                    }
                    });

q9.addEventListener("change", function () {
  
                      if (q9.value !== "badvalue"){ 
                          
                        dq10.style.display = "block";
                                    
                      }
                      });
                      

q10i.addEventListener("change", function () {
  
                       if (q10i.value !== "badvalue"){ 
      
                        dq10i.style.display = "block";
                
                       }
                       });

q10.addEventListener("change", function () {
  
                        if (q10.value !== "badvalue"){ 
       
                         dq11.style.display = "block";
                 
                        }
                        });

q11.addEventListener("change", function () {
  
                        if (q11.value !== "badvalue"){ 
         
                         dq12.style.display = "block";
                   
                        }
                        });

q12.addEventListener("change", function () {
  
                          if (q12.value === "A"){                 
                          qq5ia.style.display = "block";
                          qq5ib.style.display = "none";
                          qq5ic.style.display = "none";
                          qq5id.style.display = "none";
                                       
                          } 
                          else if(q12.value === "B")
                          {
                          qq5ib.style.display = "block";           
                          qq5ia.style.display = "none";
                          qq5ic.style.display = "none";
                          qq5id.style.display = "none";              
                          }
                          else if(q12.value === "C")
                          {
                          qq5ic.style.display = "block";
                          qq5ia.style.display = "none";
                          qq5ib.style.display = "none";
                          qq5id.style.display = "none";            
                          }
                          else if(q12.value === "D")
                          {
                          qq5id.style.display = "block";
                          qq5ia.style.display = "none";
                          qq5ib.style.display = "none";
                          qq5ic.style.display = "none";            
                          }
                          else if(q12.value === "E")
                          {
                          qq5id.style.display = "none";
                          qq5ia.style.display = "none";
                          qq5ib.style.display = "none";
                          qq5ic.style.display = "none";            
                          }
                  
                                   
                          });



                        
resultButton.addEventListener('click', function () 
{
  let crs = 0;


//married
if (q1.value === "B" || q1.value === "E"){
       
    crs= crs+10;

  } else {    
    crs= crs+0;
     }


//AGE
if (q3.value === "17")
{
crs= crs+0;
} 
else if(q3.value === "18")
{    
 crs= crs+90;
}
else if(q3.value === "19")
{    
 crs= crs+95;
}
else if(q3.value === "20")
{    
 crs= crs+100;
}
else if(q3.value === "21")
{    
 crs= crs+100;
}
else if(q3.value === "22")
{    
 crs= crs+100;
}
else if(q3.value === "23")
{    
 crs= crs+100;
}
else if(q3.value === "24")
{    
 crs= crs+100;
}
else if(q3.value === "25")
{    
 crs= crs+100;
}
else if(q3.value === "26")
{    
 crs= crs+100;
}
else if(q3.value === "27")
{    
 crs= crs+100;
}
else if(q3.value === "28")
{    
 crs= crs+100;
}
else if(q3.value === "29")
{    
 crs= crs+100;
}
else if(q3.value === "30")
{    
 crs= crs+95;
}
else if(q3.value === "31")
{    
 crs= crs+90;
}
else if(q3.value === "32")
{    
 crs= crs+85;
}
else if(q3.value === "33")
{    
 crs= crs+80;
}
else if(q3.value === "34")
{    
 crs= crs+75;
}
else if(q3.value === "35")
{    
 crs= crs+70;
}
else if(q3.value === "36")
{    
 crs= crs+65;
}
else if(q3.value === "37")
{    
 crs= crs+60;
}
else if(q3.value === "38")
{    
 crs= crs+55;
}
else if(q3.value === "39")
{    
 crs= crs+50;
}
else if(q3.value === "40")
{    
 crs= crs+45;
}
else if(q3.value === "41")
{    
 crs= crs+35;
}
else if(q3.value === "42")
{    
 crs= crs+25;
}
else if(q3.value === "43")
{    
 crs= crs+15;
}
else if(q3.value === "44")
{    
 crs= crs+5;
}
else if(q3.value === "45")
{    
 crs= crs+0;
}


    

  Resultout.textContent = crs;

  });



