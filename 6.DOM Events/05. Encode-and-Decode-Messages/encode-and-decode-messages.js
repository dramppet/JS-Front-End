document.addEventListener('DOMContentLoaded', solve);

function solve() {
    let encodeButton = document.querySelector("#encode button");
    let decodeButton = document.querySelector("#decode button");
    let encodeTextarea = document.querySelector("#encode textarea");
    let decodeTextarea = document.querySelector("#decode textarea");

    encodeButton.addEventListener("click", function (event) {
        event.preventDefault();
        let encodedMessage = encodeMessage(encodeTextarea.value);
        decodeTextarea.value = encodedMessage;
        encodeTextarea.value = "";
    });

    decodeButton.addEventListener("click", function (event) {
        event.preventDefault();
        decodeTextarea.value = decodeMessage(decodeTextarea.value);
    });

    function encodeMessage(message) {
        return message.split("").map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join("");
    }

    function decodeMessage(message) {
        return message.split("").map(char => String.fromCharCode(char.charCodeAt(0) - 1)).join("");
    }
}