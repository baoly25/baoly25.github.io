document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("survey");
    const coursesContainer = document.getElementById("coursesContainer");
    let courseCount = 1;
  
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const data = new FormData(form);
        const file = data.get("image");

        if (!data.get("name") || data.get("name").trim() === "") {
            alert("Please fill out your name.");
            return;
        }
        
        if (!data.get("mascot") || data.get("mascot").trim() === "") {
            alert("Please fill out your mascot.");
            return;
        }
        
        if (!file || !file.name.match(/\.(jpg|jpeg|png)$/i)) {
            alert("Upload a PNG or JPG image.");
            return;
        }

        if (!data.get("caption") || data.get("caption").trim() === "") {
            alert("Please provide an image caption.");
            return;
        }

        if (!data.get("personal") || data.get("personal").trim() === "") {
            alert("Please fill out your personal background.");
            return;
        }

        if (!data.get("professional") || data.get("professional").trim() === "") {
            alert("Please fill out your professional background.");
            return;
        }
        if (!data.get("academic") || data.get("academic").trim() === "") {
            alert("Please fill out your academic background.");
            return;
        }

        if (!data.get("platform") || data.get("platform").trim() === "") {
            alert("Please fill out your computer platform.");
            return;
        }

        if (!data.get("development") || data.get("development").trim() === "") {
            alert("Please fill out your web development background.");
            return;
        }

        const courseTitles = data.getAll("courses[]");
        const courseDescs = data.getAll("descriptions[]");

        for (let i = 0; i < courseTitles.length; i++) {
            if (!courseTitles[i].trim()) {
                alert("Please fill out all course titles.");
                return;
            }

            if (!courseDescs[i].trim()) {
                alert("Please fill out all course descriptions.");
                return;
            }
        }

        if (!form.elements["agree"].checked) {
            alert("You must agree before submitting.");
            return;
        }

        const courses = data.getAll("courses[]");
        const descriptions = data.getAll("descriptions[]");

        const courseItems = courses.map(function (c, i) {
            return "<li><strong>" + c + ":</strong> " + descriptions[i] + "</li>";
        }).join("");
  
        const reader = new FileReader();

        reader.onload = function (e) {
            const output =
            "<h2>" + data.get("name") + " || " + data.get("mascot") + "</h2>" +
            
            "<figure><img src='" + e.target.result + "' alt='" + data.get("caption") +
            "' style='width: 173px; display: block; margin: auto;' />" +
            "<figcaption style='text-align: center; font-style: italic;'>" + data.get("caption") + "</figcaption></figure>" +

            "<section>" +
            "<ul>" +
            "<li><strong>Personal Background:</strong> " + data.get("personal") + "</li>" +
            "<li><strong>Professional Background:</strong> " + data.get("professional") + "</li>" +
            "<li><strong>Academic Background:</strong> " + data.get("academic") + "</li>" +
            "<li><strong>Programming/Software Background:</strong> " + data.get("development") + "</li>" +
            "<li><strong>Primary Computer Platform:</strong> " + data.get("platform") + "</li>" +
            "<li><strong>Courses I'm Taking and Why:</strong><ul>" + courseItems + "</ul></li>" +

            (data.get("funny") ? "<li><strong>Funny Thing:</strong> " + data.get("funny") + "</li>" : "") +
            (data.get("anything") ? "<li><strong>Anything Else:</strong> " + data.get("anything") + "</li>" : "") +

            "</ul></section><button id='resetPage'>Fill Out Again</button>";

            const resultDiv = document.createElement("div");

            resultDiv.id = "submittedData";
            resultDiv.innerHTML = output;
            form.style.display = "none";
            form.after(resultDiv);
    
            document.getElementById("resetPage").addEventListener("click", function () {
                form.reset();
                resultDiv.remove();

                document.querySelectorAll(".courseEntry").forEach(function (el, i) {
                    if (i > 0) el.remove();
                });

                form.style.display = "block";
            });
        };

        reader.readAsDataURL(file);
    });
    
    window.resetForm = function () {
        form.reset();

        document.querySelectorAll(".courseEntry").forEach(function (el, i) {
            if (i > 0) el.remove();
        });

        const submitted = document.getElementById("submittedData");

        if (submitted) submitted.remove();

        form.style.display = "block";
    };
  
    window.addCourse = function () {
        courseCount++;

        const wrapper = document.createElement("div");

        wrapper.className = "courseEntry";

        wrapper.innerHTML =
        "<label><strong>Course Title:</strong></label>" +
        "<input type='text' name='courses[]'>" +
        "<label><strong>Course Description:</strong></label>" +
        "<input type='text' name='descriptions[]'>" +
        "<button type='button'>Delete</button>";
        
        wrapper.querySelector("button").onclick = function () {
            wrapper.remove();
        };

        coursesContainer.appendChild(wrapper);
    };
});