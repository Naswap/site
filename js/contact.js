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
        document.getElementById('name-error').textContent = 'الرجاء إدخال الاسم.';
        valid = false;
      }

      if (!/\S+@\S+\.\S+/.test(emailField.value)) {
        document.getElementById('email-error').textContent = 'يرجى إدخال بريد إلكتروني صحيح.';
        valid = false;
      }

      if (messageField.value.trim() === '') {
        document.getElementById('message-error').textContent = 'الرجاء كتابة الرسالة.';
        valid = false;
      }

      if (grecaptcha.getResponse() === '') {
        alert('يرجى تأكيد أنك لست روبوتاً.');
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
          alert("حدث خطأ أثناء الإرسال. حاول مرة أخرى.");
        }
      } catch (error) {
        alert("فشل الاتصال بالخادم.");
      }
    };