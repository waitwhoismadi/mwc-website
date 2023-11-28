function openForm() {
    document.getElementById("myForm").style.display = "block";
    document.getElementById("formOverlay").style.display = 'block';
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("formOverlay").style.display = 'none';
}

window.addEventListener('click', function (event) {
    const form = document.getElementById('myForm');
    const overlay = document.getElementById('formOverlay');
    if (event.target === form) {
        closeForm();
    }
    if (event.target === overlay) {
        closeForm();
    }
});


const formOverlay = document.getElementById('formOverlay');

function openNav() {
    if (window.innerWidth <= 768) {
        document.getElementById("mySidebar").style.width = "100%";
    } else {
        document.getElementById("mySidebar").style.width = "250px";
    }
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}
