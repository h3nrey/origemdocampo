const blocks = document.getElementsByClassName("block");
const circleDiv = document.querySelector(".calcHolder .c")
const retoDiv = document.querySelector(".calcHolder .r")
const bombinaDiv = document.querySelector(".calcHolder .b")
const solenoideDiv = document.querySelector(".calcHolder .s")

for (const block of blocks) {
    block.addEventListener('click', function() {
        block.classList.toggle("selected");

        if(block.id == retoDiv.className[0]) {
            retoDiv.classList.toggle("hidden")
        } else if(block.id == circleDiv.className[0]) {
            circleDiv.classList.toggle("hidden")
        } else if(block.id == bombinaDiv.className[0]) {
            bombinaDiv.classList.toggle("hidden")
        } else if(block.id == solenoideDiv.className[0]) {
            solenoideDiv.classList.toggle("hidden")
        }
        
    })
}
