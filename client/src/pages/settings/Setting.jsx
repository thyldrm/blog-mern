import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar";

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">
                        Update Your Account
                    </span>
                    <span className="settingsDeleteTitle">
                        Delete Your Account
                    </span>
                </div>
                <form action="" className="settingsForm">
                    <label htmlFor="">Profile Picture</label>
                    <div className="settingsPP">
                        <img src="https://picsum.photos/200/300" alt="" />
                        <label htmlFor="fileInput"><i class="settingsPPIcon fas fa-user-circle"></i></label>
                        <input type="file" id="fileInput" style={{display:"none"}}></input>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="ty" name="name" />
                    <label>Email</label>
                    <input type="email" placeholder="ty@gmail.com" name="email" />
                    <label>Password</label>
                    <input type="password" placeholder="Password" name="password" />
                    <button className="settingsSubmitButton" type="submit">
                        Update
                    </button>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}
