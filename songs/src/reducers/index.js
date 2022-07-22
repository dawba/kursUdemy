import {combineReducers} from "redux";

const songsReducer = () => {
    return [
        {
            title: "No scrubs",
            duration: "4:03"
        },
        {
            title: "All star",
            duration: "3:15"
        },
        {
            title: "Toxic",
            duration: "2:43"
        },
        {
            title: "All i want it that way",
            duration: "1:30"
        }
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === "SELECTED_SONG"){
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})