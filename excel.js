fetch('https://online-api.onrender.com')
   .then(response => response.json())
   .then(json => {
                console.log(json)
                for (let i = 0; i < json.Sheet1.length; i++) {
                    
                                
                }
                var divvv = `<div class="testimonial-item">
                <p class="fs-4 fw-normal text-light mb-4"><i class="fa fa-quote-left text-primary me-3"></i></p>
                <div class="d-flex align-items-center">
                 <img class="img-fluid rounded-circle" src="img/testimonial-2.jpg" alt="">
                <div class="ps-4">
                <h5 class="text-uppercase text-light">mohamad</h5>
                <span class="text-uppercase text-secondary">Profession</span>
              </div>
              </div>
             </div>`
    
    var div = document.getElementById('divv');     
    var divv = document.createElement('div');
    divv.innerHTML = divvv;
    
    
    div.appendChild(divv); 
                
                });