const { useEffect } = require("react")

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - GameNote`
    }, [title])
}

export default useTitle;