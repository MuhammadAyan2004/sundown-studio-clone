document.getElementById("design-btn").addEventListener("click", function() {
    document.getElementById("main-image").src = "design-image.jpg";
    document.getElementById("main-text").innerText = "Our team works with our clients to refine an idea and concept into an executable design...";
});

document.getElementById("project-btn").addEventListener("click", function() {
    document.getElementById("main-image").src = "project-image.jpg";
    document.getElementById("main-text").innerText = "We create a final design that encompasses the brand narrative to bring stories to life...";
});

document.getElementById("execution-btn").addEventListener("click", function() {
    document.getElementById("main-image").src = "execution-image.jpg";
    document.getElementById("main-text").innerText = "We provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.";
});
