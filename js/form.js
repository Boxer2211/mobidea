document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#userForm");
    const urlParams = new URLSearchParams(window.location.search);

    ["s1", "s2", "first_name", "address", "post_code", "phone", "email"].forEach((param) => {
        const field = form.querySelector(`[name=${param}]`);
        if (field && urlParams.get(param)) {
            field.value = urlParams.get(param);
        }
    });

    form.addEventListener("submit", (e) => {
        const phoneInput = document.querySelector("#phone");
        if (!phoneInput.value.startsWith("+49")) {
            e.preventDefault();
            alert("Phone must have DE geo location (+49)");
        }
    });
});
