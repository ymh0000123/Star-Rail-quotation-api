function xt() {
    if (document.getElementById("StarRailQuotation")) {
    const textFile = "./Star-Rail-quotation.txt";
    fetch(textFile)
        .then((response) => response.text())
        .then((text) => {
        const lines = text.split("\n");
        const randomIndex = Math.floor(Math.random() * lines.length);
        const randomLine = lines[randomIndex];
        document.getElementById("StarRailQuotation").textContent = randomLine;
        console.log(randomLine);
        })
        .catch((error) => {
        console.error("Error loading text file:", error);
        });
    }
}

xt()