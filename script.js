// Search Animation

const searchInput =
document.querySelector(".search-box input");

searchInput.addEventListener("focus",()=>{

    searchInput.classList.add("active-search");

});

searchInput.addEventListener("blur",()=>{

    searchInput.classList.remove("active-search");

});

// Category Animation

document.querySelectorAll(".category")
.forEach(category=>{

    category.addEventListener("click",()=>{

        category.classList.add("clicked");

        setTimeout(()=>{

            category.classList.remove("clicked");

        },600);

        // Notification Animation

        const message =
        document.createElement("div");

        message.innerText =
        "📚 Showing books in " +
        category.innerText;

        message.className =
        "notification";

        document.body.appendChild(message);

        setTimeout(()=>{
            message.classList.add("show");
        },100);

        setTimeout(()=>{

            message.classList.remove("show");

            setTimeout(()=>{
                message.remove();
            },500);

        },2000);

    });

});