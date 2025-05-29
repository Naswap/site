    const form = document.getElementById('contact-form');
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const messageField = document.getElementById('message');
    const successMessage = document.getElementById('success-message');

    form.onsubmit = async function (e) {
      e.preventDefault();
      let valid = true;

      document.getElementById('name-error').textContent = '';
      document.getElementById('email-error').textContent = '';
      document.getElementById('message-error').textContent = '';
      successMessage.style.display = 'none';

      if (nameField.value.trim() === '') {
        document.getElementById('name-error').textContent = 'Please enter your name.
';
        valid = false;
      }

      if (!/\S+@\S+\.\S+/.test(emailField.value)) {
        document.getElementById('email-error').textContent = 'Please enter a valid email address.
';
        valid = false;
      }

      if (messageField.value.trim() === '') {
        document.getElementById('message-error').textContent = 'Please write your message.
';
        valid = false;
      }

      if (grecaptcha.getResponse() === '') {
        alert('Please confirm that you are not a robot.
');
        valid = false;
      }

      if (!valid) return;

      const formData = new FormData(form);

      try {
        const response = await fetch("https://formsubmit.co/EMAIL", {
          method: "POST",
          body: formData
        });

        if (response.ok) {
          form.reset();
          grecaptcha.reset();
          successMessage.style.display = 'block';
        } else {
          alert("An error occurred while sending. Please try again.
");
        }
      } catch (error) {
        alert("Failed to connect to the server.
");
      }
    };