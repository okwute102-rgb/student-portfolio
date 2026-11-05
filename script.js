// --- ACADEMIC PLANNER LOGIC ---
const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

if (addTaskBtn) {
    addTaskBtn.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const li = document.createElement('li');
        li.style.display = "flex";
        li.style.justifyContent = "space-between";
        li.style.alignItems = "center";
        li.style.padding = "0.5rem";
        li.style.marginTop = "0.5rem";
        li.style.background = "#0f172a";
        li.style.borderRadius = "4px";

        const span = document.createElement('span');
        span.textContent = taskText;

        const actionsDiv = document.createElement('div');

        // Complete Button
        const completeBtn = document.createElement('button');
        completeBtn.textContent = "Complete";
        completeBtn.style.marginRight = "0.5rem";
        completeBtn.style.background = "#22c55e";
        completeBtn.addEventListener('click', function () {
            span.style.textDecoration = span.style.textDecoration === "line-through" ? "none" : "line-through";
        });

        // Delete Button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete";
        deleteBtn.style.background = "#f43f5e";
        deleteBtn.addEventListener('click', function () {
            taskList.removeChild(li);
        });

        actionsDiv.appendChild(completeBtn);
        actionsDiv.appendChild(deleteBtn);
        li.appendChild(span);
        li.appendChild(actionsDiv);
        taskList.appendChild(li);

        taskInput.value = "";
    });
}

// --- CONTACT FORM VALIDATION LOGIC ---
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();

        let isValid = true;

        // Name Validation
        if (name === "") {
            document.getElementById('nameError').textContent = "Name field cannot be empty.";
            isValid = false;
        } else {
            document.getElementById('nameError').textContent = "";
        }

        // Email Validation
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (email === "") {
            document.getElementById('emailError').textContent = "Email field cannot be empty.";
            isValid = false;
        } else if (!email.match(emailPattern)) {
            document.getElementById('emailError').textContent = "Please enter a valid email format.";
            isValid = false;
        } else {
            document.getElementById('emailError').textContent = "";
        }

        // Phone Validation
        if (phone === "") {
            document.getElementById('phoneError').textContent = "Phone number cannot be empty.";
            isValid = false;
        } else {
            document.getElementById('phoneError').textContent = "";
        }

        // Message Validation
        if (message === "") {
            document.getElementById('messageError').textContent = "Message field cannot be empty.";
            isValid = false;
        } else {
            document.getElementById('messageError').textContent = "";
        }

        // Success Confirmation
        if (isValid) {
            document.getElementById('successMessage').textContent = "Thank you! Your message has been successfully sent.";
            contactForm.reset();
        } else {
            document.getElementById('successMessage').textContent = "";
        }
    });
}