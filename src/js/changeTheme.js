
localStorage.setItem('theme', 'dark')
localStorage.getItem('theme')

function changeTheme()
{
    document.getElementsByTagName("body").style = "background-color: black; color: white;"
}
