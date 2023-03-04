const items_names = ['IT Fundamentals', 'IT Fundamentals - .NET Beginner', '.NET Summer Program 2022']

const certificates_container = document.getElementById('certificates-container');

function append_file(item_name, file_name)
{
    certificates_container.innerHTML += `<a href="files/${file_name}" class="tab-text text-center col-sm-4 my-2">
    <div class="d-flex align-items-center justify-content-center tab-div file-tab">
        ${item_name}
    </div>
</a>
`
}

for (let i = 1; i <= 3; i++)
{
    append_file(items_names[i - 1], `certificate_${i}.png`);
}
