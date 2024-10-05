import { useRouteError } from "react-router-dom"

export const Error = () => {
    const errData = useRouteError()
    return (
        <div>
        <h1>Oops!</h1>
        <div>Something went wrong</div>
        <h3>{errData?.status}: {errData?.statusText}</h3>
        </div>
    )
}