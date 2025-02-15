document.addEventListener("DOMContentLoaded", function() {
    const backToTop = document.getElementById("back-to-top");
    const carousel = document.querySelector(".carousel");
    let scrollAmount = 0;

    // Back to Top Button Visibility
    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    // Smooth Scroll to Top
    backToTop.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Auto-scroll for Carousel
    function autoScroll() {
        if (scrollAmount < carousel.scrollWidth - carousel.clientWidth) {
            scrollAmount += 300;
        } else {
            scrollAmount = 0;
        }
        carousel.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
    setInterval(autoScroll, 3000);

    // Three.js 3D Cube
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 500, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, 500);
    document.getElementById("threejs-container").appendChild(renderer.domElement);

    // Create Cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x0071e3, wireframe: true });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 2;

    // Animate Cube Rotation
    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();

    // Responsive Three.js Canvas
    window.addEventListener("resize", function() {
        camera.aspect = window.innerWidth / 500;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, 500);
    });
});
