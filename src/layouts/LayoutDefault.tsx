import AppToolbar from "./../components/AppToolbar"

const LayoutDefault = (props) => {
    return (
        <div>
            <AppToolbar></AppToolbar>
            {props.children}
        </div>
    )
}
export default LayoutDefault;