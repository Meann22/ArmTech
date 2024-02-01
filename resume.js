<script>
    document.getElementById('downloadResume').addEventListener('click', function (event) {
        // Prevent the default behavior (opening in the browser preview)
        event.preventDefault();

    // Trigger download when the link is clicked
    window.location.href = "our-resume.docx";
        });
</script>