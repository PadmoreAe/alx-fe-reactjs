import { useUserStore, useSettingsStore } from "../stores";

const Dashboard =()=>{
    const user = useUserStore((state)=>(state.user))
    const toggleDarkMode = useSettingsStore((state) => state.toggleDarkMode);

    return(
        <>
        <div>Hello: {user}</div>
        <button onClick={toggleDarkMode}>Toggle DarkMode</button>
        </>
    )
}

export default Dashboard
