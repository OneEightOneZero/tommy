import {playMode} from "../configs/playmode.js"
const state = {
    singers:{},
    playing:false,
    fullScreen:false,
    playlist:[],
    sequenceList:[],
    mode:playMode.sequence,
    currentIndex:-1,
    toplist:{}
}
export default state