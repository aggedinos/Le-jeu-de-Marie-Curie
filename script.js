document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('downloadBtn');
    const statusText = document.getElementById('statusText');

    // URL to the provided ZIP file
    const zipUrl = "PDFS/PDFS.zip";

    function triggerDownload(url, filename) {
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();

        setTimeout(() => {
            document.body.removeChild(a);
        }, 100);
    }

    btn.addEventListener('click', () => {
        // Prevent multiple clicks if currently downloading
        if (btn.classList.contains('loading')) return;

        // Visual UI State: Loading
        btn.classList.add('loading');
        statusText.textContent = "Packaging your game...";
        statusText.classList.add('show');

        // Simulate a small delay for a polished/premium feel
        setTimeout(() => {
            // Trigger the download
            triggerDownload(zipUrl, 'Le_jeu_de_Marie_Curie.zip');

            // Revert UI State: Success
            btn.classList.remove('loading');
            statusText.textContent = "Download complete! Enjoy your souvenirs.";

            // Fade out the success text after a few seconds
            setTimeout(() => {
                statusText.classList.remove('show');
            }, 4000);

        }, 1500);
    });
});
