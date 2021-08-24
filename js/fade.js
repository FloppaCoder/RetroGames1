window.addEventListener('scroll', function(){


    var table =  document.querySelectorAll('.fade_up')[0];


    var altura = window.innerHeight/1.3;

    var distancia = table.getBoundingClientRect().top;



    console.log(altura)
    console.log(distancia)

    table.classList.add('transform_up')

      

    if(distancia  <= altura  ){

        table.classList.add('aparece');
    }

        else{
            table.classList.remove('aparece');
        }


    })



    window.addEventListener('scroll', function(){


        var table =  document.querySelectorAll('.fade_up')[1];
    
    
        var altura = window.innerHeight/1.3;
    
        var distancia = table.getBoundingClientRect().top;
    
    
    
        console.log(altura)
        console.log(distancia)
    
        table.classList.add('transform_up')
    
          
    
        if(distancia  <= altura  ){
    
            table.classList.add('aparece');
        }
    
            else{
                table.classList.remove('aparece');
            }
    
    
        })
    

        window.addEventListener('scroll', function(){


            var table =  document.querySelectorAll('.fade_up')[2];
        
        
            var altura = window.innerHeight/1.3;
        
            var distancia = table.getBoundingClientRect().top;
        
        
        
            console.log(altura)
            console.log(distancia)
        
            table.classList.add('transform_up')
        
              
        
            if(distancia  <= altura  ){
        
                table.classList.add('aparece');
            }
        
                else{
                    table.classList.remove('aparece');
                }
        
        
            })

            window.addEventListener('scroll', function(){


                var table =  document.querySelectorAll('.fade_up')[3];
            
            
                var altura = window.innerHeight/1.3;
            
                var distancia = table.getBoundingClientRect().top;
            
            
            
                console.log(altura)
                console.log(distancia)
            
                table.classList.add('transform_up')
            
                  
            
                if(distancia  <= altura  ){
            
                    table.classList.add('aparece');
                }
            
                    else{
                        table.classList.remove('aparece');
                    }
            
            
                })

                window.addEventListener('scroll', function(){


                    var table =  document.querySelectorAll('.fade_up')[4];
                
                
                    var altura = window.innerHeight/1.3;
                
                    var distancia = table.getBoundingClientRect().top;
                
                
                
                    console.log(altura)
                    console.log(distancia)
                
                    table.classList.add('transform_up')
                
                      
                
                    if(distancia  <= altura  ){
                
                        table.classList.add('aparece');
                    }
                
                        else{
                            table.classList.remove('aparece');
                        }
                
                
                    })