document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementsByClassName('contactForm');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const formData = new FormData(form);
      const data = {
        yourName: formData.get('yourName'),
        emailAddress: formData.get('emailAddress'),
        subject: formData.get('subject'),
        message: formData.get('message')
      };

      document.querySelector(".out code").innerHTML = out;
  
      console.log('Form Data Submitted:', data);

      });
    });