
// preloader script
window.addEventListener('load',()=>{
  const loadTime=performance.now()
  const enrolLoadTime=performance.now()
  setTimeout(preloaderFunction,loadTime)
  setTimeout(enrolPreloaderFunction,1000)
  // this is for program section
  let plus=document.querySelectorAll('.plus')
  let minus=document.querySelectorAll('.minus');
  plus.forEach(Element=>{
    Element.setAttribute('onclick','viewDetails(this)')
  })
  minus.forEach(Element=>{
    Element.setAttribute('onclick','hideDetails(this)')
  })
  // THE REST OF THE CODE IS ADDED HERE SO THEY CAN RUN ONLY IF THE LOADED


})
let preloaderFunction=()=>{
  let preloader = document.querySelector('.preloader-container');
  // preloader.style.display='none'; 
  if(preloader !==null){
    preloader.style.display='none';

 }
  // preloader.style.visibility="hidden"
  // document.querySelector("body .container").style.display='block';
 
}
let enrolPreloaderFunction=()=>{
  let enrolPreloader = document.querySelector('.enrol-preloader');

  if(enrolPreloader !==null){
     enrolPreloader.style.display='none';

  }
  // console.log(enrolPreloader)
}

// end
// script for program page

   
    let viewDetails=(Element)=>{
      let parentDiv=Element.parentElement.parentNode.parentNode.parentNode.parentNode;
      console.log(parentDiv)
      let pText=parentDiv.querySelector('.p-text');
      // console.log(pText)
      pText.classList.toggle('show')

      let minus=parentDiv.querySelector('.minus');

      let plus=parentDiv.querySelector('.plus');
      plus.classList.add('hide')
      plus.classList.remove('show')

      minus.classList.add('show')
      minus.classList.remove('hide')

      parentDiv.classList.add('show')

     let parentImg=parentDiv.querySelector('img');
     parentImg.style.height=158+'px';
    }
    let hideDetails=(Element)=>{
      let parentDiv=Element.parentElement.parentNode.parentNode.parentNode.parentNode;

      let pText=parentDiv.querySelector('.p-text');
      console.log(pText)
      pText.classList.toggle('show')

      let minus=parentDiv.querySelector('.minus');

      let plus=parentDiv.querySelector('.plus');

      minus.classList.add('hide')
      minus.classList.remove('show')

      plus.classList.add('show')
      plus.classList.remove('hide')

      
      parentDiv.classList.remove('show')

      let parentImg=parentDiv.querySelector('img');
     parentImg.style.height=300+'px';
    }

    function btnText(){
      let selectedExam = document.getElementById('examSelect').value;
      let examBtn = document.getElementById('examBtn');
      examBtn.innerText=`VISIT ${selectedExam}`;

    }
    // TO BE REMOVED
    // function register(){
    //   let exam = document.getElementById("examSelect").value;
    //   let registrationLink;
    //   switch (exam){
    //     case "WAEC":
    //       registrationLink="https://www.waec.org/";
    //       break;
    //     case "JAMB":
    //         registrationLink="https://www.jamb.gov.ng/";
    //         break;
    //     case "GCE":
    //       registrationLink="https://www.waecdirect.org/";
    //       break;
    //     case "NECO":
    //       registrationLink="https//www.neco.gov.ng/";
    //       break;
    //     case "IJMB":
    //       registrationLink="https:www.ijmb.org.ng/";
    //       break;
    //       default:  
    //       registrationLink="#"

    //   }
    //   // to open the registration link in new tab
    //   window.open(registrationLink, "_blank")
    // }
    // STOP HERE
// end

//when scrolling active nav link indicating the section
 let windowTop=window.scrollY;

let linkShowPage=()=>{
  let sections = document.querySelectorAll("body .section");
  let allNavLinks=document.querySelectorAll('.landing-page nav ul li a');
  let windowTop=window.scrollY;
  
  sections.forEach( section=>{
    let sectionTop=section.offsetTop-200;
    let sectionHeight=section.offsetHeight;
    let Id = section.getAttribute('id');
    if(windowTop>sectionTop && windowTop<sectionTop + sectionHeight){
      allNavLinks.forEach( 
        
        aLINK=>{
        aLINK.classList.remove('active');
        
        // let activeLink=document.querySelector('nav ul li a[href*="'+Id+'"]');
        let ActiveLink=document.querySelector('.landing-page nav ul li a[href*="'+Id+'"]')
        if(ActiveLink){
         ActiveLink.classList.add('active');

        }
    
      } )
    }

  } )

}
window.addEventListener('scroll',linkShowPage);



// end

let navList=document.querySelector('nav ul')


let hamburger = document.getElementById('hamburger')

let links=document.querySelectorAll('a');

function toggleUL(){

  navList.classList.toggle('display-ul');
document.querySelector('#hamburger').classList.toggle('hamburger-border'); 
}

links.forEach((link)=>{
link.addEventListener('click',()=>{
  // link.preventDefault()
  // toggleUL();
  if(navList.classList.contains('display-ul')){
     navList.classList.remove('display-ul')

  }
 
  

})

}) 
// script for contact page form validation

const contactForm =document.querySelector('#contact form ')
const contactName =document.querySelector('#contact form #name')
const contactEmail =document.querySelector('#contact form #email')
const contactTel =document.querySelector('#contact form #tel')
const contactComment =document.querySelector('#contact form #comment')
// let formName =document.querySelector('#contact form #name').value
// let formEmail =document.querySelector('#contact form #email').value
// let formTel =document.querySelector('#contact form #tel').value
// let formComment =document.querySelector('#contact form #comment').value
    let emailError=document.getElementById('email-error')
    let telError=document.getElementById('tel-error')
    let commentError=document.getElementById('comment-error')
    let nameError=document.getElementById('name-error')

  let validateName=()=>{
    let formName=document.form.name.value;
// RegExp test
  let validName=new RegExp(/^[A-Za-z]+([-'\s][A-Za-z]+)*$/)
  let isValidName=validName.test(formName)
if(formName.trim()===''){
  nameError.textContent='Enter your name please*';
  return false;
}
 if(!isValidName){
  nameError.textContent='Please enter a valid name*';
  return false;
  }else{
    nameError.textContent=''
    return true
  }   
  // **EMAIL VALIDATION FUNCTION HERE**
  }
  let validateEmail=()=>{
     let formEmail=document.form.email.value;
     let validEmail=new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/)
     let isValidEmail=validEmail.test(formEmail)
     if(formEmail.trim()===''){
      emailError.textContent='Enter your email please*';
      return false;
     }
     if(!isValidEmail){
      emailError.textContent='Please enter a valid email*';
      return false;
     }else{
      emailError.textContent=''
      return true
     }
  }
  let validateTel=()=>{
    let formTel=document.form.tel.value;
    let validTel=new RegExp(/^(\+?234|0)?[789]\d{9}$/)
    let isValidTel=validTel.test(formTel)

    if(formTel.trim()===''){
      telError.textContent='Enter your phone number please*';
      return false;
    }
     if(!isValidTel){
       telError.textContent='Please enter a valid number*';
        return false;              
      }else{
        telError.textContent=''
        return true
      }
  }
  let validateComment=()=>{
    let formComment=document.form.comment.value;
    let validComment=new RegExp(/^[\s\S]*$/)
    let isValidComment=validComment.test(formComment)

    if(formComment.trim()===''){
      commentError.textContent=' please drop your COMMENT*';
      return false;
    }
     if(!isValidComment){
      commentError.textContent='Please enter a valid message*';
      return false;
      }else{
        commentError.textContent=''
        return true
      }
  }
    let validate=(e)=>{
      e.preventDefault()
      if(validateName() && validateEmail() && validateTel() && validateComment()){
        let formNameValue=document.form.name.value;
        let formEmailValue=document.form.email.value;
        let formTelValue=document.form.tel.value;
        let formCommentValue=document.form.comment.value;
        console.log(formNameValue)
        console.log(formEmailValue)
        console.log(formTelValue)
        console.log(formCommentValue)
        document.form.name.value=''
        document.form.email.value=''
        document.form.tel.value=''
        document.form.comment.value=''
        setTimeout(()=>{
        document.getElementById('form-success').classList.add('show')

        },500)
        setTimeout(()=>{
        document.getElementById('form-success').classList.remove('show')

        },1500)
      }
    
    }


     document.addEventListener('DOMContentLoaded',()=>{
        if(contactName&&contactEmail&&contactTel&&contactComment&&contactForm){
          contactName.addEventListener('keyup',validateName)
        contactEmail.addEventListener('keyup',validateEmail)
        contactTel.addEventListener('keyup',validateTel)
        contactComment.addEventListener('keyup',validateComment)
        contactForm.addEventListener('submit',validate)
        }
    })

// FORM VALIDATION END HERE

  // function valid(){
  //   // let validEmail= new RegExp('^.+@.+\..+$');
  //   // let isValidEmail=validEmail.test(document.form.email.value)
  //   if(document.form.name.value==""){
  //     document.getElementById('error').innerHTML="Enter your name*";
  //     return false;
  //   }
  //   else if(document.form.email.value==""){
  //     document.getElementById('error').innerHTML="Enter your Email*";
  //     return false;
  //   }
  //   else if(!isValidEmail){
  //     document.getElementById('error').innerHTML="Enter valid Email*";
  //     return false;
  //   }
  //   else if(document.form.tel.value==""){
  //     document.getElementById('error').innerHTML="Enter your telephone num*";
  //     return false;
  //   }
  //   else if(document.form.tel.value!==NaN){
  //     document.getElementById('error').innerHTML="Enter your telephone num*";
  //     return false;
  //   }
  //   else if(document.form.comment.value==""){
  //     document.getElementById('error').innerHTML="Please leave a comment*";
  //     return false;
  //   }
  // }

// script for facilities section

let prevBtn = document.querySelector('.prev')
let nextBtn = document.querySelector('.next')
let slides = document.querySelectorAll('.image-list .slide')
let slideContainer = document.querySelector('.image-list')
let indicators = document.querySelectorAll('.indicators span');

indexValue=0;

function slideFunction(){
  slides.forEach( slideImg=>{
    slideImg.classList.remove('show')
  } )

  // add for indicator here
  indicators.forEach(  indicator=>{
    indicator.classList.remove('active')
  } );

  indexValue++;

  if(indexValue>slides.length-1){
    indexValue=0;
  }
  // add for indicator here
  if(indexValue>indicators.length-1){
    indexValue=0;
  }

  slides[indexValue].classList.add('show');
  // add for indicator here
  indicators[indexValue].classList.add('active')
}
// slideFunction()
  document.addEventListener('DOMContentLoaded',()=>{
    if(nextBtn){
      nextBtn.onclick=()=>{
        slideFunction()
        clearInterval(slideID);
    }
      
      // add for indicator too
      
// to stop slide process on mouseover
slideContainer.onmouseover=()=>{
  clearInterval(slideID);
}


prevBtn.onclick=()=>{
  slides.forEach( slideImg=>{
    slideImg.classList.remove('show')
  } )

  // add for indicator here
  indicators.forEach(  indicator=>{
    indicator.classList.remove('active')
  } );

  indexValue--;

  if(indexValue<0){
    indexValue=slides.length-1;
  }
  // add for indicator here
  if(indexValue<0){
    indexValue=indicators.length-1;
  }

  slides[indexValue].classList.add('show');
  // add for indicator here
  indicators[indexValue].classList.add('active')
  clearInterval(slideID);

}
let slideID;
// auto slide 
let slideAutoFunction=()=>{
  slideID=setInterval( slideFunction,3000 );
}
slideAutoFunction();
// on mouveover stop auto slide
  
  slideContainer.addEventListener('mouseover',()=>{
    clearInterval(slideID);
    nextBtn.style.display='block';
    prevBtn.style.display='block';
  
  })
// on mouveout restart auto slide
  
  slideContainer.addEventListener('mouseout',()=>{
    slideAutoFunction();
    nextBtn.style.display='none';
    prevBtn.style.display='none';
    
  })
  
// end of facilities section script

      }
  })



