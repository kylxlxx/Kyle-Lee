// script.js

document.addEventListener("DOMContentLoaded", function() {
    // 네비게이션 링크 활성화
    const navLinks = document.querySelectorAll("header nav a");
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });

    // 프로젝트 및 액티비티 카드 클릭 이벤트 리스너 추가
    document.querySelectorAll(".project-card, .activity-card").forEach(card => {
        card.addEventListener("click", function() {
            openModal(this.dataset.id);
        });
    });
});

function openModal(id) {
    const modal = document.getElementById("modal");
    const modalBody = document.getElementById("modal-body");

    let content = '';
    switch (id) {
        case 'project1':
            content = `
                <h2>Project Title 1</h2>
                <img src="project1-full.jpg" alt="Project 1" style="width: 100%; height: auto;">
                <p>Detailed description of project 1. Include images, videos, and any other content as needed.</p>
            `;
            break;
        case 'project2':
            content = `
                <h2>Project Title 2</h2>
                <img src="project2-full.jpg" alt="Project 2" style="width: 100%; height: auto;">
                <p>Detailed description of project 2. Include images, videos, and any other content as needed.</p>
            `;
            break;
        case 'project3':
            content = `
                <h2>Project Title 3</h2>
                <img src="project3-full.jpg" alt="Project 3" style="width: 100%; height: auto;">
                <p>Detailed description of project 2. Include images, videos, and any other content as needed.</p>
            `;
                break;
        case 'activity1':
            content = `
                <h2>Activity Title 1</h2>
                <img src="activity1-full.jpg" alt="Activity 1" style="width: 100%; height: auto;">
                <p>Detailed description of activity 1. Include images, videos, and any other content as needed.</p>
            `;
            break;
        case 'activity2':
            content = `
                <h2>Activity Title 2</h2>
                <img src="activity2-full.jpg" alt="Activity 2" style="width: 100%; height: auto;">
                <p>Detailed description of activity 2. Include images, videos, and any other content as needed.</p>
            `;
            break;
        // 추가적인 프로젝트 및 액티비티에 대한 케이스 추가
        default:
            content = '<p>Content not found.</p>';
            break;
    }

    modalBody.innerHTML = content;
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
