function transform(type) {
    const input = document.getElementById("inputText").value;
    let result = "";

    switch (type) {
        case "lower":
            result = input.toLowerCase();
            break;
        case "upper":
            result = input.toUpperCase();
            break;
        case "trim":
            result = input.trim();
            break;
        case "camel":
            result = input.trim().toLowerCase().replace(/[^a-z0-9]+(.)/g, (_, c) => c.toUpperCase());
            break;
        case "pascal":
            result = input.trim().toLowerCase().replace(/(?:^|[^a-z0-9]+)(.)/g, (_, c) => c.toUpperCase());
            break;
        case "snake":
            result = input.trim().toLowerCase().replace(/[^a-z0-9]+/g, "_");
            break;
        case "kebab":
            result = input.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-");
            break;
        default:
            result = input;
    }

    document.getElementById("outputText").textContent = result;
}

document.getElementById("outputText").textContent = result;

