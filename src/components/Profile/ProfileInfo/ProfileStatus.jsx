import s from "./ProfileInfo.module.css";
import React from "react";

class ProfileStatus extends React.Component {
    state = { // local state
        editMode: false,
        status: this.props.status,
    }

    activateEditMode = () => {
        // console.log("this", this);
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <>
                {!this.state.editMode ? (
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "----"}</span>
                    </div>
                ) : (
                    <div>
                        <input
                            autoFocus={true}
                            onBlur={this.deactivateEditMode}
                            value={this.state.status}
                            onChange={this.onStatusChange}
                        />
                    </div>
                )}
            </>
        );
    }
}

export default ProfileStatus;