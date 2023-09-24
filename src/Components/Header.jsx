import { useState } from "react"

function Header() {
    const sunIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
</svg>
    const moonIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
</svg>
    const [icon, setIcont] = useState(getIconForCurrentTheme())


    function getIconForCurrentTheme() {
        if(localStorage.theme == 'dark') {
            return moonIcon
        } else {
            return sunIcon
        }
    }

    function toggleTheme() {
        if(localStorage.theme == 'dark') {
            localStorage.theme = 'light'
        } else {
            localStorage.theme = 'dark'
        }
        setTheme();
        setIcont(getIconForCurrentTheme())
    }
    function setTheme() {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            localStorage.theme = 'dark'
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
    }

    return (
        <header className="mb-4 sticky top-0 bg-inherit flex items-center justify-between">
            <div className="flex items-center p-4">
                <div className="w-10 h-10 bg-green-500 dark:bg-blue-400 text-white rounded-full flex items-center justify-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
                    </svg>
                </div>
                <h1 className="text-xl font-semibold">QR Panda</h1>
            </div>
            <div className="h-10 w-10 border-2 rounded-lg border-green-500 dark:border-blue-400 m-4 flex items-center justify-center cursor-pointer" onClick={toggleTheme}>
                {icon}
            </div>
        </header>
    );
}

export default Header