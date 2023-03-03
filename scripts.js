function update_theme(theme)
{
    if (theme === 'dark') document.body.classList.add('dark');
    else document.body.classList.remove('dark');
}

function switch_theme(theme)
{
    localStorage.setItem('theme_mode', theme);
    update_theme(theme);
}

const theme_mode = localStorage.getItem('theme_mode');

if (!theme_mode)
{
    localStorage.setItem('theme_mode', 'dark');
}
update_theme(theme_mode);