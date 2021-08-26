import { AiFillGithub } from "react-icons/ai";

function ThemeSwitcher() {
    function navigate() {
        window.location.href = "https://www.github.com/cefasgarciapereira"

    }
    return (
        <button
            className="contrast switcher"
            aria-label="Toggle dark mode"
            onClick={navigate}
        >
            <AiFillGithub />
        </button>
    )
}

export default ThemeSwitcher